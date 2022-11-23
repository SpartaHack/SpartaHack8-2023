const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();
const cors = require('cors')({origin: true});

const nodemailer = require("nodemailer");

async function send_email(destination, subject, content){
  email_sender = 'hello.spartahack@gmail.com'
  email_password = 'tfutzokpreaneifa'
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
    subject: subject,
    text: content
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
"date_of_birth"];

function fields_validation(data,required_fields){
  for(field_i in required_fields){
    var field = required_fields[field_i];
    if(!(field in data)){
      return [false, field];
    }
  }
  return [true,null];
}

function calculate_age(birth){
  var diff = Math.floor(new Date().getTime() - birth.getTime());
    var day = 1000 * 60 * 60 * 24;
    var days = Math.floor(diff/day);
    var months = Math.floor(days/31);
    var years = Math.floor(months/12);
    return years;
}

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
            if(is_possible_to_register){
              // Check date of birth
              let birth_date = new Date(postData['date_of_birth']);
              postData['date_of_birth'] = birth_date;
              postData['graduation_date'] = new Date(postData['graduation_date']);
              postData["accepted_policy"] = true;
              postData["approved"] = false;
              postData["minor"] = false;
              if(calculate_age(birth_date) < 18){
                if(!("content_form" in postData)){
                  response.status(500).send({"message":`Missing consent form for minor`});
                }
                postData["minor"] = true;
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
              db.collection('registrations').add(postData)
                .then(ref => {
                    send_email(postData["email"],"Your application to SpartaHack has been submitted","We will let you know when you are approved");
                    response.status(200).send({"message":"sucess", "data": postData});
                })
                .catch(err =>{
                    response.status(500).send({"data": "Error in firestore", "message":"Failure in saving to firebase"});
                })
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