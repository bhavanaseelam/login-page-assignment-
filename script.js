document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Get input values from the login form
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Send a POST request to the backend API
    const response = await fetch("http://localhost:3000/login", {
        method: "POST", // HTTP method
        headers: { "Content-Type": "application/json" }, // Specify JSON format
        body: JSON.stringify({ username, password }), // Send data as JSON
    });

    // Parse the response from the backend
    const data = await response.json();
    alert(data.message); // Display the message (success or error)
});



