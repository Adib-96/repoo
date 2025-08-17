const form = document.getElementById("form_data");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  const data = Object.fromEntries(formData);
  console.log(data);
  
  emailjs.send("service_vaxd4ii", "template_s15hj6e", {
    name : data.name,
    email : data.email,
    service : data.service,
    message : data.message,
  })
    .then((response) => {
        
        // Handle successful response
        form.reset(); // Reset the form after successful submission
      console.log("Email sent successfully:", response);
    })
    .catch((error) => {
        // Handle error response AND make a toast notification
      console.error("Error sending email:", error);
    });

});
