// link list cycle
// fast and slow pointer method
// cycle detection
// Finding a node in the cycle
// 1-> 2 - > 3 -> 4 -> 5->6 -> 7 -> 8 -> 4
// good example of race track 

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function cyclicNodeList(head){
    let slowListNode = head;
    let fastListNode = head;

    while(fastListNode != null && fastListNode.next != null){
        fastListNode = fastListNode.next.next;
        slowListNode = slowListNode.next;
        if(fastListNode == slowListNode){
            return true;
        }
    }

    return false;
}

// length of the cycle
function findLengthOfCycle(head){
    let slowListNode = head;
    let fastListNode = head;

    while(fastListNode != null && fastListNode.next != null){
        fastListNode = fastListNode.next.next;
        slowListNode = slowListNode.next;
        if(fastListNode == slowListNode){
            // return true;
            // calculate the length
            let tempNode = slowListNode;
            let length = 0;
            do {
                tempNode = tempNode.next;
                length++
            } while (tempNode != slow);
            return length;
        }
    }

    return 0;
}

