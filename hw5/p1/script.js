function add() {
	let input1 = parseInt(document.getElementById("input1").value)
	let input2 = parseInt(document.getElementById("input2").value
)
	document.getElementById("result").value = input1 + input2
}

function sub() {
	let input1 = document.getElementById("input1").value
	let input2 = document.getElementById("input2").value

	document.getElementById("result").value = input1 - input2
}

function mul() {
	let input1 = document.getElementById("input1").value
	let input2 = document.getElementById("input2").value

	document.getElementById("result").value = input1 * input2
}

function div() {
	let input1 = document.getElementById("input1").value
	let input2 = document.getElementById("input2").value

	document.getElementById("result").value = input1 / input2
}