/*
// Modo estricto
'use strict'
// prompt()
var nombre=prompt("Introduce nombre ", "nombre por defecto");
console.log("Nombre : " + nombre)

var edad = prompt("Que edad tienes?", 18); 
console.log("Edad : " + edad)

// alert()
alert("Esto es una alerta");

// confirm()
var confirmacion = confirm("Estas seguro de continuar?");
console.log("Respuesta : " + confirmacion)
*/
/*
//Salida por ventana emergente
alert("Esto es una ventana emergente.");
//Entrada de datos
var edad = prompt("Introduzca edad:");
// Salida de datos leyendo desde una variable
alert("La edad introducida es: " + edad);
// Salida de datos por consola
console.log("La edad introducida es: " + edad);
// Salida de datos al BODY de mi página

// document.write()
document.write("<h1>La edad es :" + edad + "</h1>");
*/
// var : Variable Globale
console.log("//var : Variable Globale");
console.log("//--------------------------------------");
document.write("<h1>var : Variable Globale</h1>");
var num_var = 5;
console.log("La variable num_var es: " + typeof(num_var));
document.write("<p>num_var es :" + num_var + "</p>"); //num_var vale 5
if (true) {
	num_var = 10;
	document.write("<p>num_var es :" + num_var + "</p>"); //num_var vale 10
}
document.write("<p>num_var es :" + num_var + "</p>"); //num_var vale 10

// let : Variable Locale
console.log("//let : Variable Locale");
console.log("//--------------------------------------");
document.write("<h1>let : Variable Locale</h1>");
let num_let = "5";
console.log("La variable num_let es: " + typeof(num_let));
document.write("<p>num_let es :" + num_let + "</p>"); //num_let vale 5
if (true) {
	let num_let = "10";
	document.write("<p>num_let es :" + num_let + "</p>"); //num_let vale 10
}
document.write("<p>num_let es :" + num_let + "</p>"); //num_let vale 5

// Casting de variable
console.log("//--------------------------------------");
console.log("//Casting de variable");
num_total1 = num_var + num_let;
console.log("La variable num_total1 es: " + typeof(num_total1) + " y es = " + num_total1);
num_total2 = num_var + parseInt(num_let);
console.log("La variable num_total2 es: " + typeof(num_total2) + " y es = " + num_total2);

console.log("//--------------------------------------");
console.log("//1. Declarión de variables");
console.log("//--------------------------------------");
document.write("<h1>1. Declarión de variables</h1>");
//Podemos trabajar con números, strings y booleans
// Declaración de variables:
// No puede empezar por un número
// Esto de error: var 2_cliente;
// Evitar tildes y Ñ
//Variable correctamente declarada
let _numero;
// Inicialización de la variable
_numero = 63;
//Variable declara e inicializada
var numero4 = 647;
// Sepueden declara e inicializar varias variables a la vez.
var a=3, b=4, c=5;
//Sería lo mismo que poner:
/*
var a=3;
let b=4;
var c=5;
*/
// JavaScript es Case sensitive. Distingue entre mayúsculas/minúsculas
var numero = 10;
var Numero = 20;
console.log("La variable 'numero' vale:" + numero);
console.log("La variable 'Numero' vale:" + Numero);
//Con variable numéricas podemos operar matemáticamente
var sumando1 = 35;
var sumando2 = 45;

var resultado = sumando1+sumando2;
console.log("El resultado de sumar " + sumando1 + " + " + sumando2 + " es " + resultado);

// Operador modulo o resto de la división
var resto = 46 % 5;
console.log("El resto de 46/5 es " + resto);

