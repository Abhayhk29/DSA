function solve(s, i, j, isTrue) {
    if (i > j) return 0;
    if (i === j) {
        if (isTrue) {
            return s.charAt(i) === 'T' ? 1 : 0;
        } else {
            return s.charAt(i) === 'F' ? 1 : 0;
        }
    }
    let ans = 0;
    for (let k = i + 1; k < j; k += 2) {
        let lt = solve(s, i, k - 1, true);
        let rt = solve(s, k + 1, j, true);
        let lf = solve(s, i, k - 1, false);
        let rf = solve(s, k + 1, j, false);
        if (s.charAt(k) === '&') {
            if (isTrue) {
                ans = ans + (lt * rt);
            } else {
                ans = ans + (lt * rf) + (rt * lf) + (rf * lf);
            }
        } else if (s.charAt(k) === '|') {
            if (isTrue) {
                ans = ans + (lt * rf) + (rt * lf) + (rt * lt);
            } else {
                ans = ans + (lf * rf);
            }
        } else {
            if (isTrue) {
                ans = ans + (lt * rf) + (rt * lf);
            } else {
                ans = ans + (lt * rt) + (rf * lf);
            }
        }
    }
    return ans;
}

// Example usage
let expression = "T|F&T^T";
console.log(solve(expression, 0, expression.length - 1, true));  // Output: 2