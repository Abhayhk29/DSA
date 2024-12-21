
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

const a1 = new Node(1);
const b1 = new Node(4);
const c1 = new Node(9);
const d1 = new Node(21);

a.next = b;
b.next = c;
c.next = d;

a1.next = b1;
b1.next = c1;
c1.next = d1;

const printLinkList = (head) => {
    let current = head;
    while(current !== null){
        console.log(current.val);
        current = current.next;
    }
}

const printLinkListRe = head => {
    if(head === null) return;
    console.log(head.val);
    printLinkListRe(head.next); 
}

const traverseList = (head) => {
    const arr = [];
    let current = head;
    while(current !== null){
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}

const traverseRecList = head => {
    const values = [];
    fillValues(head,values);
    return values;
}

const fillValues = (head,values) => {
    if(head === null) return;
    values.push(head.val);
    fillValues(head.next,values);
}

const sumLinkList = (head) => {
    let current = head;
    let value = 0;
    while(current !== null){
        value += current.val;
        current = current.next;
    }

    return value;
}

const sumLinkListRec = (head) => {
    if(head === null) return 0;
    return head.val + sumLinkListRec(head.next);
}

const valuePresent = (head, target) => {
    let current = head;

    while(current !== null){
        if(current.val === target){
            return true;
        }
        current = current.next;
    }

    return false;
}

// time O(n) space O(n)
const valuePresentRec = (head, target) => {
    if(head == null){
        return false;
    }

    if(head.val === target){
        return true;
    }

    return valuePresentRec(head.next, target);
}


const getIndexValueRec = (head, index) => {
    if(head === null){
        return null;
    }

    if(index === 0) return head.val;
    
    return getIndexValueRec(head.next, index - 1);
}

const getIndexValue = (head, index) => {
    let current = head;
    let count = 0;
    while(current !== null){
        if(count === index){
            return current.val;
        }

        count += 1;
        current = current.next;
    }
    return null;
}


const reverseList = (head) => {
    let prev = null;
    let current = head;
    while (current !== null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}

const reverseListRec = (head, prev= null) => {
    if(head === null){
        return prev;
    }
    const next = head.next;
    head.next = prev;
    return reverseListRec(next,head);
}


// O(min(n,m))
// O(1)
function zipperList(list1,list2){
    let tail = list1;
    let curr1 = list1.next;
    let curr2 = list2;
    let count = 0;

    while(curr1 !== null && curr2 !== null){

        if(count % 2 === 0){
            tail.next = curr2;
            curr2 = curr2.next;
        }else{
            tail.next = curr1;
            curr1 = curr1.next;
        }
        tail = tail.next;
        count += 1;
    }

    if(curr1 !== null) tail.next = curr1;
    if(curr2 !== null) tail.next = curr2;

    return list1;
}

// zipper rec
const zipperRec = (l1,l2) => {
    if(l1 === null && l2 === null){
        return null;
    }

    if(l1 === null) return l2;
    if(l2 === null) return l1;

    const n1 = l1.next;
    const n2 = l2.next;
    l1.next = l2;
    l2.next = zipperRec(n1,n2);

    // zipperRec(n1,n2);
    return l1;
}

const reverseWithSpecific = (l1, right, left) => {
    let counter = 1;
    let current = l1;
    let prev = null;
    while (current !== null) {
        if(counter >= right && counter <= left){
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        counter += 1;
    }

    return prev;
}

// printLinkList(a);
// console.log(sumLinkListRec(a));
console.log(printLinkList(reverseWithSpecific(a,1,2)));