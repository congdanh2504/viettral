var queryString = decodeURIComponent(window.location.search);
var queries = queryString.substring(1).split("&");
let usernamee = queries[0].substring(9);
let password = queries[1].substring(9);
if (usernamee == "admin" && password == "admin"){
    $("#acc").html($("#acc").html()+'<li role="separator" class="divider"></li><li><i class="fa fa-shield" aria-hidden="true" style="color: #F7559A;"></i><a href="./admin/statistical.html?username=admin&password=admin">Administration</a></li>'); 
}

$("#user").html(" "+usernamee);

$.each($(".nav-item > a"), (index, value) => {
    $(value).attr('href', $(value).attr('href')+queryString)
})

$.each($(".dropdown-item"), (index, value) => {
    $(value).attr('href', $(value).attr('href')+queryString)
})

$.each($(".dropdown-itemm"), (index, value) => {
    $(value).attr('href', $(value).attr('href')+queryString)
})
