document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var skills = Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(input => input.value);
    var profilePhoto = document.getElementById('profilePhoto').files[0];

    var reader = new FileReader();
    reader.onload = function(event) {
        var profilePhotoURL = event.target.result;

        var sidebar = document.getElementById('sidebar');
        var newEntry = document.createElement('div');
        newEntry.classList.add('entry');
        newEntry.innerHTML = `
            <h3>Student Information</h3>
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Skills:</strong> ${skills.join(', ')}</p>
            <p><strong>Profile Photo:</strong></p>
            <img src="${profilePhotoURL}" alt="Profile Photo">
        `;
        sidebar.appendChild(newEntry);
    };

    reader.readAsDataURL(profilePhoto);
    this.reset();
});
