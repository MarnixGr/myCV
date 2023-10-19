document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var password = document.getElementById("password").value;
    if (password === "Chickens!") {
        document.body.style.background = "url('confetti.jpg') center center fixed";
        document.body.style.backgroundSize = "cover";
        setTimeout(function() {
            window.location.href = "congrats.html";
    } else {
        document.getElementById("message").textContent = "Access Denied";
    }
});
