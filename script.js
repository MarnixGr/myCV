document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var password = document.getElementById("password").value;
    if (password === "Chickens!") {
        // Change the background and redirect to the congrats page
        document.body.classList.add("confetti");
        setTimeout(function() {
            window.location.href = "congrats.html";
        }, 2000); // Change the URL and time delay as needed
    } else {
        document.getElementById("message").textContent = "Access Denied";
    }
});
