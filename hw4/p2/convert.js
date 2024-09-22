function convert(strDec) {
	let strNum = parseInt(strDec);
	if (strNum >= 128 || strNum <= -129) {
		window.alert("Cannot convert number to 8-bit two's complement.")
		return undefined;
	}
	let twos = "00000000";
	let bottom = 0;
	if (strNum < 0) {
		twos = "10000000";
		bottom = -128;
	}

	for (let i = bottom; i < strNum; i++) {
		index = 7;
		let placed = false
		while (!placed) {
			if (twos.charAt(index) === '0') {
				twos = twos.substring(0, index) + '1' + twos.substring(index + 1)
				placed = true;
			}
			else {
				twos = twos.substring(0, index) + '0' + twos.substring(index + 1)
				index--;
			}
		}
	}

	return twos;
}