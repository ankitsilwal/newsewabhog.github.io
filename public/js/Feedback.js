'use strict'
const btn = document.getElementsByClassName("submit-rating");
const thanksMsg = document.getElementById("msg");
const Rating = document.getElementsByClassName("star-input");
btn.onclick=()=> {
Rating.style.display="none";
thanksMsg.style.display="table";
return false;
};