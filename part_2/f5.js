function main(str, char){
    let count =0;
    for (let i = 0; i <= str.length; i++){
       if(str[i] ===char){
        count ++;
    }
}
    return count;
}

const count = (str, char) =>{
    let count = 0;
    for(let i =0; i < str.length; i++){
        if (str.at(i) === char){
            count++;
        }
    }
    return count;
}


// const input = main('fatah', 'a');

console.log(count('fatah', 'a'));