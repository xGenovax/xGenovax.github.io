function test() {

		var container = document.querySelector('.container');
		document.getElementById("test").innerHTML ="<h4> Message: " + "TEST" + "</h4>";
		container.querySelector('.first').innerHTML = "<h4> Message: " + "TEST2" + "</h4>";

}


window.onload = test;