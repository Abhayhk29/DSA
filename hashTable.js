class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }

    hash(key){
      let total = 0;
      for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
      }  
      return total % this.size;
    }


    set(key, value){
        const index = this.hash(key);
        const bucket = this.table[index];
        if(!bucket){
            this.table[index] = [[key,value]];
        }else{
            const sameKeyItem = bucket.find(item => item[0] === key);
            if(sameKeyItem){
                sameKeyItem[1] = value;
            }else{
                bucket.push([key,value]);
            }
        }
        // this.table[index] = value;
    }

    get(key){
        const index = this.hash(key);
        // return this.table[index];
        const bucket = this.table[index];
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] === key);
            if(sameKeyItem){
                return sameKeyItem[1];
            }
        }
        return undefined;
    }

    remove(key){
        const index = this.hash(key);
        let bucket = this.table[index];
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] === key);
            bucket.splice(bucket.indexOf(sameKeyItem),1);
        }

        // this.table[index] = undefined;
    }

    display(){
        for (let i = 0; i < this.table.length; i++) {
            if(this.table[i]){
                console.log(i, this.table[i]);
            }
        }
    }
}

const table = new HashTable(20);

table.set('na', "Abhay");
table.set('age', 33);

table.display();
console.log(table.get("na"));
console.log(table.get("age"));


// table.remove('age');
table.set('na', "Pandey");
table.set('nam', "Pandey1");

table.display();