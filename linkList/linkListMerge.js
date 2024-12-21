function sortList(head){
    if(head == null || head.next == null ){
        return head;
    }

    let mid = middleLinkList(head);
    let left = sortList(head);
    let right = sortList(mid);

    return mergeTwoLists(left, right);
}


function middleLinkList(listNode){
    let slow = listNode;
    let fast = listNode;

    while(fast != null && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

var mergeTwoLists = function(list1, list2) {
    let f = list1;
    let s = list2;

    let newList = new ListNode();
    let head = newList;

    while(f != null && s!= null){
        if(f.val < s.val){
            newList.next = new ListNode(f.val);
            f = f.next;
        }else{
            newList.next = new ListNode(s.val);
            s = s.next;
        }

        newList = newList.next;
    }

    if(f != null){
        newList.next = f
    }

    if(s != null){
        newList.next = s
    }

    return head.next;
};