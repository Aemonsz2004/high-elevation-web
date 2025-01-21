const express = require('express');

const router = express.Router();


router.get("/", (req, res) => {
    
    res.send('Product Page');
})

router.get("/profile", (req, res) => {
    res.render('product/overview');
})



module.exports = profile;