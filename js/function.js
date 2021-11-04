// function greetings(firstName="Ayse"){
//     console.log(`Merhaba ${firstName ? firstName : ""}`)
// }
// greetings()

function greetings(firstName){
    console.log(`Merhaba ${firstName ? firstName : ""}`)
}
greetings("Ayse")

function getNameLastName(firstName,lastName){
    let info=`${firstName} ${lastName} `
   return info
}


function domIdWriteInfo(id,info){
    let domObject=document.querySelector(`#${id}`)
    domObject.innerHTML=info
}

domIdWriteInfo('greeting',getNameLastName('Ayse','İlkay'))