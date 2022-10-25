// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione (indice) dispari

const array = [1,2,3,4,5,6,7,10];
let somma = 0;
for(let x = 0; x < array.length; x++){
    if(x % 2 != 0){
    somma = somma + array[x];
    console.log(array[x]);  
    document.getElementById('somma').innerHTML = 'la somma è ' + somma;
}
}
