class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// remove dulicate list

function removeDuplicateRemoves(head){

    let node = head;
    while( node!= null && node.next != null){
        if(node.val == node.next.val){
            node.next = node.next.next;
        }else{
            node = node.next;
        }
    }

    return head;
}