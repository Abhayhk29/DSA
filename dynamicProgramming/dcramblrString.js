function isScramble(A, B) {
    if (A === B) {
      return 1;
    }
    if (A.length < 1 || B.length < 1) {
      return 0;
    }
    const n = A.length;
    let flag = false;
    for (let i = 1; i < n; i++) {
      if (
        (isScramble(A.substring(0, i), B.substring(0, i)) &&
          isScramble(A.substring(i, n), B.substring(i, n))) ||
        (isScramble(A.substring(0, i), B.substring(n - i, n)) &&
          isScramble(A.substring(i, n), B.substring(0, n - i)))
      ) {
        flag = true;
        break;
      }
    }
    return flag;
  }

  let memo = {}
  function isScrambleMemo(A, B) {
    let key = `${A}_${B}`;

    if(memo[key] !== undefined) return memo[key];
    if (A === B) {
      return 1;
    }
    if (A.length < 1 || B.length < 1) {
      return 0;
    }
    const n = A.length;
    let flag = false;
    for (let i = 1; i < n; i++) {
      if (
        (isScrambleMemo(A.substring(0, i), B.substring(0, i)) &&
          isScrambleMemo(A.substring(i, n), B.substring(i, n))) ||
        (isScrambleMemo(A.substring(0, i), B.substring(n - i, n)) &&
          isScrambleMemo(A.substring(i, n), B.substring(0, n - i)))
      ) {
        flag = true;
        break;
      }
    }
    memo[key] = flag;
    return flag;
  }
  let time = new Date();
  console.log(time);
  console.log(isScrambleMemo('greatabhay','eatgrhayab'));
  console.log(new Date() -  time);
  console.log(isScramble('great','eatgr'));
  console.log(new Date() -  time);