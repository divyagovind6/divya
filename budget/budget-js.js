function addExpense()
{
	var store1= document.getElementById("id1").value;
	document.getElementById("id2").innerHTML+=store1 + "<br>";
	var store2=new Array();
    store2= document.getElementById("id3").value;
	document.getElementById("id4").innerHTML+=store2 + "<br>";
	document.getElementById("f2").reset(); 


	document.getElementById("id9").innerHTML+='<i class="fa fa-pencil-square-o" aria-hidden="true" style="font-size:15px; color: blue;"></i> <i class="fa fa-trash" onclick="delfunc()" aria-hidden="true" style="font-size:15px; color: red;"></i>'+"<br>";
    document.getElementById("id7").innerHTML=Number(document.getElementById("id7").innerHTML)+Number(store2);
    var store4=Number(document.getElementById("id6").innerHTML)-Number(document.getElementById("id7").innerHTML);
    document.getElementById("id8").innerHTML=store4;
	
}

function budgetfun()
{
	 var store3= document.getElementById("id5").value;
	document.getElementById("id6").innerHTML= Number(store3);
	document.getElementById("f1").reset();
}
function delfunc(){
document.getElementsById("id2").remove();
document.getElementsById("id4").remove();
document.getElementsById("id9").remove();
}