function Makecv() {
    // Collect form input values
    const fname = document.getElementById("Name").value;
    const faname = document.getElementById("father-name").value;
    const feducation = document.getElementById("Education2").value;
    const fskills = document.getElementById("skills1").value;
  
    // Collect file input and preview image
    const imageUpload = document.getElementById('imageUpload');
    const imagePreview = document.getElementById('imagePreview');
    
    // Image upload and preview logic
    imageUpload.addEventListener('change', function(event) {
      const file = event.target.files[0];
      if (file) {
        const objectURL = URL.createObjectURL(file);
        imagePreview.src = objectURL; // Set image preview source
      }
    });
  if(!faname || !feducation || !fname || !fskills ){
    alert("Please fill them")
  }else{
    // Create CV content
    const cvcontent = `
      <h1>Your Resume</h1>
      <div>
        <img src="${imagePreview.src}" style="max-width: 250px; height: 200px;" />
      </div>
      <h2>${fname}</h2>
      <h3>Father's Name: ${faname}</h3>
      <h3>Education</h3>
      <li>${feducation}</li>
      </br>
      <h3>Skills</h3>
        <li>${fskills}</li>
      
    `;
    
    // Show CV content on the page
    document.getElementById("createcv").innerHTML = cvcontent;
    document.getElementById("cv-content").style.display = 'block';
  }
}
  