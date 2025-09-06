/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    costs.sort((a,b) => ((b[1] - b[0]) - (a[1] - a[0])));
    let n = costs.length / 2;
    let ans = 0;
    for(let i = 0 ; i < n; i++){
        ans = ans + costs[i][0]
        ans = ans + costs[i + n][1]
    }

    return ans;
};

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    s.sort((a,b) => a-b)
    g.sort((a,b) => a-b)

    let i = 0;
    let contentChild = 0;

    while(i < s.length){
        if(s[i] >= g[contentChild]){
            ++contentChild;
        }
        i++;
    }

    return contentChild;
};

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let wallet = [0,0];

    for(let i = 0; i < bills.length; i++){
        if(bills[i] === 5){
            ++wallet[0];
        }else if(bills[i] === 10){
            ++wallet[1];
            --wallet[0];
        }else{
            if(wallet[1]){
                --wallet[1]
                --wallet[0]
            }else{
                --wallet[0]
                --wallet[0]
                --wallet[0]
            }
        }
        if(wallet[0]< 0){
            return false;
        }
    }

    return true;
};


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let ans = 0;

    for(let i = 1; i < prices.length; i++){
        if(prices[i] > prices[i - 1]){
            ans += prices[i] - prices[i - 1];
        }
    } 

    return ans;
};