const functions = require("firebase-functions");
const { defineSecret } = require("firebase-functions/params")
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const db = admin.firestore();
const cors = require('cors')({origin: true});


// const gmail_email = defineSecret("webmaster.spartahack@gmail.com");
// const gmail_password = defineSecret("4x3TEa6sTPSXa5!");

async function sendgridEmail(data, grid_api) {
    console.log("Sending email with data:", data);
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(grid_api);
    return sgMail
        .send(data)
        .then((response) => console.log("Succesful:", response))
        .catch((error) => console.log("Error sending email: ", error));
}

// async function getAllEmails() {
//     console.log("Here in getting all emails");
//     var tempDoc= [];
//     const snapshot = await db.collection('email_collection').get().then( (query) => {
//         query.forEach( (doc) => {
//             if (doc.data().email != "") {
//                 tempDoc.push({id: doc.id, ...doc.data()});
//             }
//         });
//         // console.log(tempDoc);
//         return tempDoc
//     });
//     return snapshot
// }

exports.get_all_emails = functions.https.onRequest(async (request, response) => {
    response.set({ 'Access-Control-Allow-Origin': '*' })
    console.log("Here in get_all emails")
    cors(request, response, () => {
        // async function getEmails() {
        //     const emails = await db.collection('email_collection').get()
        //     console.log(emails)
        //     all_emails = emails.docs.map((doc) => {
        //         return doc.data().email;
        //     })
        //     // console.log(all_emails);
        //     return all_emails
        // }
        if(request.method == "GET"){
            // const emails = await getEmails()
            const emails = db.collection('email_collection').get()
            .then((obj) => {
                const all = obj.docs.map(doc => {
                    return doc.data().email
                })
                response.status(200).send(
                    {data: all
                    }
                );
            })
            .catch(() => {
                response.status(500).send({"message":"Error trying to get all emails"});
            })
            // console.log(emails);
            // const emails = await db.collection('email_collection').get()
            // console.log(emails)
            // all_emails = emails.docs.map((doc) => {
            //     return doc.data().email
            // })
            return emails
        }
        else response.status(500).send({"message":"Please send a post request"});
    });
});


// function sendEmail() {
    
// }

exports.send_emails = functions.runWith({secrets: ["GMAIL_EMAIL", "GMAIL_PASSWORD", "GRID_API"]}).https.onRequest((request, response) => {
        response.set({ 'Access-Control-Allow-Origin': '*' });
        //Debugging purposes
        console.log('Here in sending emails, and the info is:');
        console.log(JSON.stringify(request.body));
        // list_of_emails.then(response => console.log(response));

        console.log("Got the list of emails which is :");
        console.log(list_of_emails);
        // Enabling CORS using the "cors" express middleware
        cors(request, response, () => {
            if (request.method == 'POST') {

                //Get all the information for contacts
                // const id = request.body.data.id;
                // const name = request.body.data.name;
                const email = doc.data().email;
                // const message = request.body.data.message;
                const snapshot = db.collection('email_collection').get().then( (query) => {
                    const tempDoc= [];
                    query.forEach( (doc) => {
                        if (doc.data().email == "joelnataren9@hotmail.com" && !tempDoc.includes(doc.data().email) ) {
                            console.log("Here with the id:" , doc.id," and the data", doc.data().email);
                            const mailOptions = {
                                from: "natarenm@msu.edu",
                                to: doc.data().email,
                                bcc: 'natarenm@msu.edu',
                                subject: 'SpartaHack Today!',
                                // html: {path: "../../../SpartaHack8_Frontend/public/404.html"}
                                body: `<h1>Welcome to Spartahack</h1>
                                <p> <b>Email: </b>${request.body.data.email} </p>`,
                                replyTo: 'hello@spartahack.com',
                                templateId: "d-fdf232bb751b4806b4172df335ded682",
                                dynamic_template_data: {
                                    name: "Joel Nataren"
                                }
                            };
                            sendgridEmail(mailOptions, process.env.GRID_API);
                        }
                        tempDoc.push({id: doc.id, ...doc.data()});
                    // console.log(tempDoc);
                    });
                });

                return sendgridEmail(mailOptions, process.env.GRID_API);
            }
        });

        console.log("something")
});


