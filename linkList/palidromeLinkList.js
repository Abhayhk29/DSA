// palidrome linkList
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const a = new Node('1');
const b = new Node('2');
// const c = new Node('2');
// const d = new Node('1');


a.next = b;
// b.next = c;
// c.next = d;

// palidrom means madam => madam

function isPalidrome(l1){
    let slow = l1;
    let fast = l1;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    // reversed the end of the list
    let reverse = null;
    let next = null;
    let cur = slow;

    while(cur){
        next = cur.next;
        cur.next = reverse;
        reverse = cur;
        cur = next;
    }

    while(reverse){
        if(reverse.val !== l1.val) return false;
        reverse = reverse.next;
        l1 = l1.next;
    }

    return true;
}

console.log(a);

console.log(isPalidrome(a));