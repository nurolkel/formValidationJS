let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

const userName = id("userName")
const email = id("email")
const password = id("password")
const form = id("form")
const errorMsg = classes('error')
const successIcon = classes("success-icon")
const failureIcon = classes("failure-icon")

form.addEventListener('submit', (e) => {
    e.preventDefault()

    engine(userName,0, "Username cannot be blank")
    engine(email,1, "Email cannot be blank")
    engine(password,2, "Password cannot be blank")
  
})

const engine = (id,serial, message) => {
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message
        failureIcon[serial].style.opacity = "1"
        successIcon[serial].style.opacity = "0"
    } else {
        errorMsg[serial].innerHTML = "";
        failureIcon[serial].style.opacity = "0"
        successIcon[serial].style.opacity = "1"
    }
}