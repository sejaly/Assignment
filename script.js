document.getElementById("healthReportForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    // Get form data
    var formData = new FormData(this);
  
    // Validate form fields (you can add more validation if needed)
    var name = formData.get("name");
    var age = formData.get("age");
    var weight = formData.get("weight");
    var email = formData.get("email");
    var healthReport = formData.get("healthReport");
  
    if (!name || !age || !weight || !email || !healthReport) {
      alert("Please fill in all fields");
      return;
    }
  
    // Submit the form using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "insert_data.php", true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        alert(xhr.responseText); // Show success message
        document.getElementById("healthReportForm").reset(); // Clear the form
      } else {
        alert("Error: " + xhr.statusText);
      }
    };
    xhr.onerror = function() {
      alert("Request failed");
    };
    xhr.send(formData);
  });
  