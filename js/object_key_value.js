let laptop1 = {
    brand : "Apple",
    model : "MackBook Pro",
    "2kg": 2,
} // bir object oldugunu belirtiyoruz.

console.log(laptop1)
console.log(laptop1.brand,laptop1["brand"])
console.log(laptop1.model,laptop1["model"])
console.log(laptop1["2kg"])

laptop1.brand = "Mac"
console.log(laptop1.brand)

// Yeni bir bilgi eklemek
laptop1.version =" 10.15.7"
console.log(laptop1)

// keys lere ulasmak
keys = Object.keys(laptop1)
console.log(keys)
console.log(Object.keys(laptop1))

keys.forEach(item => {
    console.log(item) // key 
    console.log(laptop1[item]) //value
});

// values lara ulasmak

values = Object.values(laptop1)
console.log(values)
console.log(Object.values(laptop1))

values.forEach(item => {
    console.log(item) // value 
});
//****************************************************************************************************/
// Object içinde metot nasıl ekleriz

let user1 = {
    firstName: "Ayse",
    lastName: "İlkay",
    score: [1, 2, 3, 4],
    isActive:true,
    shortName: function() {return `${this.firstName[0].toUpperCase()}.${this.lastName}`}
}
console.log(user1.score)
console.log(user1.shortName(user1.firstName,user1.lastName))



function yaz(){console.log("Merhaba Kodluyoruz")}
console.log(yaz["name"])