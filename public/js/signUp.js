const signupForm = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const email = document.getElementById("floatingInput").value.trim();
  const password = document.getElementById("floatingPassword").value.trim();

  if (email && password) {
    console.log(email, password);
    // Send the e-mail and password to the server
    const response = await fetch("/user/signup", {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
      alert("Signed up!");
    } else {
      alert("Failed to sign up");
    }
  }
};

document.querySelector(".signUpForm").addEventListener("submit", signupForm);
