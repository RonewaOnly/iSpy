var email = document.querySelector("#hackEm");
var emBtn = document.querySelector("#gonebtn");
var logBtn = document.querySelector("#login");
logBtn.addEventListener('click',()=>{
    alert("button pressed");
    const position =navigator.geolocation.getCurrentPosition(pos);
});
emBtn.addEventListener('click',check);

function check(){
    if(email.value == ""){
        alert("you learnt something at least");
    }else{
        alert("Whats wrong with you now we have your information , so run far");
    }
}
function pos(x){
    console.log("lat: "+x.coords.latitude+"\n"+"lit: "+x.coords.longitude);
}