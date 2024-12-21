function findLengthOfCycle(head){
    let slowListNode = head;
    let fastListNode = head;

    let length = 0;

    while(fastListNode != null && fastListNode.next != null){
        fastListNode = fastListNode.next.next;
        slowListNode = slowListNode.next;
        if(fastListNode == slowListNode){
            length = findLengthOfCycle(slowListNode);
            break;
        }
    }

    if(length == 0){
        return null;
    }
    // find the start node
    let f = head;
    let s = head;

    while(length > 0){
        s = s.next;
        length--;
    }

    // we will move both forword 

    while(f != s){
        f = f.next;
        s = s.next;
    }

    return s;
}

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
            } while (tempNode != slowListNode);
            return length;
        }
    }

    return 0;
}

// let node = head
 
//     while (node){
//         if(node.visited){
//             delete node.visited
//             return node 
//         }else{
//             node.visited = true
//             node=node.next
//         }
//     }

//   return null

