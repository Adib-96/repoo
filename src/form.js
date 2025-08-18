const form = document.getElementById("form_data");
const submit_btn = document.querySelector("button[type='submit']");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  submit_btn.disabled = true;
  submit_btn.textContent = "Sending...";

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
        
        form.reset(); 
        submit_btn.disabled = false;
        submit_btn.textContent = "Get in Touch";
      console.log("Email sent successfully:", response);
    })
    .catch((error) => {
      submit_btn.disabled = false;
      submit_btn.textContent = "Get in Touch";
      console.error("Error sending email:", error);
    });

});
