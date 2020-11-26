/*
function showData() {
    var name = document.getElementById("aname").value;
    value = name;
    console.log(value);
    var age = document.getElementById("aage").value;
    value = age;
    console.log(value);

}
*/ // console part


var showData = function() {
    var name = document.querySelector('#aname').value;
    var age = parseFloat(document.querySelector('#aage').value);
    document.querySelector("#getData").innerHTML = "<div> Name:" + name + "</div>" + "<div> Age:" + age + "<div>";

    var name = document.getElementById("#getData").value;
    localStorage.setItem("submit", name);

    var age = document.getElementById("#getData").value;
    localStorage.setItem("submit", age);

    return false;




}