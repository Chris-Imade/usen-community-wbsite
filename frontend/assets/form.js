// Handle form submission
document.querySelector(".btn-submit").onclick = function (event) {
    event.preventDefault();
    sendForm();
    // console.log("form submitted")
};

document.querySelector(".btn-subscribe").onclick = function (event) {
    event.preventDefault();
    sendNewsLetter();
}

function sendForm () {
    emailjs.sendForm("service_jk5zi5o", "template_1sy6pgn", "#form").then(
        function (response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("SUCCESS!");
            document.querySelector("#form").reset();
        },
        function (error) {
            console.log("FAILED...", error);
        }
    );      

    console.log("Working...")
}


function sendNewsLetter () {
    emailjs.sendForm("service_jk5zi5o", "template_sprdpqu", "#newsletter-form").then(
        function(response) {
            console.log("SUCCESS!", response.status, response.text);
            document.querySelector("#newsletter-form").reset();
            alert("SUCCESS!");
        },
        function (error) {
            console.log("FAILED...", error);
        }
    )
}