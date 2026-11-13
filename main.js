let planButton = document.querySelector(".inquiry-btn");

if (planButton) {
    planButton.onclick = function () {
        let destination = prompt("Where do you want to travel?");

        if (destination == null) {
            return false;
        }

        if (destination == "") {
            alert("Please enter your destination!");
            return false;
        }

        let travelers = parseInt(prompt("How many travelers?"));

        if (travelers <= 0 || travelers == "") {
            alert("Please enter a valid number of travelers!");
            return false;
        }

        alert(
            "Your Trip Details: " +
            "Destination: " + destination +
            " Travelers: " + travelers 
        );

        return false;
    };
}

let contactForm = document.querySelector(".contact-form-container form");

if (contactForm) {
    contactForm.onsubmit = function () {
        let name = document.querySelector("#name").value;
        let email = document.querySelector("#email").value;
        let subject = document.querySelector("#subject").value;
        let destination = document.querySelector("#destination").value;
        let message = document.querySelector("#message").value;

        alert(
            "Thank you, " + name + "! " +
            "Your message has been received. " +
            "Email: " + email + " " +
            "Subject: " + subject + " " +
            "Destination: " + destination + " " +
            "Message: " + message
        );

        return false;
    };
}
