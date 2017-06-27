const Passwords = require('machinepack-passwords');

exports.calculadoraUdla = {
  suma : (numero1, numero2) => {
      return numero1 + numero2;
  },

  resta : (numero1, numero2) => {
      return numero1 - numero2;
  },

  multiplicar: (numero1, numero2) => {
      return numero1 * numero2;
  },

  cifrar: (pass) => {
    Passwords.encryptPassword({
      password: pass,
    }).exec({
    // An unexpected error occurred.
    error: (err) => {
      console.log(err);
    },
    // OK.
    success: (result) => {
      console.log(result);
    },
    });
  }

}
