// stack for example :- stack overflow
//LIFO : last out first
// First inserted last out
// FILO : First in last off
// Insert on the top 
// pop and Push
// Queue : first in first out
// FIFO : first in first out
// LILO : Last in last out

class CustomStack {
    constructor(){
        this.items = [];
    }

    push(val){
        this.items.push(val);
    }

    pop(){
        return this.items.pop();
    }

    peek(){
        return this.items[this.items.length - 1];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

    print(){
        console.log(this.items.toString());
    }
}

const st = new CustomStack();
console.log(st.isEmpty());

st.push(23);
st.push(43);
st.pop();
st.print();

st.push(55);
st.push(76);
console.log(st.peek());
console.log(st.print());

