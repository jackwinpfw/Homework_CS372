function db(isLucky) {
	let search = document.getElementById("search");
	let result = document.getElementById("result");

	if (isLucky) {
		$.ajax({
			url: "/database/add",
			data: {
				q: search.value
			},
	
			success: (data) => {
				result.innerHTML=data.message
			},
			error: (error) => {
				console.log(error)
			}
		})
		return false;
	}
	$.ajax({
		url: "/database/read",
		data: {
			q: search.value
		},

		success: (data) => {
			let text = "<ul>"
			
			for (let i = 0; i < data.items.length;i++) {
				text+="<li>" + data.items[i] + "</li>"
			}
			
			result.innerHTML=text
		},
		error: (error) => {
			console.log(error)
		}
	})
}