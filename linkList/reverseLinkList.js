// reverse link list 
// using a recursion

function reverseLinkListRecursion(list){
    if(!list || !list.next) return list;

    const tail = reverseLinkListRecursion(list.next);
    

}