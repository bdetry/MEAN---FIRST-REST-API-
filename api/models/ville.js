let mongoose = require( 'mongoose' );
let Schema = mongoose.Schema;

let VilleSchema = new Schema( {
    name: {
        type: String
    }
} );

module.exports = mongoose.model( 'Villes', VilleSchema );