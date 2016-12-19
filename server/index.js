const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const path = require('path');

const routes = require('./routes');
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
routes(app);
app.listen(3000,function(){
  console.log('running on port 3000...');
})
