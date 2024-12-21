function middleLinkList(listNode){
    let slow = listNode;
    let fast = listNode;

    while(fast != null && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}