//Operador incremento
var numeroInicial = 10;
let numeroIncrementado = ++numeroInicial;
//Sería como poner que numeroIncrementado = numeroInicial +1;
console.log("El operador incremento sobre numeroInicial daría " + numeroIncrementado);
console.log("Valor de numeroInicial " + numeroInicial);
//IMPORTANTE: No es lo mismo ++variable que variable++
var numero5 = 5;
document.write("El número antes del incremento vale " + numero5++); 
document.write("<br>");
document.write("El número después del incremento vale " + numero5);
document.write("<br>");
document.write("<br>");
// Ahora al revés
let numero6 = 5;
document.write("El número antes del incremento vale " + ++numero6);
document.write("<br>");
document.write("El número después del incremento vale " + numero6);
//Constantes. Como las variables pero no se puede cambiar su valor
// Se declaran en mayúsculas
const MICONSTANTE = 4765;
//MICONSTANTE = 345; Esto daría error
// Hay que declararlas e inicializarlas obligatoriamente.
//const MICONSTANTE2; Esto daría error

//Declarión de strings
//------------------------
//------------------------
console.log("//--------------------------------------");
console.log("//2. Declaración de strings");
console.log("//--------------------------------------");
document.write("<h1>2. Declaración de strings</h1>");
let nombre = "Mi nombre es Angel";
let nombre2 = 'Mi nombre es Angel';
/* Aunque declaremos números, si lo
hacemos entre comillas,
nos lo tratará como strings */
let edad2 = "43";
console.log("edad2+20 =" + edad2 + 20);
//Las comillas anidadas siempre alternas,
let nombre3 = 'Mi nombre es "Angel" ';
let nombre4 = "Mi nombre es 'Angel' ";
/* Cuando declaremos numeros con los que
no vamos a operar
matemáticamente lo haremos como strings
*/
let telefono = "666666666";
//Los strings no se suman, se concatenan:
let nombre5 = "Angel";
let espacio = " ";
let apellido = "García";
let nombreCompleto = nombre5 + espacio + apellido;
console.log("nombreCompleto = " + nombreCompleto);
//Otra forma de hacerlo
console.log("nombre5 + ' ' + apellido = " + nombre5 + " " + apellido);
console.log("nombre5 + ' ' +edad2 = " + nombre5 + " " + edad2);

console.log("//--------------------------------------");
console.log("//3. Funciones de strings");
console.log("//--------------------------------------");
document.write("<h1>3. Funciones de strings</h1>");
console.log("//toString()");
console.log("//--------------------------------------");
var num3_1=3;
var num3_2=6;

var num_string1=num3_1.toString();
var num_string2=num3_2.toString();

console.log("(num3_1 + num3_2) = " + (num3_1 + num3_2));
console.log("num3_1 + num3_2 = " + num3_1 + num3_2);
console.log("(num_string1 + num_string2) = " + (num_string1 + num_string2));
console.log("num_string1 + num_string2 = " + num_string1 + num_string2);

console.log("//toUpperCase(), toLowerCase()");
console.log("//--------------------------------------");
var testUpperCaseString = "asGTas FDfgTRçñ"
console.log("testUpperCaseString.toUpperCase() = " + testUpperCaseString.toUpperCase());
console.log("testUpperCaseString.toLowerCase() = " + testUpperCaseString.toLowerCase());
console.log("//length");
console.log("//--------------------------------------");
console.log("testUpperCaseString.length = " + testUpperCaseString.length);

console.log("//indexOf(), lastIndexOf()");
console.log("//--------------------------------------");
var texto="Esto es el texto, que contiene muchos textos, y otros textos";
var busqueda1= texto.indexOf("texto");
var busqueda2= texto.lastIndexOf("texto");
console.log("texto.indexOf : primera position texto = " + busqueda1);
console.log("texto.lastIndexOf : última position texto = " + busqueda2);

console.log("texto.substr(14,5) = " + texto.substr(14,5));
console.log("texto.charAt(44) = " + texto.charAt(44));

console.log("texto.startsWith('Hola') = " + texto.startsWith("Hola"));
console.log("texto.endsWith('textos') = " + texto.endsWith("textos"));
console.log("texto.includes('textos') = " + texto.includes("textos"));
console.log("texto.replace('texto', 'dibujo') = " + texto.replace("texto", "dibujo"));
console.log("//--------------------------------------");
console.log("texto.slice(10) = " + texto.slice(10));
console.log("texto.slice(10, 17) = " + texto.slice(10, 17));
console.log("//--------------------------------------");
console.log("texto.split(' ') = " + texto.split(" "));

