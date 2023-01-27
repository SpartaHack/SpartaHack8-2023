const functions = require("firebase-functions");
const admin = require('firebase-admin');
// const storage = require('fie')
admin.initializeApp();

const db = admin.firestore();
const storage = admin.storage();
// storage.useEmulator("localhost", 9199);

const cors = require('cors')({origin: true});

var handlebars = require('handlebars');
var fs = require('fs');

const nodemailer = require("nodemailer");
const { getMaxListeners } = require("process");

async function send_email(destination, subject, content){
  const email_sender = 'apikey'
  const email_password = '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'
  const transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 465,
    auth: {
        user: email_sender,
        pass: email_password
    }
  });

  return transporter.sendMail({
    from: "hello.spartahack@gmail.com",
    to: destination,
    bcc: "soteloju@msu.edu",
    subject: subject,
    html: content
  });
}

async function send_multiple_email(login,destination, subject, content,email_sender = 'hello.spartahack@gmail.com'){
  return login.sendMail({
    from: email_sender,
    to: destination,
    bcc: "soteloju@msu.edu",
    subject: subject,
    html: content
  });
}

async function send_professors_email(destination, subject, content){
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
    html: content,
    attachments: [
      {
        filename: "SH8_Flyer.png",
        path: "https://firebasestorage.googleapis.com/v0/b/spartahack8.appspot.com/o/img%2FSH8%20Flyer.png?alt=media&token=83c03746-236f-4960-9f08-f08d8f7712a7"
      }
    ]
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

async function format_and_send_professors_email(destination, subject, replacements, template_name){
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

    await send_professors_email(destination, subject, htmlToSend)
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

function get_ids_to_replace(data, field, iterations){
  var documents = {};
  data.forEach((doc) => {
    var field_value = doc.data()[field].trim().toLowerCase();
    if(iterations.includes(field_value)){
      if(!(field_value in documents)){
        documents[field_value] = []
      }
      documents[field_value].push(doc.id);
    }
  })
  return documents;
}

function replace_field_iterations(data, field_name, iterations, replacement){
  var wrong_iterations_ids = get_ids_to_replace(data, field_name, iterations);
  var all_ids = [];
  for(key in wrong_iterations_ids){
    all_ids.push(...wrong_iterations_ids[key]);
  }
  for(id_i in all_ids){
    const id = all_ids[id_i];
    // console.log(id);
    // console.log({[field_name]: replacement})
    db.collection("registrations").doc(id).update({[field_name]: replacement})
    .then(() => {
      console.log(id + " Document successfully updated!");
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
  }
}

function get_possible_iterations(field_name){
  db.collection('registrations').get()
  .then((obj) => {
    var documents = {};
    obj.forEach((doc) => {
      var field_value = doc.data()[field_name];
      if(!(field_value in documents)){
        documents[field_value] = 0;
      }
      documents[field_value] += 1;
    })

    for(key in documents){
      console.log(`${key}|${documents[key]}`);
    }
  })
  .catch((err) => {
    console.log(err);
  })
}

function replace_all_iterations(){
  db.collection('registrations').get()
    .then((obj) => {
        var usa_iterations = ["united states","united states of america", "u.s.", "us",'usa'];
        var msu_iterations = ["michigan-state-uni"];
        replace_field_iterations(obj, "country_of_origin",usa_iterations, "USA");
        replace_field_iterations(obj, "school",msu_iterations, "Michigan State University");
    })
    .catch((err) => {
      console.log(err);
    })
}

// exports.testGetAllDocs = functions.https.onRequest(async (request, response) => {
//   // get_all_docs();
//   replace_all_iterations();
//   response.status(200).send({"data": "Sucess"});
// })


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

function get_all_users(only_accepted = false){
  var db_query = db.collection('registrations');
  if(only_accepted){
    db_query = db.collection('registrations').where("approved","==",true);
  }

  return new Promise((resolve, reject) => {
    db_query.get()
      .then((obj) => {
        var all_data = [];
        obj.forEach((doc) => {
          var data = doc.data();
          all_data.push(data)
        });
        resolve(all_data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      })
  })
}

async function send_email_with_timeout(user_data) {
  let replacements = {
    name: user_data["first_name"]
  }
  setTimeout(() => {
    format_and_send_email("natarenm@msu.edu", "Important", replacements,"/SH8-Email-Participants.html");
  }, 10000);
}

function open_file(path){
  return new Promise((resolve, reject) => {
    fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
      if (err) {
        console.log(err);
        reject(err);
      }
      else {
        resolve(html);
      }
    });
  })
  
}
exports.sendMassEmail = functions.https.onRequest(async (request, response) => {
  // ARGUMENTS:
  // target: String: approved/all | Default = accepted
  // subject: String
  response.set({ 'Access-Control-Allow-Origin': '*' })
  cors(request, response, async () => {
    if (request.method === "POST") {
      let data = request.body;
      // let folder_name = "templates/";
      var target = "approved"
      if("target" in data){
        target = data.target;
      }
      let users = [];
      if(target == "test"){
        users = [
          {email:"aswalman@msu.edu", first_name:"Mann"}, 
          {email:"aswalman@msu.edu", first_name:"Mann"},
          {email:"spechtle@msu.edu", first_name:"Leonardo"},
          {email:"leo.s.specht@gmail.com", first_name:"Leonardo"},
        ];
      }
      else{
        users = await get_all_users(target === "approved");
      }

      var file = await open_file("SH8-Email-Participants.html");
      var template = handlebars.compile(file);
      const email_sender = 'apikey'
      const email_password = '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'
      const transporter = nodemailer.createTransport({
        host: 'smtp.sendgrid.net',
        port: 587,
        auth: {
            user: email_sender,
            pass: email_password
        }
      });
      // Sending email to each user
      var i = 0;
      for(user_index in users){
        let user_data = users[user_index];
        var htmlToSend = template(user_data);
        send_multiple_email(transporter, user_data.email, data.subject, htmlToSend);
        console.log(user_data.email);
        i++;
        // if(i >= 100){
        //   break;
        // }
      }
      transporter.close();
      console.log(i);
      response.status(200).send("Success");
    }
    else{
      response.status(500).send("Only POST requests allowed");
    }
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

exports.sendEmailsToProfessor = functions.https.onRequest(async (request, response) => {
  response.set({ 'Access-Control-Allow-Origin': '*' })
  cors(request, response, async () => {
    if (request.method === "POST") {
      let data = request.body;
      var replacements = {
        name: data['name']
      }
      if (data["name"]) {
        await format_and_send_professors_email(data["email"],"Invitation to SpartaHack", replacements,"/professor_email_sending.html");
        response.status(200).send({"message":"success", "data": {"message": "Email sent to professor!"}});
      } else {
        response.status(500).send({"message": "Please have the necessary data"});
      }
    } else {
      response.status(500).send({"message": "Please send a GET request"});
    }
  });
});