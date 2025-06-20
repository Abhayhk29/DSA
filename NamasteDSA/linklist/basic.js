function Node(val){
    this.val = val;
    this.next = null;
}


var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {

    if(index < 0 || index >= this.size) return -1;

    let curr = this.head;
    for(let i = 0; i < index; i++){
        curr = curr.next;
    }
    return curr.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new Node(val);
    if(this.head ==null){
        this.head = newNode;
    } else{
        let curr = this.head;
        while(curr.next != null){
            curr = curr.next;
        }
        
        curr.next = newNode;
    }
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let newNode = new Node(val);
    if(index < 0 || index > this.size) return
    if(index == 0){
        this.addAtHead(val);
        // return;
    }else if(index == this.size){
        this.addAtTail(val);
    }else{
       let curr = this.head;
       for(let i = 0; i < index - 1; i++){
          curr = curr.next;
       }
       newNode.next = curr.next;
       curr.next = newNode;

       this.size++;
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || index >= this.size) return;

    if(index == 0){
        this.head = this.head.next
    }else{
        let curr = this.head;
        for(let i = 0; i < index - 1; i++){
             curr = curr.next;
        }

        curr.next = curr.next.next;
    }


    this.size--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

var reverseList = function(head) {
    let prev = null;
    let curr = head;

    while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    head = prev;

    return head;
};

var hasCycle = function(head) {
    // let dataSet = new Set();
    // let curr = head;

    // while(curr){
    //     if(dataSet.has(curr)){
    //         return true;
    //     }else{
    //         dataSet.add(curr);
    //     }
    //     curr = curr.next;
    // }

    // return false;

    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast){
            return true;
        }
    }

    return false;
};


var getIntersectionNode = function(headA, headB) {
    let hashT = new Set();

    while(headB){
        hashT.add(headB);
        headB = headB.next;
    }

    while(headA){
        if(hashT.has(headA)){
            return headA;
        }
        headA = headA.next;
    }

    return null;
};


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let sent = new ListNode();
    sent.next = head;

    let prev = sent;
    while(prev && prev.next){
        if(prev.next.val == val){
            prev.next = prev.next.next;
        }else{
            prev = prev.next;
        }
    }

    return sent.next;
};