const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", 'ejs');

const homeStartingContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const aboutContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const contactContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const titles =["Home","About","Contact","Compose"];

app.get('/', (req, res)=>{
  res.render('index', {title:titles[0],content:homeStartingContent});
});
app.get('/about', (req, res)=>{
  res.render('about', {title:titles[1],content:aboutContent});
});
app.get('/contact', (req, res)=>{
  res.render('contact', {title:titles[2],content:contactContent});
});
app.get('/compose', (req, res)=>{
  res.render('compose', {title:titles[3]});
});

app.post('/', (req, res)=>{
  titles.push(req.body.title);
  const post = {
    postTitle:req.body.title,
    postBody:req.body.Post
  }

});
// res.render('list', {listTitle: "Work", newListItems: workItems});
// res.redirect('/');
app.listen(3000, ()=>{
  console.log("server started !!")
});
