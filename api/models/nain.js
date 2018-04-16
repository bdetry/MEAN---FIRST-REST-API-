let mongoose = require( 'mongoose' );
let Schema = mongoose.Schema;

let NainsSchema = new Schema( {
    name: {
        type: String
    },
    grp_fk: {
        type: Number
    },
    grp_ville: {
        type: Number
    }
} );

module.exports = mongoose.model( 'Nains', NainsSchema );