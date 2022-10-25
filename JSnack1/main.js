let num = parseInt(prompt('inserisci un numero'));
if ( num % 2 == 0 ){
    document.getElementById('numero').innerHTML = `Pari : ${num}`;
}
else {
    num += 1;
    document.getElementById('numero').innerHTML = `Numero dispari inserito +1 = ${num}`;
}