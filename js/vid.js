document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(
      `Thank you for your message, ${name}! We will get back to you at ${email}.`
    );

    // Here you can add code to send the form data to your server if needed.
    // For example, using fetch() to post data to an API endpoint.

    // Clear the form fields
    document.getElementById("contactForm").reset();
  });
