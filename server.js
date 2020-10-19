const express           = require('express');
const blog              = express();
const bodyParser        = require('body-parser');
var urlencodedParser    = bodyParser.urlencoded({extended: false});
const axios             = require('axios');
const data              = require('./MyBlogData')

const port              = 8080;

blog.get('/home', function(req, res){
    res.send(data.homepage2)
})

blog.listen(port, ()=>{
    console.log(`Blog is running at http;//localhost:${port}/home`)
})