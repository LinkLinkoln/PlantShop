document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("loginEmail");
  const passwordInput = document.getElementById("loginPassword");
  const signInError = document.querySelector(".SignIn__error");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    const storedUserData = JSON.parse(localStorage.getItem("userData")) || [];

    const userExists = storedUserData.some(
      (user) => user.email === email && user.password === password
    );

    let isUserRegistered = false;

    if (userExists) {
      window.location.href = "index.html";
      isUserRegistered = true;
    } else {
      signInError.classList.add("open");
      isUserRegistered = false;
    }
    localStorage.setItem('isUserRegistered', isUserRegistered);
  });
  
});

const logOutElement = document.querySelectorAll('.log-out');
logOutElement.forEach(function(element) {
  element.addEventListener('click', (event) => {
    localStorage.removeItem('isUserRegistered');
    window.location.href = "/index.html";
  });
});

window.onload = () => {
  const NonRegElements = Array.from(document.querySelectorAll('[id="NonRegUser"]'));
  const RegElements = Array.from(document.querySelectorAll('[id="RegUser"]'));

  const isUserRegistered = localStorage.getItem('isUserRegistered');

  if (isUserRegistered === 'true') {
    NonRegElements.forEach(element => {
      element.style.display = "none";
    });
    RegElements.forEach(element => {
      element.style.display = "flex";
    });
  } else {
    NonRegElements.forEach(element => {
      element.style.display = "flex";
    });
    RegElements.forEach(element => {
      element.style.display = "none";
    });
  }
};