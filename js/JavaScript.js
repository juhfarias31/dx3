function tira() {
   const x = document.querySelector('#larg').value;
   const y = document.querySelector('#comp').value;
// Tira-teima 

if (x >= 0 && x <= 432 && y >= 0 && y <= 468) { 
alert("A bolinha está dentro.\n");
} 
else {
alert("A bolinha está fora.\n");
}

}

function zerinho(){
// Zerinho ou Um
valor = "a", "b", "c";
if (a===b && c!==b){
   alert("C\n");
}
else if (a===c && b!==c){
   alert("B\n");
}
else if (b===c && a!==c){
   alert("A\n");
}
else{
   alert("*\n");
}
}

function vice() {
const texto = document.querySelector("h1");
const valor = document.querySelector('#valor').value;
// Vice-lider
   valor = a, b, c;  
   if ( (a > b && a < c) || (a > c && a < b) ){
       vice = a;
}
   else if ( (b > a && b < c) || (b > c && b < a) ){
       vice = b;
}
   else{
       vice = c;
}
texto.innerHTML = "O vice é " + valor;
}