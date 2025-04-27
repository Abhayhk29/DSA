// input : T or F And T & |^

function solve(s,i,j, isTrue){
    if(i > j) return 0;

    if(i === j){
        if(isTrue){
            if(s[i] === 'T') return 1;
            else return 0;
        }else{
            if(s[i] === 'F'){
                return 1
            }
            return 0;
        }
    }


    let ans = 0;
    for (let k = i + 1; k < j; k += 2) {
        let lt = solve(s,i,k-1,true) 
        let lf = solve(s,i,k-1,false) 
        let rt = solve(s,k+1,j,true)
        let rf = solve(s,k+1,j,false)
        
        if(s[k] === '&'){
            if(isTrue) ans += lt * rt
            else ans += lt * rf + lf * rt + lf * rf
        } else if( s[k] === '|'){
            if(isTrue) ans += lt * rf + lf * rt + lt * rt;
            else ans += lf * rf
        } else if(s[k] === '^'){
            if(isTrue) ans += lt * rf + lf * rt;
            else ans += lf * rf + lt * rt;
        }
    }

    return ans;
}

let memo = {};

function solveMemo(s,i,j, isTrue){

    let key =`${i}${j}${isTrue}`

    if(memo[key] !== undefined) return memo[key];
    if(i > j) return 0;

    if(i === j){
        if(isTrue){
            if(s[i] === 'T') return 1;
            else return 0;
        }else{
            if(s[i] === 'F'){
                return 1
            }
            return 0;
        }
    }


    let ans = 0;
    for (let k = i + 1; k < j; k += 2) {
        let lt = solveMemo(s,i,k-1,true) 
        let lf = solveMemo(s,i,k-1,false) 
        let rt = solveMemo(s,k+1,j,true)
        let rf = solveMemo(s,k+1,j,false)
        
        if(s[k] === '&'){
            if(isTrue) ans += lt * rt
            else ans += lt * rf + lf * rt + lf * rf
        } else if( s[k] === '|'){
            if(isTrue) ans += lt * rf + lf * rt + lt * rt;
            else ans += lf * rf
        } else if(s[k] === '^'){
            if(isTrue) ans += lt * rf + lf * rt;
            else ans += lf * rf + lt * rt;
        }
    }
    memo[key] = ans;
    return ans;
}

let str = 'T|T&F^T';
let len = str.length - 1;
console.log(solveMemo(str, 0, len, true ));
console.log(solve(str, 0, len, true ));
