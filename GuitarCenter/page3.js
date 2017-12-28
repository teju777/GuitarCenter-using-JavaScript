var xhttp = new XMLHttpRequest();

var j= localStorage.index;
var abc;
//console.log(i);
xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var response = JSON.parse(xhttp.responseText);
        abc = response.allProducts;
        def();
    }
}
xhttp.open('GET','guitarData.json',true);
xhttp.send();

function def() {
    document.getElementById("z").src = abc[j].image_path;
    var orderNum = Math.random();
    orderNum=orderNum*20;
    var oN=Math.floor(orderNum)*1048;
    document.getElementById("or").innerHTML=oN;
}