let symbol = {
    'I' : 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C':100,
    'D': 500,
    'M': 1000
};

function romanTOInteger(rt){
    let result = 0;

    for (let i = 0; i < rt.length; i++) {
        let val = symbol[rt[i]]
        let valNext = symbol[rt[i + 1]]
        if(valNext > val){
            result += valNext - val;
            i++;
        }else{
            result += val;
        }
    }
    return result;
}

console.log(romanTOInteger("III"));
console.log(romanTOInteger("LVIII"));
console.log(romanTOInteger("MCMXCIV"));