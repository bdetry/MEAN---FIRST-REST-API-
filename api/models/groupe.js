let mongoose = require( 'mongoose' );
let Schema = mongoose.Schema;

let GroupeSchema = new Schema( {
    name: {
        type: String
    }
} );

module.exports = mongoose.model( 'Groupes', GroupeSchema );