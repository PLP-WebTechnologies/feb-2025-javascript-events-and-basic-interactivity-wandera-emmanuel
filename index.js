document.getElementById("clickBtn").addEventListener("click", function() {
    alert("Button was clicked!");
});

document.getElementById("hoverDiv").addEventListener("mouseover", function() {
    this.style.backgroundColor = "yellow";
});

document.getElementById("textInput").addEventListener("keypress", function(event) {
    console.log("Key pressed: " + event.key);
});

document.getElementById("changeBtn").addEventListener("click", function() {
    this.innerText = "Changed!";
    this.style.backgroundColor = "green";
});

const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let index = 0;
setInterval(() => {
    document.getElementById("imageGallery").src = images[index];
    index = (index + 1) % images.length;
}, 3000);

document.getElementById("myForm").addEventListener("submit", function(event) {
    let name = document.getElementById("nameField").value.trim();
    let email = document.getElementById("emailField").value.trim();
    let password = document.getElementById("passwordField").value.trim();

    if (name === "" || email === "" || password.length < 8) {
        document.getElementById("validationMessage").innerText = "Please fill out all fields correctly!";
        event.preventDefault(); // Prevent form submission
    }
});
