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

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // let length = 0;
    // let curr = head;
    // while(curr !== null){
    //     length++;
    //     curr = curr.next;
    // }
    // if(n >  length ) return null;

    // const pos = length - n;

    // if(pos === 0){
    //     head = head.next;
    //     return head;
    // }
    // let currNode = head;
    // for(let i = 0; i < pos - 1; i++){
    //     currNode = currNode.next;
    // }

    // currNode.next = currNode.next.next;
    // return head;

    // two pass
    // let senitalNode = new ListNode();
    // senitalNode.next = head;
    // let length = 0;

    // while(head){
    //     head = head.next;
    //     length++;
    // }

    // let prevPos = length - n;

    // let prev = senitalNode;

    // for(let i = 0; i < prevPos; i++){
    //     prev = prev.next;
    // }

    // prev.next = prev.next.next;

    // return senitalNode.next;

    let sentinalNode = new ListNode();
    sentinalNode.next = head;
    let first = sentinalNode;

    for(let i = 0; i < n; i++){
        first = first.next;
    }

    second = sentinalNode;
    while(first.next){
        first = first.next;
        second = second.next;
    }

    second.next = second.next.next;

    return sentinalNode.next;
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let curr = head;
    while(curr && curr.next){
        if(curr.val == curr.next.val){
            curr.next = curr.next.next;
        }else{
            curr = curr.next;
        }
    }    

    return head;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // let dummyNode = new ListNode(0);
    // let curr = dummyNode;

    // while(list1 !== null && list2 !== null){
    //     if(list1.val < list2.val ){
    //         curr.next = list1;
    //         list1 = list1.next
    //     }else{
    //         curr.next = list2;
    //         list2 = list2.next;
    //     }

    //     curr = curr.next;
    // }

    // if(list2 !== null){
    //     curr.next = list2
    // }

    // if(list1 !== null){
    //     curr.next = list1;
    // }
    
    // return dummyNode.next
    if(!list1) return list2;
    if(!list2) return list1;
    let curr = null
    if(list1.val < l2.val){
        curr = list1;
        list1 = list1.next;
    }else{
        curr = list2;
        list2 =  list2.next;
    }

    let start = curr;

    while(list1 && list2){
        if(list1.val < list2.val){
            curr.next = list1;
            list1 = list1.next;
        }else{
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }

    if(!list1){
        curr.next = list2
    }

    if(!list2){
        curr.next = list1;
    }

    return start;
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !head.next) return head;

    let len = 0;
    let curr = head;

    while(curr){
        curr = curr.next;
        len++;
    }

    k = k % len;

   let s = head;
   let f = head;

   for(let i = 0; i<k; i++){
     f = f.next;
   }

   while(f.next){
    s = s.next;
    f = f.next;
   }

    f.next = head;
    let newHead = s.next;

    s.next = null;

    return newHead; 
};


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(s.length === 0) return 0;

    let n = s.length - 1;

    while(n>= 0){
        if(s[n] === ' '){
            n--;
        }else{
            break
        }
    }

    let count = 0;

    while(n>= 0){
        if(s[n] != ' '){
            n--;
            count++;
        }else{
            break;
        }
    }

    return count;
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
 * @return {ListNode}
 */
var swapPairs = function(head) {

    // if(head === null) return head;
    // let curr = head;

    // while(curr !== null && curr.next !== null){
    //     let temp = curr.next;
    //     curr.next = curr.next.next;
    //     curr.next.next = temp; 

    //     curr = curr.next;
    // }

    // return curr;

    //   if(!head || !head.next) return head;

    // let dummy = new ListNode();
    // dummy.next = head;

    // let p = dummy;
    // let c = head;
    // let n = head.next;

    // while(c && n){
    //     p.next = n;
    //     c.next = n.next;
    //     n.next = c;

    //     p = c;
    //     c = p.next;
    //     n = c && c.next;
    // }

    // return dummy.next;

    if(!head || !head.next) return head;
    let l = head;
    let r = head.next;

    l.next = swapPairs(r.next);
    r.next = l;

    return r;
};

var addTwoNumbers = function(l1, l2) {
    let dummyNode = new ListNode();
    let curr = dummyNode;

    let carry  = 0;

    while(l1 || l2 || carry){
        let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next
        l1 = l1?.next;
        l2 = l2?.next;
    }

    return dummyNode.next;
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head) return head

    let length = 1;
    let curr = head;

    while(curr.next){
        curr = curr.next;
        length++;
    }

    k = k % length;

    if(k == 0){
        return head;
    }
    let temp = head;

    for(let i = 0; i < length - k - 1 ; i++){
        temp = temp.next
    }

    let newHead = temp.next
    temp.next = null;
    curr.next = head

    return newHead
};