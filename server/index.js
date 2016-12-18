const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
var path = require('path');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());//解决跨域问题

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shiny');
var Post = mongoose.model('Post', { title: String,content:String });//创建一个posts集合(模型映射一个集合)
//确认是否连接成功
var db = mongoose.connection;
db.on('error',function (err) {
  console.log(err);
});//on当什么时候 当报错的时候
db.once('open', function(){
  console.log('success!')//连接成功后打印success
  var post = new Post();
  post.title='hello';
  post.content='hello content';
  post.save();
});
app.get('/', function(req,res){
  res.send('hello world'+'\n');//客户端返回
})
// app.get('/', function(req,res){
//   res.sendFile(path.join(__dirname+'/public/about.html'));//客户端返回
// })

app.post('/', function(req,res){
  console.log(req.body);
  res.send(req.body);//客户端返回
})
app.listen(3000,function(){
  console.log('running on port 3000...');
})
