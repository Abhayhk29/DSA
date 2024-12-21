// sorted link list example 1 -> 3 -> 5 number 2 = 1 -> 2 -> 9 -> 14
// we will compare the heads 

function ListNode(val, next) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
}
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
