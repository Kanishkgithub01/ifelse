function verifyAge() {
    var age = document.getElementById("age").value;
    var message = document.getElementById("message");

    age = Number(age);
    if (isNaN(age) || age < 0) {
        message.innerHTML = "Please enter a valid age.";
        message.style.color = "red";
    } else if (age < 18) {
        message.innerHTML = "Sorry, you are too young to access this content.";
        message.style.color = "orange";
        setTimeout(function() {
            location.reload();
        }, 3000);
    } else {
        message.innerHTML = "Welcome! You are old enough to access this content.";
        message.style.color = "green";
        setTimeout(function() {
            location.reload();
        }, 3000); 
    }
}
