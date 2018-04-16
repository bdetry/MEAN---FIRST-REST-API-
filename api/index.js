
let http = require( 'http' ); 
let bodyParser = require( 'body-parser' );

let express = require( 'express' );
let app = express();


let mongoose = require( 'mongoose' );
let db_model = require( './models/nain' );



mongoose.Promise = global.Promise;
mongoose.connect( 'mongodb://localhost:27017/dbNain' );  
let db = mongoose.connection;


app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );   




db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    

    let routes = require("./routes.conf");
    routes(app);
 
  });
  
  
app.listen( 8080 );