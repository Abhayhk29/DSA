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

console.log(minWindow('TOTMTAPTAT','TTA' ));
