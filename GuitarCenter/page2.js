
var xhttp = new XMLHttpRequest();

var i = localStorage.getItem('index1');
var abc;
//console.log(i);
xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var response = JSON.parse(xhttp.responseText);
        abc = response.allProducts;
        def();
    }
}
xhttp.open("GET", "guitarData.json", true);
xhttp.send();
function def(){
    document.getElementById("z").src=abc[i].image_path;
    document.getElementById("displayInfo").innerHTML = abc[i].product_description;
    document.getElementById("shippingDetails").innerHTML = abc[i].shipping_details;
    document.getElementById("price").innerHTML = abc[i].price;
}

function dispInfo(){
    var x= document.getElementById("displayInfo");
    if(x.style.display !== "block"){
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    } }
    function details() {
        var t= document.getElementById("shippingDetails");
        if(t.style.display !== "block") {
        t.style.display = "block";
        }
        else {
            t.style.display = "none";
        }
    }
    function price() {
        var d= document.getElementById("price");
        if(d.style.display !== "block") {
            d.style.display = "block";
        }
        else {
            d.style.display = "none";
        }
}

function validateform() {
    var x=document.myform.firstName.value;
    var y=document.myform.lastName.value;
    var z=document.getElementById("ele").value;

    document.getElementById("ten").innerHTML="First name is "+ x +" and last name is "+ " and your email id is "+ z;

}
function myFun() {
    var x=document.getElementById("One");
    var y=x.value.length;
    if(y !== 16){
        alert("Enter 16 digit only");
        return false;
    }

}

function buy(){
    location.href="orderconfirmation.html";
    localStorage.index=i;
}