class Node {
    constructor(value = null,node = null) {
      this.value = value;
      this.next = node;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
      this.tail = null;
    }
  
    insertFirst(val) {
      let node = new Node(val);
      // console.log(node);
      node.next = this.head;
      this.head = node;
  
      if (this.tail == null) {
        this.tail = this.head;
      }
      this.size++;
      // return this.head;
    }
  
    insertAtLast(val) {
      // o(1)
      // console.log(this.tail);
      if (this.tail === null) {
        this.insertFirst(val) 
        return;
      }
      let node = new Node(val);
      this.tail.next = node;
      this.tail = node;
      // console.log(this.tail);
      // this.head = this.tail;
      this.size++;
    }
  
    insertAtIndex(val, index) {
      if (index === 0) {
        this.insertFirst(val);
      } else if(index === this.size){
          this.insertAtLast(val);
      }else{
          let temp = this.head;
  
          for (let i = 1; i < index; i++) {
              temp = temp.next;
          }
  
          let newNode = new Node(val);
          newNode.next = temp.next;
          temp.next = newNode;
          this.size++;
      }
      // if()
    }
  
    insertUsingRecursion(val, index){
       this.head = this.#insertRecusrion(val, index, this.head);
    }
  
    #insertRecusrion(val, index, node){
      if(index == 0){
        let temp = new Node(val, node);
        this.size++;
        return temp;
      }
      node.next = this.#insertRecusrion(val,index - 1, node?.next);
      return node;
    }
  
    deleteFirst(){
      this.head = this.head.next;
      if(this.head === null){
          this.tail = null;
      }
      this.size--;
    }
  
    getNode(index){
      let temp = this.head;
      for (let i = 0; i < index; i++) {
          temp = temp.next;
      }
      return temp;
    }
  
    deleteLast(){
      if(this.size <= 1){
          this.deleteFirst();
      }else{
          let seconsdLast = this.getNode(this.size - 2);
          // console.log(seconsdLast);
          this.tail = seconsdLast;
          this.tail.next = null;
          this.size--;
      }
    }
  
  //   0(n)
    deleteAtIndex(index){
      if(index === 0){
          this.deleteFirst();
      } else if(index == this.size - 1){
          this.deleteLast;
      }else{
          let node = this.getNode(index - 1);
          // console.log(node);
          node.next = node.next.next;
          this.size--;
      }
    }
  
    findbyValue(val){
      let temp = this.head;
  
      while(temp != null){
          if(temp.value == val){
              return temp;
          }
          temp = temp.next;
      }
  
      return null;
    }
  
    display() {
      let temp = this.head;
      let str = ''
      while (temp != null) {
        str += `${temp.value} -> `
        temp = temp.next;
      }
  
      console.log(str);
    }
  
    removeDuplicates(){
      let node = this.head;
  
      while (node.next != null) {
        if(node.value === node.next.value){
          node.next = node.next.next
          this.size--;
        }else{
          node = node.next;
        }
      }
      this.tail = node;
      this.tail.next = null;
    }
  
    reverse(node){
      if(node === this.tail){
        this.head = this.tail;
        return;
      }
      this.reverse(node.next);
      this.tail.next = node;
      this.tail = node;
      this.tail.next = null
    }
  
    reverseIterative(){
      if(this.size < 2){
        return; 
      }
  
      let prev = null;
      let present = this.head;
      let next = present.next;
  
      while (present != null) {
        present.next = prev;
        prev = present;
        present = next;
        if(next != null){
          next = next.next;
        }
      }
      this.head = prev;
    }
  
    iterative2(){
      if(this.size < 2){
        return;
      }
  
      let prev = null;
      let present = this.head;
      let next = present.next;
  
      while (present !== null) {
        present.next = prev;
        prev = present;
        present = next;
        if(next != null){
          next = next.next;
        }
      }
      this.head = prev;
    }
  
    reverseLinkListPartTwo(left, right){
      if(this.head == null || this.head.next == null || left == right){
        return null;
      }
  
      let curr = this.head;
      let prev = null;
      let i = 1;
      while (curr !== null && i != left) {
        prev = curr;
        curr = curr.next;
        i++;
      }
  
      let pointtoStart = prev;
      let start = curr;
      prev = null;
  
      while (curr !== null && i != right + 1) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        i++;
      }
      start.next = curr;
      if(pointtoStart != null){
        pointtoStart.next = prev
      }else{
        return prev;
      }
      return this.head;
    }
  
    middleList(){
      let s = this.head;
      let f = this.head;
  
      while(f != null && f.next != null){
        s = s.next;
        f = f.next.next;
      }
      return s;
    }
  
    isPalidrome(){
      let mid = this.middleList();
      let prev = null;
      let curr = mid.next;
      while (curr != null) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
      }
  
      while (prev != null) {
        if(this.head.value !== prev.value){
          return false;
        }
        prev = prev.next;
        this.head = this.head.next;
      }
  
      return true;
    }
  
    isPalidromeRecu(){
      let left = this.head;
      return this.helperIsPalidrome(left);
    }
  
    helperIsPalidrome(node){
      if(node != null){
        let smallAn = this.helperIsPalidrome(node.next);
        if(!smallAn){
          return false;
        }
        if(node.value !== this.head.value){
          return false;
        }
        this.head = this.head.next;
      }
  
      return true;
    }
  
    reverseList(head){
      if(head == null){
        return head;
      }
  
      let prev = null;
      let present = this.head;
      let next = present.next;
  
      while (present != null) {
        present.next = prev;
        prev =  present;
        present = next;
        if(next != null){
          next = next.next;
        }
      }
      return prev;
    }
  
    reorder(){
      // cycle detection
      // middle 
      // reverse
      if(this.head == null || this.head.next == null){
        return this.head;
      }
  
      let s = this.head;
      let f = this.head;
  
      while(f != null && f.next != null){
        s = s.next;
        f = f.next.next;
      }
  
      let sh = s.next;
      s.next = null;
  
      this.display1(sh)
      let curr = sh;
      let prev = null;
  
      while (curr != null) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
      }
  
      let t1 = this.head;
      let t2 = prev;
  
      while (t2 != null) {
        let m1 = t1.next;
        let m2 = t2.next;
  
        t1.next = t2;
        t2.next = m1;
        t1 = m1;
        t2 = m2;
      }
      this.display1(this.head)
  
    }
  
    reverseKNodes(head,k){
      if(head == null) return null;
  
      let curr = head;
      let prev = null;
      let next = null;
      let count = 0;
  
      while (curr && count < k ) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        count++
      }
  
      if(next){
        head.next = this.reverseKNodes(next,k);
      }
  
      return prev
  
      // let c = k;
  
      // while (curr != null && c > 0) {
      //   next = curr.next;
      //   curr.next = prev;
      //   prev = curr;
      //   curr = next;
      //   c--;
      // }
      // if(curr == null && c > 0){
      //   curr = prev;
      //   prev = null;
      //   next = null;
      //   while (curr !== null) {
      //     next = curr.next;
      //     curr.next = prev;
      //     prev = curr;
      //     curr = next;
      //   }
      // }
  
      // if(c > 0){
      //   return prev;
      // }else{
      //   head.next = this.reverseKNodes(curr, k);
      // }
      // return prev;
    }
  
    reverseKNodes1(head,k){
      if(head == null || k === 1) return head;
  
      const curr = head;
      const prev = null;
      const next = null;
      const length = this.getLength();
      const count =length / k;
      while (count > 0) {
        const last = prev;
        // biome-ignore lint/correctness/noInvalidUseBeforeDeclaration: <explanation>
        const newEnd = curr;
        // biome-ignore lint/correctness/noInvalidUseBeforeDeclaration: <explanation>
        const curr = curr.next;
  
        
      }
    }
  
    getLength(){
      let node = this.head;
      let length = 0;
      while (node != null) {
        length++;
        node = node.next;
      }
      return length;
    }
    display1(node){
      console.log(node);
      let temp = node;
      let str = ''
      while (temp != null) {
        str += `${temp.value} -> `
        temp = temp.next;
      }
  
      console.log(str);
    }
  
    
  }
  
  function merge(first, second){
    let nod1 = first.head;
    let nod2 = second.head;
  
    const l = new LinkedList()
  
    while(nod1 != null && nod2 != null){
      if(nod1.value < nod2.value){
        l.insertAtLast(nod1.value);
        nod1 = nod1.next;
      }else{
        l.insertAtLast(nod2.value);
        nod2 = nod2.next
      }
    }
  
    while (nod1 != null) {
      l.insertAtLast(nod1.value);
      nod1 = nod1.next;
    }
  
    while (nod2 != null) {
      l.insertAtLast(nod2.value);
      nod2 = nod2.next;
    }
    console.log(JSON.stringify(l));
    return l;
  }
  
  const ni = new Node(34);
  // console.log(ni);
  const li = new LinkedList();
  // li.insertFirst(23);
  // li.insertFirst(56);
  // li.insertFirst(76);
  // li.insertFirst(77);
  // li.insertAtLast(97);
  // li.insertAtIndex(99,0);
  // li.display();
  // li.deleteFirst();
  // li.insertAtLast(98);
  // li.display();
  // li.deleteLast()
  // li.display()
  // li.insertFirst(11);
  // li.insertFirst(13);
  // li.insertFirst(15);
  // li.display()
  // li.deleteAtIndex(2);
  // li.insertUsingRecursion(45,2);
  // li.display()
  // console.log(li.findbyValue(15))
  // // console.log(li.tail);
  // console.log(li.size);
  // li.insertFirst(1);
  // li.insertFirst(1);
  // li.insertFirst(2);
  // li.insertFirst(3);
  // li.insertFirst(3);
  // li.insertFirst(3);
  // li.insertFirst(4);
  // li.insertFirst(5);
  // li.insertFirst(5);
  // li.display()
  // li.removeDuplicates()
  // li.display()
  
  (()=> {
    const li1 = new LinkedList();
    const li2 = new LinkedList();
  
    li1.insertAtLast(1)
    li1.insertAtLast(1)
    li1.insertAtLast(1)
    li1.insertAtLast(5)
  
    li2.insertAtLast(1)
    li2.insertAtLast(2)
    li2.insertAtLast(9)
    li2.insertAtLast(14)
    li2.insertAtLast(32)
    li2.insertAtLast(43)
    li2.display()
    // li2.reverse(li2.head);
    // li2.reverseIterative();
    // li2.reverseLinkListPartTwo(2,5);
    // console.log(li1.isPalidrome());
    // console.log(li1.isPalidromeRecu());
    li2.head = li2.reverseKNodes(li2.head,4)
    li2.display()
    li2.reverseKNodes1(li2.head,3);
    console.log();
  
    // let result = merge(li1,li2);
    // result.display();
  
    })()
  
  