function getForm() {
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    var repeatpass = document.getElementById('psw-repeat').value;

    // Create a data object to send as JSON
    var data = { "email": email , "password": pass, "repeat": repeatpass};


    fetch('http://127.0.0.1:5000/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // Send data as an object, not just email
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
