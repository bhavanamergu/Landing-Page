const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  if (name.trim() === "") {
    alert("Please enter your name");
    return;
  }

  if (email.trim() === "") {
    alert("Please enter your email");
    return;
  }

  if (message.trim() === "") {
    alert("Please enter your message");
    return;
  }

  alert(`Thank you, ${name}! Your message has been sent.`);

  form.reset();
});
