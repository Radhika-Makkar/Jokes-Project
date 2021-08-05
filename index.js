async function loadText(){
    try{
let data=await fetch("https://icanhazdadjoke.com",{
     headers:{
         Accept:"application/json"
     }
 })
let response=await data.json();
document.getElementById("joke").innerHTML=response.joke;
}catch(err){
    console.log(err);
}
}

    document.getElementById("btn").addEventListener("click",loadText);