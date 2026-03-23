// Handle Register Form
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        let formData = new FormData(registerForm);

        let response = await fetch("api/register.php", {
            method: "POST",
            body: formData
        });

        let result = await response.text();
        alert(result);

        if (result.includes("Successfully")) {
            window.location.href = "login.html";
        }
    });
}


// Handle Login Form
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        let formData = new FormData(loginForm);

        let response = await fetch("api/login.php", {
            method: "POST",
            body: formData
        });

        let result = await response.text();
        alert(result);

        if (result.includes("Success")) {
            window.location.href = "dashboard.php";
        }
    });
}
