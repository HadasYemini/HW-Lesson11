const validation = () => {
  console.log("validation 0");
  const username = document.getElementById("username").value;
  if (username.length < 4 || username.length > 8) {
    displayError("Oh Gosh! You have entered an incorrect user name <br>Must be between 4-8 characters");
    return false;
  }
  console.log("validation username");
  const email = document.getElementById("email").value;
  if (email.length === 0 || email.indexOf("@") === -1) {
    displayError("Please enter a valid email adress");
    return false;
  }
  console.log("validation email");
  const password = document.getElementById("password").value;
  if (password.length < 5 || password.length > 10 || password.indexOf("$") === -1) {
    displayError("Oh Gosh! You have entered an incorrect password<br>Must be between 5-10 characters");
    return false;
  }
  console.log("validation password");
  const confirmPassword = document.getElementById("confirmPassword").value;
  if (password !== confirmPassword) {
    displayError("Oh Gosh! The confirm Password confirmation does not match");
    return false;
  }
  console.log("validation confirm password");
  return true;
};

const displayError = (error) => {
  document.getElementById('error-con').style.display = "block";
  document.getElementById('error').innerHTML = error
};

const hideError = (id) => {
  document.getElementById('error-con').style.display = "none";
};
