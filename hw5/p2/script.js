function lucky() {

	let cat = document.getElementById("search");
	let copycat = document.getElementById("copycat");

	copycat.innerHTML = cat.value;
	copycat.style.textTransform = "uppercase";
	copycat.style.color = "blue";
}

function pass(isLucky) {
	let cat = document.getElementById("search");
	let copycat = document.getElementById("copycat");

	if (cat.value === "") {
		copycat.innerHTML = "Search string cannot be empty";
		copycat.style.textTransform = "none";
		copycat.style.color = "red";
		return false;
	}
	if (isLucky === true) {
		lucky();
		return false;
	}
	
	return true;
}