
//EX6
/*
const number = 1.234;
const BigInt = 5.678;

var suma = number + BigInt;
var resta = number - BigInt;
var divisio = number / BigInt;
var mult = number * BigInt;

console.log("La suma és: " + suma.toFixed(1));
console.log("La resta és: " + resta.toFixed(1));
console.log("La divisió és: " + divisio.toFixed(1));
console.log("La multiplicació és: " + mult.toFixed(1));
*/

//EX7
/*
const catetos = 4;
const hipotenusa = Math.sqrt(catetos **2 + catetos **2);

console.log("La hipotenusa és: " + hipotenusa)
*/

//EX8
/*
var enter = 5;
var string = "Holaa";
var divisio = enter / string;
console.log(divisio);
 */

//Ex9
/*
var NomComplet = "Luca Yeray Andrade Sosa";
var Numparaules = NomComplet.split(" ");
const PrimerCongnom = Numparaules[2];

console.log(PrimerCongnom.length);
*/

//EX10
/*
const str = "Luca Andrade Sosa"
const PrimeraMeitat = str.slice(0, 5)
const SegonaMeitat = str.slice(7, 17)

console.log(PrimeraMeitat + SegonaMeitat)
*/

//EX11
/*
var SenseDefinir = Undefined;
var nula = null;

console.log(Undefined + null)
*/

//EX12.1
/*
const boolean = true;
const Explicit = String(boolean);

console.log(Explicit);

//EX12.2

const boolean = true;
const Implicit = "El valor de booleana és: " + boolean;

console.log(Implicit);
*/

//EX13.1
/*
const string = "true";
const booleanaExpl = Boolean(string);

console.log(booleanaExpl);


//EX13.2
const string = "true";
const booleanaImpl = !!string;

console.log(booleanaImpl);
*/

//EX14.1

const booleanaExpl = true;
const numero = Number(booleanaExpl);

console.log(numero);


//EX14.2

const booleanaImpl = true;
const numero = booleanaImpl + 20;

console.log(numero);