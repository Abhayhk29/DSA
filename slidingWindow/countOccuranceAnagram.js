// input : aabaabaa
// output aaba, aaba,  abaa, abaa
// aNgram : for : rof , rof, 

var findAnagrams = function(s, p) {
    let mp = {};

    for (let x of p) {
        if (mp[x]) {
            mp[x] += 1;
        } else {
            mp[x] = 1;
        }
    }

    let count = Object.keys(mp).length;
    let start = 0;
    let end = 0;
    let k = p.length;
    let result = [];
    console.log(count);
    while(end < s.length){
        if(mp[s[end]]){
            console.log("inside");
            mp[s[end]] -= 1;
            if(mp[s[end]] === 0){
                count--;
            }
        }
    
      console.log('------------------')
      console.log(mp);
      console.log('------------------')
      console.log(mp.size)
       
       if( (end - start + 1 ) < k ){
         end++
       }

       else if( (end - start + 1) === k){
         if(count === 0){
           result.push(start);
         }

         if(mp.hasOwnProperty(s[start])){
             if(mp[s[start]] === 0){
                 count++;
                }
            mp[s[start]] += 1;
         }
         start++;
         end++
       }
    }
    console.log(result);
    return result.length;
};

function findAnagram(str, pa){
    let start = 0;
    let end = 0;
    let k = pa.length;

    let result = 0;

    let mp = {};

    for(const p of pa){
        if(mp[p]){
            mp[p] += 1;
        }else{
            mp[p] = 1;
        }
    }

    let count = Object.keys(mp).length;
    console.log(count);
    while (end < str.length) {
        if(mp[str[end]] !== undefined){
            mp[str[end]]--;
            if(mp[str[end]] === 0){
                count--;
            }
        }

        if((end - start + 1) < k ){
            end++
        } else if((end - start + 1) === k){
            if(count === 0){
                result += 1;
            }

            if(mp[str[start]] !== undefined){
                if(mp[str[start]] === 0){
                    count++;
                }
                mp[str[start]] += 1;
            }

            start++;
            end++
        }
    }

    return result;
}


console.log(findAnagram("cbaebabacd","abc"));
// console.log(findAnagrams("cbaebabacd","abc"));