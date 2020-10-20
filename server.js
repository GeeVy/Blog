const express           = require('express');
const blog              = express();
const bodyParser        = require('body-parser');
var urlencodedParser    = bodyParser.urlencoded({extended: false});
const axios             = require('axios');
const data              = require('./MyBlogData')
var path                = require('path');
var fs                  = require('file-system');
var helmet              = require('helmet');

const port              = 8080;

blog.use(helmet());

blog.get('/home', function(req, res){
    res.send(data.homepage2)
})

blog.get('/form', function(req, res){
    res.send(data.blogform)
})
blog.post('/filledForm', urlencodedParser, function(req, res){
    console.log(req.body)
    res.send(`<h1>${req.body.tittle}</h1>`+
            `<p>uploader: <b>${req.body.name}</b><br>${req.body.user_email}</p>`+
            `<p>${req.body.user_blog}</p>`

    );
})






blog.get('/next', function(req, res){
    const next = req.query.next
    if(next === "page2"){
        res.send(data.story2)
    }
    else if(next === "page3"){
        res.send(data.story3)
    }
    else{
        res.send('invalid entry!')
    }
})

blog.listen(port, ()=>{
    console.log(`Blog is running at http;//localhost:${port}/home`)
})



// let arr = ["Cat", "Ant", "Cow", "Agouti", "Dog", "Alligator"]
// function Funct13(array){
//     let AlphaArray = []
//     array.forEach(ArrayStr =>{
//         if (ArrayStr.charAt(0) == "A"){
//             AlphaArray.push(ArrayStr)
//         }
//     })
//     return AlphaArray
// }
// let funct = Funct13(arr)
// console.log(funct)