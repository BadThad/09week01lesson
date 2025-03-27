// Import express
import express from "express";

// Initialize the Express app
const app = express();

// Assign the port
const PORT = 3000;

// Set up the basic route
app.get('/', (req, res) => {
    res.send("Welcome to our API")
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`)
})