console.log("//Plantillas en String");
console.log("//--------------------------------------");

var nombre_plantilla="Pablo";
var apellido_plantilla="Hernando";
var plantilla3= `
<h3>Tu nombre es ${nombre_plantilla}</h3>
<h3> y tus apellido es ${apellido_plantilla}</h3>
`;
document.write("<h2>Plantillas en String</h2>");
document.write("<p>" + plantilla3 + "</p>");

console.log("//--------------------------------------");
console.log("//4. Condiciones y Bucles");
console.log("//--------------------------------------");
document.write("<h1>4. Condiciones y Bucles</h1>");
console.log("//for");
console.log("//--------------------------------------");
document.write("<h2>Bucle for</h1>");
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
for(var i=0;i<meses.length;i++){
	document.write("Hola"+"<br>"+ "En esta vuelta de bucle i vale " + i + "<br>");
	document.write(meses[i] + "<br><br>");
}
document.write("Ejecución terminada.");
document.write("<h2>Bucle foreach</h1>");
document.write("<ul>");
meses.forEach((elemento, index) => {document.write("<li>" + index + " - "+ elemento + "</li>");});
document.write("</ul>");
console.log("//while");
console.log("//--------------------------------------");
document.write("<h2>Bucle while</h1>");
var c = 0;
while (c < meses.length) {
	document.write(meses[c] + "<br>");
	c++;
}
/*
var numero = parseInt(Math.random()*100);
var numero_introducido;
var contador = 0;
while (numero != numero_introducido) {
	numero_introducido = Number(prompt("Introduce número: "));
	contador++;
	if (numero_introducido > numero) {
		alert("Demasiado alto");
	}
	if (numero_introducido < numero) {
		alert("Demasiado bajo");
	}
}
alert("CORRECTO¡¡¡, el número era el " + numero + ". Has acertado en " + contador + " intentos.");
*/
console.log("//--------------------------------------");
console.log("//5. Arrays");
console.log("//--------------------------------------");
document.write("<h1>5. Arrays</h1>");
var articulos = ["balon", "botas", "camiseta", "pantalon"];
document.write("<p>articulos : " + articulos + "<p>");
document.write("<p>El primer articulo es <strong>"+ articulos[0] +"</strong></p > ");
document.write("<h2>length</h2>");
document.write("<p>La longitud del array es " + articulos.length + "</p>");
document.write("<p>El último articulo es <strong>" + articulos[articulos.length- 1] + "</strong></p><br>");
document.write("<h2>Añadir elementos: unshift(elt), push(elt)</h2>");
document.write("<p>Añadimos los artículos pelota y canasta al principio unshift y al final push</p>");
articulos.unshift("pelota");
articulos.push("canasta");
document.write("<p>articulos : " + articulos + "<p>");
document.write("<p>La longitud del array ahora es " + articulos.length + "</p>");
document.write("<p>El primer articulo ahora es <strong>" + articulos[0] + "</strong></p>");
document.write("<p>El último articulo es <strong>" + articulos[articulos.length - 1] + "</strong></p><br>");

document.write("<h2>Posición de un elemento: indexOf(elt)</h2>");
document.write("<p>camiseta ahora está en la <strong>" + articulos.indexOf("camiseta") + "º</strong> posición</p><br>");

document.write("<h2>Array to String : join()</h2>");
document.write("<p>articulos : _" + articulos.join() + "_<p>");

document.write("<h2>String to Array : split(sep)</h2>");
var cadena = "nombre1,nombre2,nombre3";
var miStringToArray=cadena.split(",");
document.write("<p>miStringToArray : _" + miStringToArray.join() + "_<p>");

document.write("<h2>ordenar : sort(), reverse()</h2>");
document.write("<p>articulos.short() : _" + articulos.sort() + "_<p>");
document.write("<p>articulos.reverse() : _" + articulos.reverse() + "_<p>");

