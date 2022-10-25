let array = [1,2,3,4,5,6];
let array2 = [1,2,3];

for(let x = 0; x < array.length; x++){
    if(array.length > array2.length){
        array2.push(x)
    }
    else if (array.length < array2.length){
        array.push(x)
    }
    else{
        break
    }
}
console.log(array);
console.log(array2);
