const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();
const cors = require('cors')({origin: true});

var handlebars = require('handlebars');
var fs = require('fs');

const nodemailer = require("nodemailer");

async function send_email(destination, subject, content){
  const email_sender = 'hello.spartahack@gmail.com'
  const email_password = 'tfutzokpreaneifa'
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: email_sender,
        pass: email_password
    }
  });

  return transporter.sendMail({
    from: email_sender,
    to: destination,
    bcc: "soteloju@msu.edu",
    subject: subject,
    html: content
  });
}

const required_fields = [
"email",
"first_name",
"last_name",
"school",
"country_of_origin",
"graduation_date",
"major",
"hackatons_attended",
"linkedin",
"race",
"gender",
"phone",
"education_level",
"resume",
"age",
"reason_attending"];


async function format_and_send_email(destination, subject, replacements, template_name){
  var readHTMLFile = function(path, callback) {
    fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
        if (err) {
          callback(err);
        }
        else {
            callback(null, html);
        }
    });
  };

  return readHTMLFile(__dirname + template_name, async function(err, html) {
    if (err) {
      console.log('error reading file', err);
      return 100;
    }
    var template = handlebars.compile(html);
    var htmlToSend = template(replacements);

    await send_email(destination, subject, htmlToSend)
    return 200;
  });
}

function fields_validation(data,required_fields){
	var field_i;
  for(field_i in required_fields){
    var field = required_fields[field_i];
    if(!(field in data)){
      return [false, field];
    }
  }
  return [true,null];
}

// function calculate_age(birth){
//   var diff = Math.floor(new Date().getTime() - birth.getTime());
//     var day = 1000 * 60 * 60 * 24;
//     var days = Math.floor(diff/day);
//     var months = Math.floor(days/31);
//     var years = Math.floor(months/12);
//     return years;
// }

async function is_not_registered(email){
  return new Promise((resolve, reject) => {
    db.collection('registrations')
    .where("email","==",email)
    .get()
    .then((docs) => {
      resolve(docs.empty);
    })
    .catch((err) => {
      reject(err)
    });
    
  })
}

// function get_all_docs(){
//   db.collection('registrations').get()
//     .then((obj) => {

//         var documents = {};
//         obj.forEach((doc) => {

//           var email = doc.data()["email"]
//           if(!(email in documents)){
//             documents[email] = []
//           }
//           documents[email].push(doc.id);
//         })
//         for(key in documents){
//           var ids = documents[key];
//           if(ids.length >= 2){
//             // ids.pop()
//             console.log(ids);
//             for(id_index in ids){
//               var id = ids[id_index];
//               //Delete id
//             }
//           }
//         }
        
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// }


exports.registeUser = functions.https.onRequest(async (request, response) => {
  response.set({ 'Access-Control-Allow-Origin': '*' })
    cors(request, response, async () => {
        if(request.method === "POST"){
          var postData = request.body;
          var all_fields_valid = fields_validation(postData,required_fields);
          if(all_fields_valid[0]){
            //Check if already registered
            const is_possible_to_register = await is_not_registered(postData['email'])
            var test_email = 'mann@msu.edu';
            if(is_possible_to_register || postData['email'] == test_email){
              // Check date of birth
              // let birth_date = new Date(postData['date_of_birth']);
              // postData['date_of_birth'] = birth_date;
              // postData['graduation_date'] = new Date(postData['graduation_date']);
              postData["accepted_policy"] = true;
              postData["approved"] = false;
              // postData["minor"] = false;
              // if(calculate_age(birth_date) < 18){
              //   if(!("content_form" in postData)){
              //     response.status(500).send({"message":`Missing consent form for minor`});
              //   }
              //   postData["minor"] = true;
              // }
							if (postData["is_minor"]) {
								if(!("content_form" in postData)){
									response.status(500).send({"message":`Missing consent form for minor`});
								}
							}
              let is_msu_student = postData["email"].includes("@msu.edu");
              postData["msu_student"] = false;
              postData["net_id"] = null;
              if(is_msu_student){
                postData["msu_student"] = true;
                let len = postData["email"].search("@")+1;
                postData["net_id"] = postData["email"].substr(0,len-1);
              }
              postData["registered_at"] = new Date();
              if (postData['email'] == test_email){
                response.status(200).send({"message":"success", "data": postData});
              }
              else{
                db.collection('registrations')
                .add(postData)
                .then(ref => {
										var replacements = {
                      username: postData['first_name']
                    }
										format_and_send_email(postData["email"],"Your application to SpartaHack has been submitted", replacements,"/email_template.html");
                    delete postData['registered_at'];
                    response.status(200).send({"message":"success", "data": postData});
                })
                .catch((err) =>{
                    response.status(500).send({"data": "Error in firestore", "message":err});
                })
              }
              
            }
            else{
              response.status(400).send({"data": "Email already registered", "message":"Email already registered"});
            }
            
          }
          else{
            response.status(500).send({"message":`Missing ${all_fields_valid[1]} parameter`});
          }

        }
        else response.status(500).send({"message":"Please send a post request"});
    });
});



exports.sendEmailsOfApproval = functions.https.onRequest(async (request, response) => {
  response.set({ 'Access-Control-Allow-Origin': '*' })
  cors(request, response, async () => {
    if (request.method === "POST") {
      let data = request.body;
      var replacements = {
        username: data['first_name']
      }
      console.log(data);
      if (data["action"] === "approve") {
        await format_and_send_email(data["email"],"Your Application to SpartaHack Has Been Approved!", replacements,"/approval_email.html");
        response.status(200).send({"message":"success", "data": {"message": "Approval Email Sent!"}});
      } else if (data["action"] === "deny") {
        await format_and_send_email(data["email"],"Your Application to SpartaHack Has Been Denied!", replacements,"/denial_email.html");
        response.status(200).send({"message":"success", "data": {"message": "Denial Email Sent!"}});
      } else {
        response.status(400).send({message: "error", "data": "Invalid request"});
      }
    } else {
      response.status(500).send({"message": "Please send a GET request"});
    }
  });
});