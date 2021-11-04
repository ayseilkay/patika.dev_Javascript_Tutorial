

const UL_DOM = document.querySelector("#userlist")
const LOREM_LIST = ["lorem","ipsum","deneme","test","dsdf"]

// for (let index = 0; index < LOREM_LIST.length; index++) {
//     if(LOREM_LIST[index]=="ipsum"){break}
//     let li_Dom= document.createElement("li")
//     li_Dom.innerHTML = LOREM_LIST[index]
//     UL_DOM.append(li_Dom)
// }

for (let index = 0; index < LOREM_LIST.length; index++) {
    if(LOREM_LIST[index]=="ipsum"){continue} //ipsum u yazdırmayacak.( CONTINUE ONU ATLA DEVAM ET DER)
    let li_Dom= document.createElement("li")
    li_Dom.innerHTML = LOREM_LIST[index]
    UL_DOM.append(li_Dom)
}