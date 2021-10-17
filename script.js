var input = document.getElementsByName("input");
var output = document.getElementById("output");
function calculate() {
	output.innerHTML = input[0].value.indexOf(input[1].value);
}