document.write("<h2>busqueda : find(fn), findIndex(fn), some(fn)</h2>");
//var nombreBuscado = "pastor";
var nombreBuscado = "canasta";
//var busqueda = articulos.find(function(nombre){return nombre==nombreBuscado;});
var busqueda=articulos.find(nombre => {return nombre==nombreBuscado;});
document.write("<p>articulos.find(..."+ nombreBuscado + ") : _" + busqueda + "_<p>");
var busIndice = articulos.findIndex(nombre => {return nombre==nombreBuscado;});
document.write("<p>articulos.findIndex(..."+ nombreBuscado + ") : _" + busIndice + "_<p>");
var busSome = articulos.some(nombre => {return nombre<nombreBuscado;});
document.write("<p>articulos.some(..."+ nombreBuscado + ") : _" + busSome + "_<p>");

console.log("//--------------------------------------");
console.log("//6. Funciones");
console.log("//--------------------------------------");

console.log("//Tipo de una funcion");
console.log("//--------------------------------------");
var libro = {
	titulo:'Las Legiones Malditas',
	autor:'Santiago Posterguillo',
	informacion:function(){ return this.titulo + " escrito por " + this.autor;}
}
console.log(typeof libro.informacion);

function fecha() {
	document.write(Date());
}

function writeNumeros(num1, num2,...otros){
	document.write("writeNumeros(num1, num2,...otros) :<br>")
	document.write("num1 = " + num1 + "<br>");
	document.write("num2 = " + num2 + "<br>");
	document.write("...otros = " + otros + "<br>");
}

console.log("//Callback");
console.log("//--------------------------------------");

// Definición de la función principal
function funcionPrincipal(_callback){
	console.log('hago algo y llamo al callback avisando que terminé');
	_callback('Miguel');
}
// LLamada de la funcion principal con la funcion callback en parametro
funcionPrincipal(function(nombre){
		console.log('me llamo ' + nombre);
});
console.log("//--------------------------------------");
console.log("//funcionPrincipal2");
function funcionPrincipal2(_callback1, _callback2, _callback3){
	//
	console.log("código de la función principal...");
	//
	_callback1();
	//
	console.log("...código de la función principal...");
	//
	_callback2();
	//
	console.log("...código de la función principal...");
	//
	_callback3();
	//
	console.log("...código de la función principal");
	//
}

function callback21(){
	console.log('primer callback');
}
function callback22(){
	console.log('segundo callback');
}
function callback23(){
	console.log('tercer callback');
}
// LLamada de la funcion principal con las funciones callback en parametro
funcionPrincipal2(callback21, callback22, callback23);

console.log("//--------------------------------------");
console.log("//funcionPrincipal3 : setInterval()");

function funcionPrincipal3(_callback1, _callback2, _callback3){
	//código de la función principal
	_callback1();
	//más código de la función principal
	var miVar = setInterval(function(){ _callback2() },1000);
	//más código de la función principal
	var miVar2 =setInterval(function(){ _callback3() },3000);
	//más código si fuera necesario
}

function callback31(){
	console.log("//llamada callback31");
}
function callback32(){
	//console.log("//llamada callback32");
	var d = new Date();
	var t = d.toLocaleTimeString();
	document.getElementById("setInterval1000").innerHTML = "Date : " + t;
}

function callback33(){
	//console.log("//llamada callback33");
	document.getElementById("setInterval3000").innerHTML = 'Esto es el callback33';
}

console.log("//--------------------------------------");
console.log("//funcionPrincipal4 : funcion flecha");

function funcionPrincipal4(num1, num2, sumaYmuestra, sumaPorDos) {
	var suma = num1 + num2;
	sumaYmuestra(suma);
	sumaPorDos(suma);
	return suma;
}

funcionPrincipal4(5, 7, _dato =>	{
							console.log('La suma es ', _dato);
						},
						_dato2 => {
							console.log('La suma de dos es :', (_dato2 * 2));
						});

console.log("//--------------------------------------");
console.log("//7. Events");
console.log("//--------------------------------------");
						
function button1Onclick(){
	var x = 30;
	window.alert(x);
	//document.body.style.backgroundColor = 'red';
}

console.log("//addEventListener");
console.log("//--------------------------------------");

console.log("//--------------------------------------");
console.log("//8. DOM");
console.log("//--------------------------------------");























