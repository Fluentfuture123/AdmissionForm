document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("admissionForm");
  if (form) {
      form.addEventListener("submit", function(event) {
          const nameField = document.getElementById("name");
          if (!nameField.value.trim()) {
              alert("Name cannot be empty!");
              event.preventDefault();
          }
      });
  }
});


document.addEventListener("DOMContentLoaded", function() {
  let lastAdmissionNumber = localStorage.getItem("admissionNo") 
      ? parseInt(localStorage.getItem("admissionNo")) 
      : 2483; // Default starting value

  lastAdmissionNumber++; // Increment the number
  document.getElementById("admissionNo").textContent = `FF-${lastAdmissionNumber}`;

  // Store the updated number in localStorage
  localStorage.setItem("admissionNo", lastAdmissionNumber);
});



document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("admissionForm");
  const submitBtn = document.getElementById("submitBtn");

  submitBtn.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent direct submission

      // Get input values
      const name = document.getElementById("name").value.trim();
      const age = document.getElementById("age").value;
      const gender = document.querySelector('input[name="gender"]:checked');
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const school = document.getElementById("school").value.trim();
      const subjects = document.getElementById("subjects").selectedOptions;
      const grade = document.getElementById("grade").value;
      
      // Validate inputs
      if (!name || !age || !gender || !email || !phone || !school || subjects.length === 0 || !grade) {
          alert("Please fill in all required fields.");
          return;
      }

      // Generate admission number
      const admissionNumber = "ADM" + Math.floor(1000 + Math.random() * 9000);
      console.log("Generated Admission Number:", admissionNumber);

      // Submit form
      form.submit();
  });
});

