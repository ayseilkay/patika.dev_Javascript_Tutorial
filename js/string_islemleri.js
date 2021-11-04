// ************ let ve const Degisken Tanimlama *************

// var ile degisken tanimlamak:
// var serverName="mssql"
// console.log(serverName)

//let ile degiskeni bos tanimlamak
let serverName;
console.log(serverName)

//let ile degiskene bilgi atayarak tanimlamak
serverName="plsql"
console.log(serverName)
// degisken ataması yapmadan önce kullanmaya calismak

// const ile degiskeni bos tanimlamaya calismak

//const ile degisken tanimlamak

//üs alma
console.log(2**6)
// asagı yuvarlama
console.log(Math.floor(45.98))

// yukarı yuvarlama

console.log(Math.ceil(45.98))

//yakına yuvarlama
console.log(Math.round(45.5))  // 45.4 --> 45 yapar.   // 45.6-->46 yapar.

// string( metinsel) bilgileri int ve float a dönüstürmek.
let number1="11"
console.log(typeof(number1))
console.log("number1 ", parseInt(number1))
console.log(typeof(parseInt(number1)))

let number2="11aaa"
console.log(typeof(number2))
console.log("number2 ", parseInt(number2))
console.log(typeof(parseInt(number2)))

let number3="11aatta"
console.log(typeof(number3))
console.log("number3 ", Number(number3))
console.log(typeof(parseInt(number3)))

// number veri tipinden stringe donusturmek
let number4=55
console.log(typeof(number4))
console.log("number4",number4.toString())
console.log(typeof(number4.toString()))

/***************************TEMPLATE LITERALS************************/
 let userName="ayse"
 const DOMAIN="gmail.com"
 let email= userName + "@" + DOMAIN
// let info=`Merhaba ${userName} sitemize hosgeldin.. mail adresin : ${email}
// mail adresinin uzunlugu : ${email.length}
// borcunuz :${(2+3)*10} TL
// saat bilgisi:${new Date().getHours()}
// kısa isminiz:${userName[0]}.
// `

// console.log(info)

/*************************STRING VERI TURU ISLEMLERI*******************/
// string icinde istedigimiz bilgiyi aramak ve yerini bulmak : search
// info.search("@")
// console.log(info.search("@"))
// // console.log(info[53])
// email.search('olmayanbirseyvarsa') // -1 getirir.

// belli bir yere kadar almak : slice

let DOMAIN2=email.slice(email.search('@')+1)
console.log(DOMAIN2)

//indexOF

let DOMAIN3=email.indexOf('.')
console.log(DOMAIN3)

console.log(email.slice(email.indexOf('.')+1))

let DOMAIN4=DOMAIN.slice(0,DOMAIN.indexOf('.'))
console.log(DOMAIN4)//gmail bilgisini alırız

//replace  DIKKAT: BURDA SET ETMEI UNUTMAMALISIN.
email= email.replace('gmail','outlook')
console.log(email)
//includes
email.includes('gmail')
console.log(email.includes('gmail')) //--> false döndü
//istedigim bilgiyle basladımı bitti mi? startsWidth  , endsWidth
console.log(email.endsWith('gmail.com'))

// ilk harflerini büyük yapmak
let firstName=  "ayse"
let lastName="ilkay"
let fullName=`${firstName[0].toUpperCase()}${firstName.slice(1)} ${lastName[0].toUpperCase()}${lastName.slice(1)}`
console.log(fullName)

let url ="www.kodluyoruz.org"
console.log(url.slice(url.indexOf('.')+1))