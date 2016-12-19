const Post = require('./models/post.js');

module.exports = function(app){

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

}
