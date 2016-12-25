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
    const post = new Post({title: title, content: content});
    post.save();
    console.log(req.body);
    res.json(req.body);//客户端返回
  })
  app.get('/posts',function(req,res){
    Post.find(function(err, posts) {
      console.log({posts});
      res.json({posts})
    });
  })
  app.get('/posts/:id',function(req,res){
    Post.findById({_id:req.params.id} ,function(err,post){
      res.json({post:post});
    })
  })
  app.put('/posts/:id',function(req,res){
    res.send('update a post!')
  })
  app.delete('/posts/:id',function(req,res){
    res.send('delete a post!')
  })

}
