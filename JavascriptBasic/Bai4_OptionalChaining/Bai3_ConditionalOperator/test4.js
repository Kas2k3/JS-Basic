//UNDEFINED

// const x = {
//     name: 'Alice',
//     cat: {
//         name: 'Kas'
//     }
// };

// console.log("check name = ", x?.dog?.name)
//Thay doi dau cham thanh dau ?. de bo qua hien thi loi


// const arr = [1, 2, 3]
// const arr1 = null;

// const arr2 = arr1?.map(item => item * 2)

// console.log(">>>> check arr2 = ", arr2, " arr1 = ", arr1)


//DEFINED
const x = {
    name: 'Alice',
    cat: {
        name: 'Kas'
    }
};
//Gan gia tri mac dinh bang cach them dau ??
console.log("check name = ", x?.dog?.name ?? "kas2003")
