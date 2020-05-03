'use strict'

const fibonacci = () => {
    let Array = [];
    let sequencial = 0;
    let i = 0;
    while(sequencial <= 350){
        Array[i] = i + sequencial;
        sequencial = i;
        i++;
    } 
    return Array;
}

const isFibonnaci = (num) => {
    if(fibonacci().indexOf(num) === -1)
        return false
    else
        return true;
}

module.exports = {
    fibonacci,
    isFibonnaci
}
