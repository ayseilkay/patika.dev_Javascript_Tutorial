//fetch api

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
//https://jsonplaceholder.typicode.com/   -- free fake api

// fetch("data/settings.json").then(response => console.log(response))


// JSON dosyadan veri çekmek.
fetch("data/settings.json").then(response=>{
    return response.json()
}).then(responseJson => {
    console.log(responseJson);
    console.log(responseJson.userName)
})

// API üzerinden veri çektik 
//https://jsonplaceholder.typicode.com/   -- free fake api yi kullandım.
fetch("https://jsonplaceholder.typicode.com/posts").then(response =>{
    return response.json()
}).then(responseJson => {
    console.log(responseJson)
})

let userListDOM = document.querySelector("#userlist")
fetch("https://jsonplaceholder.typicode.com/users").then(
    response => response.json()).then(
        responseJson =>{
    responseJson.forEach(item =>{ 
        let liDOM = document.createElement("li")
        liDOM.innerHTML= item.name
        userListDOM.append(liDOM)
    })
 })


 for (var i = 0; i < 3; i++) {
    setTimeout(function() { alert(i); }, 1000 + i);
  }
  (function() {
    var a = b = 5;
  })();
  
  console.log(b);