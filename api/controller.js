let mongoose = require( 'mongoose' );

var Nain = require("./models/nain");
var Groupe = require("./models/groupe");
var Ville = require("./models/ville");




exports.add_nain = function( req, res ){ // new nain

    console.log(req.body);
    let new_nain = new Nain( req.body );

    new_nain.save( function( err, task ) {
        if( err ){  res.send( err ); }
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json( task );
    } );

 
}    

exports.delete_one = function( req , res ){
    
    console.log(req.params);

    Nain.remove({_id:req.params.id}, function(err, response){

        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json( response );
        console.log(response);
    });
}

exports.get_one = function( req, res ){  
    let id = req.params.id;

    Nain.findById(id , function( err, nain ){
        if( err )
            res.send( err );
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json( nain );
    });
    
}
 
exports.add_groupe = function( req, res ){ //new groupe
    
    let new_groupe = new Groupe( req.body );

    new_groupe.save( function( err, task ) {
        if( err ){  res.send( err ); }
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json( task );
    } );
}


exports.add_vile = function( req, res ){
    let ville_id = req.params.id;
   

    let new_ville = new Ville(req.body);

    new_ville.save( function( err, task ) {
        if( err ){  res.send( err ); }
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json( task );
    } );
}

exports.show_all_nains = function( req, res ){
    
    Nain.find( function(err , nains){
    if (err) throw err;
    
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json( nains );    
   });
}

exports.show_all_villes = function( req, res ){

    Ville.find( function(err , villes){
    if (err) throw err;

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json( villes );    
});
}

exports.update_one_nain = function( req, res ){
console.log(req.body);
    Nain.findByIdAndUpdate( req.body._id , { name : req.body.newName } , function( err, nain ){
        
        res.setHeader('Content-Type', 'application/text');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json( nain );   

    });    
}

exports.show_all_groupes = function( req, res ){

    Groupe.find( function(err , groupes){
    if (err) throw err;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json( groupes );   
}); 
}


