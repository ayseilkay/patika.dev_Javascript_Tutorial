const USERS= [ "AYSE","MehMet","TugCE","AkSEL"]

const NEW_USERS = USERS.map(item => item.toLowerCase())
console.log(NEW_USERS)

// {userName : "AYSE",shortName : "A". ,newName:"Ayse"}
// const USER_OBJ = USERS.map(item => {
//     return {
//         userName:item,
//         shortName:`${item[0]}.`,
//         newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
//     }
// })

//**Yukardaki örnekten farklı olarak asagıdaki kullanımda return kullanmadık ama () parantezlerini koyduk */

const USER_OBJ = USERS.map(item => (
   { userName:item, shortName:`${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`})

)


console.log(USER_OBJ)