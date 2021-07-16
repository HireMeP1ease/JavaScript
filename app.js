function avg(arr){
    let total = 0;
    for (let num of arr){
        total += num;
    }
    return total/arr.length;
}

function isPangra(sentence){
    const testString = 'abcdefghijklmnopqrstuvwxyz';
    for (let ch of testString){
        if (sentence.indexOf(ch) === -1){
            return false;
        }
        return true;
    }
}