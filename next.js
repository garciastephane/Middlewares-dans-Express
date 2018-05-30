const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log("hello middleware !")
    next()
}, (req, res) => {
    res.send("hello world ! ")
})


module.exports = router;
