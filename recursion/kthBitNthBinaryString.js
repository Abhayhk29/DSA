// s1 = 0 
// si -1 + "1" + reverse(invert(s i - 1))

function findKthBit(n,k){
    const recSol = (n) => {
        if(n == 1){
            return "0";
        }

        const str = recSol(n - 1);
        return str + "1" + str.split('').map(char => char == '0' ? '1' : '0').reverse().join('')
    }

    return recSol(n)[k-1];
}

console.log(findKthBit(3,1));
console.log(findKthBit(4,11));