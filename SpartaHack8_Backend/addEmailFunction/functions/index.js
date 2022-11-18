const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();
const cors = require('cors')({origin: true});
const send_emails  = require("./sendEmailsFunction");


exports.add_email = functions.https.onRequest(async (request, response) => {
    response.set({ 'Access-Control-Allow-Origin': '*' })
    cors(request, response, () => {
        if(request.method === "POST"){
            const postData = request.body;
            if("email" in postData ){
                db.collection('email_collection').add({email: postData.email})
                .then(ref => {
                    response.status(200).send({"message":"success"});
                })
                .catch(err =>{
                    response.status(500).send({"message":"Failure in saving to firebase"});
                })
            }
            else response.status(500).send({"message":"Missing email key"});
        }
        else response.status(500).send({"message":"Please send a post request"});
    });
});


exports.send_emails = send_emails.send_emails;
exports.get_all_emails = send_emails.get_all_emails;