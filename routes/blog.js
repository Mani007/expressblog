const express = require('express')
const router = express.Router()
const path = require('path')
const blogs = require('../data/blog')

router.get('/', (req,res,next) => {
    res.sendFile(path.join(__dirname,'../templates/index.html'))
})

router.get('/blog', (req,res,next) => {
    blogs.forEach(e => {
        console.log(e.title)
    });
    res.sendFile(path.join(__dirname,'../templates/bloghome.html'))
})

module.exports = router