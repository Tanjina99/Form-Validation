function validate() {
    const nameEle = document.getElementById("name").value;
    const emailEle = document.getElementById("email").value;
    const phoneEle = document.getElementById("phone").value;
    const subjectEle = document.getElementById("subject").value;
    const passwordEle = document.getElementById("password").value;
    const confirmPasswordEle = document.getElementById("confirmPassword").value;
    const termsEle = document.getElementById("terms");

    if (nameEle === "") {
        showError("Name cannot be empty");
        return false;
    }

    // Check email
    if (emailEle === "") {
        showError("Email cannot be empty");
        return false;
    } else if (!validateEmail(emailEle)) {
        showError("Please enter a valid email");
        return false;
    }

     //phone 
     if (phoneEle === "" || phoneEle.length !== 10) {
        showError("Phone cannot be empty or must be 10 digits");
        return false;
    }

    if (subjectEle === "0") {
        showError("Subject must be selected!");
        return false;
    }

    if (passwordEle === "") {
        showError("Password cannot be empty");
        return false;
    }

    const specialCharacterPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (!specialCharacterPattern.test(passwordEle)) {
        showError("Password must contain at least one number and one special character");
        return false;
    }

    if (passwordEle !== confirmPasswordEle) {
        showError("Password confirmation does not match");
        return false;
    }

    if (!termsEle.checked) {
        showError("Please agree to the terms and conditions");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

function showError(message) {
    const errorElement = document.getElementById("demo");
    errorElement.textContent = message;
}

// Email validator function
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
