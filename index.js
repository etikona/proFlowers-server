const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Checking server running or not
app.get('/', (req, res) => {
    res.send("Pro Flowers server Running well")
});


// Server Running 
app.listen(port, (req, res) => {
    console.log("Server is running on :", port);
})