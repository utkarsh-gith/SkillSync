const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel.js");
const router = express.Router();


router.use((req, res, next) => {
    console.log("Received request to /users");
    next();
});

router.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ error: "Username or email already exists." });
        } else {
            res.status(500).json({ error: "Error registering user." });
        }
    }
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: "Invalid username or password" });
        }
        
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: "Invalid username or password" });
        }
        
        res.status(200).json({ message: "Login successful!" });
    } catch (error) {
        res.status(500).json({ error: "Error logging in." });
    }
});

router.get('/', (req, res) => {
    res.send("User route working");
});

module.exports = router;
