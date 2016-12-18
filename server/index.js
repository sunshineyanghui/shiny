const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());//解决跨域问题

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/digicity');
//
// var db = mongoose.connection;
// db.on('error',console.log);//on当什么时候 当报错的时候
// db.once('open', function(){
//   console.log('success!')//连接成功后打印success
// });
app.get('/', function(req,res){
  res.send('hello world'+'\n');//客户端返回
})

app.post('/', function(req,res){
  console.log(req.body);
  res.send(req.body);//客户端返回
})
app.listen(3000,function(){
  console.log('running on port 3000...');
})
