let person = {name: "Jane", age: 22};
let {name, age} = person;

let array = [1, 2, 3, 4];
let [head, ...rest] = array; // head = 1, reset=[2,3,4]

let a = 1, b = 2;
[a, b] = [b, a];