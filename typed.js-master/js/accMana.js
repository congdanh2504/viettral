var queryString = decodeURIComponent(window.location.search);
var queries = queryString.substring(1).split("&");
let usernamee = queries[0].substring(9);
let password = queries[1].substring(9);
if (usernamee == "admin" && password == "admin"){
    let nav = document.getElementById("acc");
    console.log(nav.innerHTML);
    nav.innerHTML += '<li role="separator" class="divider"></li><li><i class="fa fa-shield" aria-hidden="true" style="color: #F7559A;"></i><a href="../admin/statistical.html?username=admin&password=admin">Administration</a></li>'
}
let user = document.getElementById("user");
user.innerHTML = " "+usernamee;
var items = document.querySelectorAll(".nav-item > a");
for (let i=0;i<items.length;i++){
    items[i].href += queryString;
}
var items = document.querySelectorAll(".dropdown-item");
for (let i=0;i<items.length;i++){
    items[i].href += queryString;
}
var items = document.querySelectorAll(".dropdown-itemm");
for (let i=0;i<items.length;i++){
    items[i].href += queryString;
}