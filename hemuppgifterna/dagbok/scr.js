var butt = document.querySelector("button");
var table = document.getElementById("myTable");
var rowNumber = 0;

butt.addEventListener("click", function(){
    var fName = document.getElementById("firstName").value;
    var lName = document.getElementById("lastName").value;
    var tInput = document.getElementById("textField").value;
    arr=[];
    arr.push({fName, lName, tInput})
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value="";
    document.getElementById("textField").value="";
    rowNumber+=1;
    for(i=0; i<arr.length; i++) {       
        var row = table.insertRow(rowNumber);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = arr[i].fName;
        cell2.innerHTML = arr[i].lName;
        cell3.innerHTML = arr[i].tInput;
    };

});




