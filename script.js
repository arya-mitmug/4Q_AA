function validateForm() {

    // clear error messages
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("birthError").innerHTML = "";
    document.getElementById("sexError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passError").innerHTML = "";
    document.getElementById("confirmError").innerHTML = "";
    document.getElementById("successMsg").innerHTML = "";
    document.getElementById("occupationError").innerHTML = "";
    document.getElementById("reasonError").innerHTML = "";
    document.getElementById("preferError").innerHTML = "";

    let isValid = true;

    // variable decleration
    let name = document.getElementById("name").value.trim();
    let birthdate = document.getElementById("birthdate").value;
    let email = document.getElementById("email").value.trim();
    let sexOptions = document.getElementsByName("sex");
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let occupation = document.getElementById("occupation").value;
    let reasons = document.getElementsByName("reason");
    let prefers = document.getElementsByName("prefer");

    // check if name is more than 2 characters ===================================================
    if (name === "" || name.length < 2) {
        document.getElementById("nameError").innerHTML = "Name must have at least 2 characters.";
        isValid = false;
    }

    // check if age is more than 13 ==============================================================
    if (birthdate === "") {
        document.getElementById("birthError").innerHTML = "Birthdate is required.";
        isValid = false;
    } else {
        let birth = new Date(birthdate);
        let today = new Date();

        let age = today.getFullYear() - birth.getFullYear();
        let monthDiff = today.getMonth() - birth.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }

        if (age < 13) {
            document.getElementById("birthError").innerHTML = "You must be at least 13 years old.";
            isValid = false;
        }
    }

    // check if sex is selected ==============================================================
    let sexSelected = false;

    for (let i = 0; i < sexOptions.length; i++) {
        if (sexOptions[i].checked) {
            sexSelected = true;
            break;
        }
    }

    if (!sexSelected) {
        document.getElementById("sexError").innerHTML = "Sex not selected.";
        isValid = false;
    }

    // check if email is valid ==============================================================
    let emailPattern = /^[^@]+@[^@]+\.[^@]+$/; // check if email contains @ and a dot

    if (email === "") {
        document.getElementById("emailError").innerHTML = "Email not entered.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Email must contain @ and a dot.";
        isValid = false;
    }

    // check if password is valid ============================================================
    if (password === "") {
        document.getElementById("passError").innerHTML = "Password not entered.";
        isValid = false;
    }
    else if (password.length < 10) {
        document.getElementById("passError").innerHTML = "Password must be at least 10 characters.";
        isValid = false;
    }
    else if (!/[A-Z]/.test(password)) {
        document.getElementById("passError").innerHTML = "Password must contain at least one uppercase letter.";
        isValid = false;
    }
    else if (!/[a-z]/.test(password)) {
        document.getElementById("passError").innerHTML = "Password must contain at least one lowercase letter.";
        isValid = false;
    }
    else if (!/[0-9]/.test(password)) {
        document.getElementById("passError").innerHTML = "Password must contain at least one digit.";
        isValid = false;
    }

    // confirm password check ================================================================
    if (confirmPassword === "") {
        document.getElementById("confirmError").innerHTML = "Confirm password not entered.";
        isValid = false;
    } else if (confirmPassword !== password) {
        document.getElementById("confirmError").innerHTML = "Passwords do not match.";
        isValid = false;
    }

    // check occupation dropdown ============================================================
    if (occupation === "") {
        document.getElementById("occupationError").innerHTML = "Please choose an occupation.";
        isValid = false;
    }

    // check reason checkboxes ============================================================
    let reasonSelected = false;

    for (let i = 0; i < reasons.length; i++) {
        if (reasons[i].checked) {
            reasonSelected = true;
            break;
        }
    }

    if (!reasonSelected) {
        document.getElementById("reasonError").innerHTML = "Please select at least one reason.";
        isValid = false;
    }


    // check prefer checkboxes ============================================================
    let preferSelected = false;

    for (let i = 0; i < prefers.length; i++) {
        if (prefers[i].checked) {
            preferSelected = true;
            break;
        }
    }

    if (!preferSelected) {
        document.getElementById("preferError").innerHTML = "Please select at least one option.";
        isValid = false;
    }

    // print success message ================================================================

    if (isValid) {
        document.getElementById("successMsg").innerHTML = "You are now a PVPG member!";
    }

    return isValid;
}