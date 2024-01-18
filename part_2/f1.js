
function strreturn(str){
    if (str.length < 3){
        return str;
    }
    const result =  str.slice(0,3) + str.slice(-3);
    return result;

}

const input = strreturn('fatah rahimi');

console.log(input);