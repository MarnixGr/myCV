document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var password = document.getElementById("password").value;
    if (password === "chickens") {
        document.getElementById("message").textContent = "Access Doné";
    } else {
        document.getElementById("message").textContent = "Access Interdit";
    }
});
