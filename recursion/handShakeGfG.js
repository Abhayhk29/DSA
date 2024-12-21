// find the number of handshake without cross each other
// n = 2 output {1,2} {3,4}  : {1,3} {2,4}
// catalan number
function nonCrossingHandshakes(N) {
    if (N % 2 !== 0) {
      return 0; // N must be even
    }
    const n = N / 2;
    return catalan(n);
  }

  function catalan(n) {
    if (n <= 1) {
      return 1;
    }
    let res = 0;
    for (let i = 0; i < n; i++) {
      res += catalan(i) * catalan(n - i - 1);
    }
    return res;
  }

 console.log(nonCrossingHandshakes(6));
  