/**
 * SaludoController
 *
 * @description :: Server-side logic for managing Saludoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	welcome: function (req, res) {
		 sails.log.info(req.method);
		 if (req.method == "POST") {
				 return res.json({ saludo: "hola" });
		 }
		 else {
				 return res.send("Error");
		 }
 },
 bienvenido: function (req, res) {
		 //PUT
		 return res.send("Hola");
 },

 crearUsuarioQuemado: function (req, res) {

	 let nuevoUsuario = {
		 nombre: 'Luis',
		 apellido: 'Reinoso',
		 password: '2232',
		 correo: 'asds@mail.com',
		 fechaNacimiento: new Date()
	 }

	 Usuario.create(nuevoUsuario).exec(function (error, usuarioCreado) {

		 if (error) {
			 return res.serverError(error);
		 } else {
			 return res.ok(usuarioCreado);
		 }
		 
	 })
 }

};
