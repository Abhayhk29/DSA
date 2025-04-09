function minWindow(s, t) {
    const mp = new Map();
    let minlen = Infinity;
    let start = 0;
    for (let ch of t) {
        mp.set(ch, (mp.get(ch) || 0) + 1);
    }
    let i = 0;
    let j = 0;
    let count = mp.size;
    while (j < s.length) {
        if (mp.has(s[j])) {
            mp.set(s[j], mp.get(s[j]) - 1);
            if (mp.get(s[j]) === 0) {
                count--;
            }
        }
        if (count === 0) {
            while (count === 0) {
                if (mp.has(s[i])) {
                    mp.set(s[i], mp.get(s[i]) + 1);
                    if (mp.get(s[i]) === 1) {
                        count++;
                        if (j - i + 1 < minlen) {
                            minlen = j - i + 1;
                            start = i;
                        }
                    }
                }
                i++;
            }
        }
        j++;
    }
    if (minlen === Infinity) return "";
    return s.substr(start, minlen);
}

function minWindowS(s,t){
    let i = 0;
    let j = 0
    let mp = new Map();
    let min = Infinity;
    let ans = ''

    for (const element of t) {
        mp.set(element, (mp.get(element) || 0) + 1);
    }
    let count =  mp.size;
    while(j < s.length){
        if(!mp.has(s[j])){
            j++;
            continue;
        } else if(mp.has(s[j])){
            mp.set(s[j], mp.get(s[j]) - 1);
            if(mp.get(s[j]) === 0){
                count--;
            }
        }

        if(count === 0){
            if(min > j - i + 1){
                ans = s.substring(i, j + 1);
                min = Math.min(min, j - i + 1);
            }

            while(count === 0){
                if(!mp.has(s[i])){
                    i++;
                }else{
                    mp.set(s[i], mp.get(s[i]) + 1);
                    if(mp.get(s[i]) > 0){
                        count++;
                    }
                    i++;
                }

                if (count === 0) {
                    if (min > j - i + 1) {
                        ans = s.substring(i, j + 1);
                        min = j - i + 1;
                    }
                }
            }
        }
        j++;
    }

    return ans;
}

console.log(minWindow('TOTMTAPTAT','TTA' ));
console.log(minWindowS('TOTMTAPTAT','TTA' ));
