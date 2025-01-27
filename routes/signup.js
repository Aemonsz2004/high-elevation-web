const express = require('express');

const router = express.Router();


router.get("/", (req, res) => {
    
    res.send('LogIn');
})

router.get("/signup", (req, res) => {
    res.render('');
})




module.exports = signup;