// Tira-teima 
function tira() {
   const x = document.querySelector('#larg').value;
   const y = document.querySelector('#comp').value;
   const texto = document.querySelector('h4');

if (x >= 0 && x <= 432 && y >= 0 && y <= 468) { 
texto.innerHTML = "A bolinha está dentro.";
} 
else {
texto.innerHTML = "A bolinha está fora.";
 }
}

// Vice-lider
function vice() {
const a = parseInt(document.querySelector('#viceA').value);
const b = parseInt(document.querySelector('#viceB').value);
const c = parseInt(document.querySelector('#viceC').value);
const texto = document.querySelector('h5');

valor = a, b, c;  
if ( (a > b && a < c) || (a > c && a < b) ){
texto.innerHTML = "O vice é A.";
}
else if ( (b > a && b < c) || (b > c && b < a) ){
texto.innerHTML = "O vice é B.";
}
else {
texto.innerHTML = "O vice é C.";
}
}

// Zerinho ou Um
function zerinho(){
   const a = parseInt(document.querySelector('#a').value);
   const b = parseInt(document.querySelector('#b').value);
   const c = parseInt(document.querySelector('#c').value);
   const texto = document.querySelector('h6');


if ((a != b) && (a != c)) {
   texto.innerHTML = 'A';
}
else if ((b != a) && (b != c)) {
   texto.innerHTML = 'B';
}
else if ((c != a) && (c != b)) {
   texto.innerHTML = 'C';
}
else {
   texto.innerHTML = '*';
}
}
