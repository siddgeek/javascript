// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

const newArray = [1, 2, 3,"sidd","govind"]
console.log(newArray[0] + newArray[4]);
console.log(newArray.push(5));
console.log(newArray.push("sahara","desert", 69));
console.log(newArray);
newArray.pop()
console.log(newArray);
console.log(newArray.length);

console.log(newArray.unshift(67));
console.log(newArray.shift);
console.log(newArray.includes(67));
console.log(newArray.indexOf(100));

const newArry = newArray.join()
console.log(newArry);
console.log(newArray);

console.log(newArray.slice(1,3));
console.log(newArray.splice(1,3));
console.log(newArray);
