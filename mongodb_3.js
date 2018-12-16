var mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.99.100/myDatabase');

mongoose.connection.on('open', function (err) {
  if (err) return console.log('No se ha podido conectar con la base de datos');
  // Iniciamos nuestro servidor Express o ejecutamos nuestra función que crea documentos, por ejemplo..
  var Blog = mongoose.model('blog', blogSchema);
  var Comments = mongoose.model('comments', commentsPost);

  var comments = new Comments({
    body: 'Tengo un commentario para este post'
  });

  var myBlog = new Blog({
    title: 'nuevo post',
    author: 'vainas',
    body: 'Un body dentro del post'
  });

  myBlog.comments.push(comments);

/*
  myBlog.save(function(error, result){
    if (!error) {
      console.log(error);
      process.exit();
    }
    console.log(result);
    process.exit();
  });
  */

  console.log(myBlog);

});

var Schema = mongoose.Schema;

var blogSchema = new Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'comments'}],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});

var commentsPost = new Schema({
    body: String,
    date: Date
});