// DOM elments
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const form = document.getElementById("form-box");

function ErrorMessage(input, message){
        const formController = input.parentElement
        // formController.classList.add("error")
        input.style.borderColor = "red"
        const small = formController.querySelector("small");
        small.innerText = message
        small.style.visibility = "visible" 
        console.log(small)
}

function successMessage(input){
    const formController = input.parentElement
    input.style.borderColor = "blue"
    const small = formController.querySelector("small")
    small.style.visibility = "hidden"
}

function checkRequired(inputArray){
    inputArray.forEach((input) => {
        if (input.value === ""){
            ErrorMessage(input, `!${input.id} is required`)
        }
    })
}

function checkLength(input, min, max){
    if(input.value.length < min){
        ErrorMessage(input, `!${input.id} must be atleast ${min} characters`)
    }else{
        successMessage(input)
    }
}

function passwordMatch(password, confirmPassword){
    if(password.value !== confirmPassword.value){
        ErrorMessage(confirmPassword, "!Password don't match")
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email.value.toLowerCase())){
        ErrorMessage(email, "Email is invalid")
    }else{
        successMessage(email)
    }
}


form.addEventListener("submit", (e) => {
    e.preventDefault()
    checkLength(usernameInput, 3)
    checkLength(passwordInput, 6)
    checkLength(confirmPasswordInput, 6)
    passwordMatch(passwordInput, confirmPasswordInput)
    validateEmail(emailInput)
    checkRequired([usernameInput, emailInput, passwordInput, confirmPasswordInput])
})
