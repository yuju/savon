function changestyle(){
	document.getElementById("myparag").innerHTML = "Paragraph changed!";
	document.getElementById("myparag").style.color = "red";
}

function total(){

	
	var x = document.getElementById("x");
	var y = document.getElementById("y");
	
	var tot = parseInt(x.value) + parseInt(y.value);
	
	alert("The total is : " + tot);
	
}

