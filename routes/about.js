const express = require('express');

const router = express.Router();


router.get("/", (req, res) => {
    
    res.send('login');
})

router.get("/about", (req, res) => {
    res.render('../views/about/about.ejs');
})



module.exports = about;