
const user = {
    name: "Kas",
    age: 20,
    address: "Ha Noi"
}

// const name = user.name;
// const age = user.age;
// const address = user.address;

//-> Gian luoc hoa cu phap (Destructuring Assignment)
const { name, age, address } = user; //object

console.log("name: ", name, " age = ", age, " address: ", address)

const level = ["internship", "fresher", "junior", "middle", "senior"]

// const a = level[0]
// const a = level[4]

const [a, , , , b] = level; //phan tu nao khong muon lay thi de space

console.log("a: ", a, " b = ", b)