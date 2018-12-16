var mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.99.100/myDatabase');

mongoose.connection.on('open', function (err) {
  if (err) return console.log('No se ha podido conectar con la base de datos');
  // Iniciamos nuestro servidor Express o ejecutamos nuestra función que crea documentos, por ejemplo..
  var Blog = mongoose.model('blog', blogSchema);
  
  var demoBlog = new Blog({
    title:'demo4',
    author:'vainas',
    body:'Esto es el body de algo'
  });

  demoBlog.save(function(err, result) {
    if (err) throw err;   
    console.log('blog successfully saved.', result );
  })

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