function lucky() {
	let cat = document.getElementById("search");
	let copycat = document.getElementById("copycat");

	copycat.innerHTML = cat.value;
	copycat.style.textTransform = "uppercase";
	copycat.style.color = "blue";
}

async function temp(location) {
	// API Key needs to be added
	const url = 'https://api.openweathermap.org/data/2.5/weather?appid=API_KEY&units=imperial'
	$.ajax({
		url: url,
		data: {
			q: location
		},

		success: (data) => {
			result.innerHTML = "Current temperature at " + data.name + ", " + data.sys.country + " is " + data.main.temp 
		},

		statusCode:  {
			400: () => {
				result.innerHTML = "Bad request!"
			},
			404: () => {
				result.innerHTML = "City " + location + " not found!"
			}
		}
	})
}

function pass(isLucky) {
	let cat = document.getElementById("search");
	let result = document.getElementById("result");

	if (cat.value.length > 0 && cat.value.startsWith("Temp:")) {
		temp(cat.value.substring(5).trim())
		return false;
	}

	if (cat.value === "") {
		result.innerHTML = "Search string cannot be empty";
		result.style.textTransform = "none";
		result.style.color = "red";
		return false;
	}
	if (isLucky === true) {
		lucky();
		return false;
	}
	
	return true;
}