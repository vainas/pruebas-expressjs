var mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.99.100/myDatabase');

mongoose.connection.on('open', function (err) {
  if (err) return console.log('No se ha podido conectar con la base de datos');
  // Iniciamos nuestro servidor Express o ejecutamos nuestra función que crea documentos, por ejemplo..
  var Blog = mongoose.model('blog', blogSchema);
  
  /*
  Blog.find(function(erro, result) {
    console.log(result);
  });
  */
  /*
  Blog.find().limit(2).sort({title: 'desc'}).exec(function(erro, result) {
    console.log(result);
    
  });
  */

  Blog.findOne({title:'demo'}).exec(function(err, result){
    if (!err) {
      console.log(err); 
      process.exit();
    }
    console.log(result);
    result.title = "Demo33";
    result.save(function(error, result){
      console.log(result);
      process.exit();
    });
  });
});

var Schema = mongoose.Schema;

var blogSchema = new Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});