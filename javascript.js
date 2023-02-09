const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
         alert("Start Calendar");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
    if(confirm("Do u want to continue?")) {
        window.location.href = "http://127.0.0.1:5500/index3.html"
    }
})
