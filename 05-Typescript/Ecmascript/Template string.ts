//var a = 1;

let a = 1;

let nombreUsuario = 'Luis Reinoso';

let html = '<h1>Hola</h1>' +
'<p> Amigos </p>'+ nombreUsuario+
'<img src="algunURL">'+
'<a href="google.com">Ir a google</a>';

let htmlConTemplateStrings = `nombre de usuario:
${nombreUsuario}`;

console.log(htmlConTemplateStrings);
