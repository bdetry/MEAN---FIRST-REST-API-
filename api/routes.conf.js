

module.exports = function( app ) {
    
   let control = require( './controller' );
   app.route( '/nain/:id' ).get( control.get_one ).delete(control.delete_one) ;
   app.route( '/nain/' ).put(control.update_one_nain).post( control.add_nain ).get(control.show_all_nains);
  

   app.route( '/groupe/' ).post( control.add_groupe ).get(control.show_all_groupes);
   app.route( '/groupe/:id' ).get( control.get_one );

   app.route( '/ville/' ).post( control.add_vile ).get(control.show_all_villes);
};    