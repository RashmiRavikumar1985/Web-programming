function validateForm(event) {
    event.preventDefault();
    let isValid = true;
    document.querySelectorAll('.error').forEach(function(errorElement){
        errorElement.textContenr = '';
    });

    // Reset errors
    resetErrors();

    const firstName = document.getElementById('firstName').value;
    if (!/^[a-zA-Z]{6,}$/.test(firstName)) {
        document.getElementById('firstNameError').innerText = "First name should have at least 6 alphabet characters.";
        isValid = false;
    }

    const lastName = document.getElementById('lastName').value;
    if (lastName.trim() === '') {
        document.getElementById('lastNameError').innerText = "Last name cannot be empty.";
        isValid = false;
    }

    const username = document.getElementById('username').value;
    if (username.trim() === '') {
        document.getElementById('usernameError').innerText = "Username cannot be empty.";
        isValid = false;
    }

    
   const password = document.getElementById('password'.value);
   if(password.length<6){
    document.getElementById('passwordError').textContent = 'Password must be atleast 6 characters';
    isValid = false;
   }
    }


    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = "Please enter a valid email address.";
        isValid = false;
    }

 
    const mobile = document.getElementById('mobile').value;
    if (!/^\d{10}$/.test(mobile)) {
        document.getElementById('mobileError').innerText = "Mobile number must be 10 digits.";
        isValid = false;
    }

    const address = document.getElementById('address').value;
    if (address.trim() === '') {
        document.getElementById('addressError').innerText = "Address cannot be empty.";
        isValid = false;
    }

    if (isValid
        alert("Form submitted successfully!");
        document.getElementById("registrationForm").onsubmit();
    )
}

function resetErrors() {
    document.getElementById('firstNameError').innerText = '';
    document.getElementById('lastNameError').innerText = '';
    document.getElementById('usernameError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('mobileError').innerText = '';
    document.getElementById('addressError').innerText = '';
}

