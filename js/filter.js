
// 5 harfden fazla olanlar
const PRODUCTS = [ "Laptop", "One","Phone","Speaker","Desktop PC","Server","Mouse","Keyboard","test"]

const NEWPRODUCTS= PRODUCTS.filter(item=> { return item.length>5})

console.log(NEWPRODUCTS)

// aktif kullanıcılar

const USERS = [
    { fullName : "Ayse İlkay",isActive :true },
    { fullName : "Tülü İlkay",isActive :false },
    { fullName : "Alin İlkay",isActive :false },
    { fullName : "Firdes İlkay",isActive :true },
]

const ACTIVEUSER= USERS.filter(item =>{return  item.isActive == true} )
console.log(ACTIVEUSER)
const ACTIVEUSER2= USERS.filter(item =>{return  item.isActive } )
console.log(ACTIVEUSER2)


