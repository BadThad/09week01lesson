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

// Assign a new route with /users which contains users' information
app.get('/users', (req, res) => {
    const users = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
    ];
    res.json(users);
})

// Middleware to parse the JSON data
app.use(express.json());

app.post ("/users", (req, res) => {
    const newUser = req.body;
    console.log(newUser); // Log the data
    res.json({ message: "Successfully added user.", user: newUser })
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`)
})