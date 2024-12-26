const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// Mock users (for testing login functionality)
const users = [
    { username: "admin", password: "admin123" },
];

// Define a POST route for login
app.post("/login", (req, res) => {
    const { username, password } = req.body; // Extract username and password from request body
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        // Successful login
        res.status(200).send({ message: "Login successful!" });
    } else {
        // Invalid login
        res.status(401).send({ message: "Invalid credentials" });
    }
    
});

// Start the server on port 4000
app.listen(4000, () => console.log("Server running on http://localhost:4000"));
