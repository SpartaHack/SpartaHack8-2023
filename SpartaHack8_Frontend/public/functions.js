const lastSection = document.getElementById('lastSection')
const lastSectionHeight = lastSection.clientHeight
const lastSectionTop = lastSection.offsetTop
const pageHeight = lastSectionTop + lastSectionHeight
const navBarHeight = document.querySelector('nav').offsetHeight
const bgElementscontainer = document.getElementById('backgroundElementsContainer')
const bgCells = document.getElementById('backgroundCells')
const bgTexture = document.getElementById('backgroundTexture')
const bgBlobs = document.getElementById('backgroundBlobs')
const heightSetter = () => {
    bgElementscontainer.style.height = `${pageHeight}px`
    bgCells.style.height = `${pageHeight}px`
    bgTexture.style.height = `${pageHeight + navBarHeight}px`
    bgBlobs.style.height = `${pageHeight + navBarHeight}px`

    console.log(`${pageHeight + navBarHeight}px`)
}
heightSetter()
window.onresize = heightSetter;

window.document.onload = function (e) {
    function handleForm(event) { event.preventDefault(); }
    document.getElementById("submit").addListener("click", add_email);
    document.getElementById("send_emails").addListener("click", send_curr_email);
}

// function send_curr_email(e) {
//     send_emails();
// }


window.document.onload = function(e){
    function handleForm(event) { event.preventDefault(); }
    document.getElementById("submit").addListener("click", add_email);
    // document.getElementById("send_emails").addListener("click", send_curr_email);
}

async function add_email(e){
    e.preventDefault()
    document.getElementById("form_add_info").style.display = "None";
    document.getElementById("email_loading").style.display = "inline";
	const email = document.getElementById("email").value;
    console.log(email);
    const response_emails = await fetch('https://us-central1-spartahack8.cloudfunctions.net/get_all_emails', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
        }
    });
    console.log(response_emails)
    const emails_json = await response_emails.json();
    const emails = emails_json.data
    if (!emails.includes(email)) {
        const response = await fetch('https://us-central1-spartahack8.cloudfunctions.net/add_email', {
        method: 'POST',
        body:  JSON.stringify({"email": email}),
        headers: {
          'Content-Type': 'application/json'
            }
        });
        const myJson = await response.json();
        console.log(myJson);
        document.getElementById("email_sent");
        if (myJson.message == "success") {
            document.getElementById("email_loading").style.display = "None";
            document.getElementById("email_sent").style.display = "inline";
            // setTimeout(() => {
            // document.getElementById("email_sent").style.display = "None";
            // }, 3000);
        } else {
            document.getElementById("email_loading").style.display = "None";
            document.getElementById("email_error").style.display = "inline";
            // setTimeout(() => {
            //     document.getElementById("email_loading").style.display = "None";
            // }, 3000);
        }
    } else {
        console.log("Error! Not added because it is already registered");
            document.getElementById("email_loading").style.display = "None";
            document.getElementById("email_exists").style.display = "inline";
        // setTimeout(() => {
        //     document.getElementById("email_handling").style.display = "None";
        // }, 3000);
    }

}

// function submit_email(e){
//     add_email()
// }

// function send_curr_email(e) {
//     send_emails();
// }