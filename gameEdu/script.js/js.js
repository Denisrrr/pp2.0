const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
   e.preventDefault();
   const username = loginForm.username.value;
   const password = loginForm.password.value;

   if (username === "user" && password === "web_dev") {
      alert("You have successfully logged in.");
      location.reload();
   } else {
      loginErrorMsg.style.opacity = 1;
   }
})
function draw() {
   let canvas = document.getElementById('canvas');
   let ctx = canvas.getContext('2d');
   ctx.beginPath();
   ctx.moveTo(100, 0);
   ctx.lineTo(300, 0);
   ctx.lineTo(400, 200);
   ctx.lineTo(300, 400);
   ctx.lineTo(100, 400);
   ctx.lineTo(0, 200);
   ctx.fillStyle = 'orange';
   ctx.fill();
}
draw();