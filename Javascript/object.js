let user = {
    "baner": "steve",
    "age": 24,
    "address": {
        "city": "New York",
        "country": "USA"
    }
}

console.log(delete user.address.city)


let user2 = {
    name: "Abhay",
    age: 32
}

let clone = {}

for(let key in user2){
    clone[key] = user2[key];
}

clone.name = "Ravi";

console.log(user2)
console.log(clone)

// oject assign
// Object.assign(target,source1,source2,...)

let user3 = {
    name: "Abhay",
    age: 32
}
let clone2 = Object.assign({},user3);
clone2.name = "Ravi";
console.log(user3)
console.log(clone2)


// spread operator
let user4 = {
    name: "Abhay",
    age: 32
}
let clone3 = {...user4};
clone3.name = "Ravi";
console.log(user4)
console.log(clone3)

// deep clone
let user5 = {
    name: "Abhay",
    age: 32,
    address: {  
        city: "New York",
        country: "USA"
    }
}

let clone4 = JSON.parse(JSON.stringify(user5));
clone4.address.city = "Los Angeles";
console.log(user5)
console.log(clone4)

