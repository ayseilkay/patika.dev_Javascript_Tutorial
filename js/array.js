let items = [1,2,3,4,5,6,7]

console.log(Array.isArray(items)) // true yada false olarak bize array olup olmadıgını söyler.

// array icindeki ortadaki elemanin cagrilmasi
console.log(items[ Math.floor(items.length/2)])

// Array ler object veri tipindedir.
// typeof(items)----> objects

// Array : Sona oge/eleman eklemek -->  push
    items.push("ayse") //sona ayse ' yi ekledi
    console.log(items)

// Array : Basa oge eklemek --> unshift
    items.unshift("AKB") // AKB ' yi basa ekledi.
    console.log(items)

// Array : Sondaki ögeyi cikartmak --> pop 
    items.pop() // sondaki ayse yi cıkarttı.
    console.log(items)

// Array : Bastaki ogeyi cikartmak --> shift
    items.shift()
    console.log(items) // bastaki AKB yi cıkarttı.

    /************* */
let femaleUsers = ["Ayse","Hulya","Merve"]
let maleUsers = ["Ahmet", "Hasan", "Mehmet"]

items.unshift(femaleUsers)
items.push(maleUsers)
console.log(items)
console.log(items[0].length)
// Array icerisinde oge ayırmak --> splice(pos,item?)

let newItems = items.splice(2,4)
console.log(newItems)

// Array içerisindeki ogenin index bilgisini bulmak -> ındexof('value')
items.unshift("lorem")
items.push("ipsum")
console.log( items)
console.log(items.indexOf('ipsum'))
console.log(items[items.indexOf('ipsum')])

// Array Kopyalamak -> slice 

let copyItems = items //KOPYALAMA YAPMAZ
console.log(items)
copyItems.pop()
console.log("Items : ", items)
console.log( "copyItems : ", copyItems)
console.log("Kopyalandıktan sonra")
copyItems = items.slice()
copyItems.pop() // son ogeyi cıkardık
console.log("copyItems ", copyItems)
console.log("items ",items)

//Aşağıdaki şekilde de kopyalama işlemi yapılabilir.

let es6Items = [...items] //items es6Items' a kopyalandı.
console.log(es6Items)

// İki Array Bilgisini Birlestirmek
let allUsers = [...femaleUsers,...maleUsers] //iki arrayi allUsers içerisine attık.
console.log(allUsers)

// Array içerisindeki bilgiyi String ' e cevirmek (toString , Join)
 console.log(allUsers.toString()) // array icerisindeki degerlere tek bir stringmis gibi aralarında virgul gelecek sekilde ulasabiliriz.
 
 console.log(allUsers.join(" --- ")) // arrayin icerisindeki degerleri '---' ile ayırır.

// Istedigimiz Index Bilgisine Öge Eklemek -> splice(index,0,value)
allUsers.splice(allUsers.length-1,0,"Melisa")
console.log(allUsers)
allUsers.splice(allUsers.length-3,0,"İkra")
console.log(allUsers)
allUsers.splice(Math.floor(allUsers.length / 2),0,"Tulu") // Arrayin ortasına eleman ekleme
console.log(allUsers)

//*****************************************************************************************/
let users=["Lorem","Ipsum","Dolor"]
let ulDOM = document.querySelector("#userlist")


for( let index=0; index< users.length;index++){
    let liDOM= document.createElement('li')
    liDOM.innerHTML=users[index]
    ulDOM.appendChild(liDOM)
}



