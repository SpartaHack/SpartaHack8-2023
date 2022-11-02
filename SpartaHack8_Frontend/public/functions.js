window.document.onload = function(e){
    function handleForm(event) { event.preventDefault(); }
    document.getElementById("submit").addListener("click", add_email);
    document.getElementById("send_emails").addListener("click", send_curr_email);
}

async function add_email(e){
    e.preventDefault()
    document.getElementById("email_loading").style.display = "block";
	const email = document.getElementById("email").value;
    console.log(email);
    const response = await fetch('https://us-central1-spartahack8.cloudfunctions.net/add_email', {
    method: 'POST',
    body:  JSON.stringify({"email": email}),
    headers: {
      'Content-Type': 'application/json'
        }
    });
    const myJson = await response.json();
    console.log(myJson);
    document.getElementById("email_loading").style.display = "None";
    document.getElementById("email_sent").style.display = "block";
    if (myJson.message == "success") {
        setTimeout(() => {
            document.getElementById("email_sent").style.display = "None";
        }, 3000);
    } else {
        document.getElementById("email_sent").style.text = "Error";
        setTimeout(() => {
            document.getElementById("email_sent").style.display = "None";
        }, 3000);
    }

}

function submit_email(e){
    // e.preventDefault();
    add_email()
}

// async function send_emails(e) {
//     const id = "1233";
//     const name = "Joel Nataren";
//     const email = "joelnataren9@hotmail.com";
//     const message =`Hola, sos un crack`;

//     const response = await fetch("https://us-central1-spartahack8.cloudfunctions.net/send_emails", {
//         method: 'POST',
//         body: JSON.stringify({
//             "data": {
//                 id : id,
//                 name: name,
//                 email: email,
//                 message: message,
//             }
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });
//     const myJson = await response.json();
//     console.log(myJson);
// }

function send_curr_email(e) {
    send_emails();
}
