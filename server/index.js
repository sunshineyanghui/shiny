const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const path = require('path');
const Post = require('./models/post.js');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());//解决跨域问题

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shiny');
//确认是否连接成功
var db = mongoose.connection;
db.on('error',function (err) {
  console.log(err);
});//on当什么时候 当报错的时候
db.once('open', function(){
  console.log('success!')//连接成功后打印success
});
app.get('/', function(req,res){
  res.send('hello world'+'\n');//客户端返回
})
// app.get('/', function(req,res){
//   res.sendFile(path.join(__dirname+'/public/about.html'));//客户端返回
// })

app.post('/posts', function(req,res){
  let content = req.body.content;
  let title = req.body.title;
  let post = new Post();
  post.title = req.body.title;
  post.content = req.body.content;
  console.log(req.body.title);
  post.save();
  console.log(req.body);
  res.json(req.body.title);//客户端返回
})
app.get('/posts',function(req,res){
  Post.find(function(err, posts) {
    res.json({posts})
  });
})
app.get('/posts/:id',function(req,res){
  res.send('read one post!')
})
app.put('/posts/:id',function(req,res){
  res.send('update a post!')
})
app.delete('/posts/:id',function(req,res){
  res.send('delete a post!')
})
app.listen(3000,function(){
  console.log('running on port 3000...');
})
