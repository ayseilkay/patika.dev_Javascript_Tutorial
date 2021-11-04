const PRODUCTS = [ "Laptop"," Phone","Speaker","Desktop PC","Server","Mouse","Keyboard"]
PRODUCTS.forEach(product=>console.log(product))
PRODUCTS.forEach((product,index)=>console.log(product,index))
PRODUCTS.forEach((product,index,array)=>console.log(product,index,array))
PRODUCTS.forEach((product,index,array)=>array[index]= product + " ---")
console.log(PRODUCTS)
PRODUCTS.forEach((product,index,array)=>array[index]= `${product.toUpperCase()}`)

console.log(PRODUCTS)

// let users=["Lorem","Ipsum","Dolor"]
// let ulDOM = document.querySelector("#userlist")


// for( let index=0; index< users.length;index++){
//     let liDOM= document.createElement('li')
//     liDOM.innerHTML=users[index]
//     ulDOM.appendChild(liDOM)
// }
let ulDOM = document.querySelector("#userlist")

PRODUCTS.forEach(item => {
    let liDOM= document.createElement('li')
    liDOM.innerHTML=item
    ulDOM.appendChild(liDOM)

})
