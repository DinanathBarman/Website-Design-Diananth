
//   Form submit 
function sub(){

    let name_a = document.forms["form"]["name"].value;
    if(name_a === ""){
        document.querySelector("#req-name").innerHTML="Type your full name";
        return false;
    }
if(name_a <= 5){
    document.querySelector("#req-name").innerHTML="Pliease type your full name";
    return false;
}
if(name_a.length < 5){
    document.querySelector("#req-name").innerHTML="Name is to short";
    return false;
}

let number = document.forms["form"]["number"].value;

if(number === "000000"){
    document.querySelector("#req-number").innerHTML="Phone number is not valid";
    return false;
}
else{
    document.querySelector("#req-number").innerHTML=number ;   
}
if(number <= 5){
document.querySelector("#req-number").innerHTML="Pliease type your valid number";
return false;
}
else{
    document.querySelector("#req-number").innerHTML=number ;   
}
if(number.length < 10){
document.querySelector("#req-number").innerHTML="This is not a phone number";
return false;
}
else{
    document.querySelector("#req-number").innerHTML=number ;   
}

let email_a = document.forms["form"]["email"].value;
if(email_a != "@"){
    document.querySelector("#req-email").innerHTML="This is not a valid emil";
}
if(email_a==""){
    document.querySelector("#req-email").innerHTML="Type your  valid emil";
}

if(email_a <= 30){
    document.querySelector("#req-email").innerHTML="Type your  valid emil";
}

if(email_a.length < 30){
    document.querySelector("#req-email").innerHTML="This is not a valid email";
}

}
// Form submit coad 
// blog search by click 
function search(){
document.querySelector(".search-show").classList.toggle("search-by-google-show");
document.querySelector(".icon-color").classList.add("icon-color");
}

document.querySelector("#search-click").addEventListener("click", search);
function show_search(){
 let ser = document.querySelector("#hel-search").value;
 document.querySelector(".search-bar-output").innerHTML= "<a>Your search list</b> "+""+ser;
 document.querySelector(".search-bar-output").classList.toggle("search-bar-output-d");
   
}
document.querySelector("#hel-search").addEventListener("search", show_search);


function re(){
    document.querySelector(".search-bar-output").classList.remove("search-bar-output-d");
}
document.querySelector(".search-show").addEventListener("click", re);

let copy_right = new Date();
document.querySelector(".output-by-year").innerHTML= copy_right.getFullYear();

function minit(){
let time_d = new Date();
let l= time_d.getSeconds();
let u= time_d.toLocaleTimeString();
l++
document.querySelector(".wtch-warp").innerHTML=u;
}
setInterval(minit,1000);
// // ========================== on load set =========================