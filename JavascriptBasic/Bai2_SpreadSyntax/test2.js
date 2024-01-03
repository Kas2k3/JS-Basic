const arr1 = [1, 2, 3]
// const arr2 = arr1.push(5) //return int

//return array
// arr1.push(5)
// const arr2 = arr1;

//Toan tu '...' dung de sao chep du lieu
const arr2 = [...arr1, 5]

//Khong nen lam dung Spread syntax vi la shallow copy khong phai deep copy => sai kq
//VD: [1, [2, 3], 4]

//Tuong tu voi object

console.log(">>> check array 1 = ", arr1, "check array 2 = ", arr2)