const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("server is running properly")
})


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
