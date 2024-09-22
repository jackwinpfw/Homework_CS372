function find_primes(x, y) {
	if (x > y) {
		return [];
	}

	let primes = [];
	let isPrime = true;
	for (let i = x; i <= y; i++) {
		if (i < 2) {
			continue;
		}

		for (let j = 2; j < i; j++) {
			if (i % j === 0) {
				isPrime = false;
			}
		}

		if (isPrime) {
			primes.push(i);
		}
		else {
			isPrime = true;
		}
	}
	return primes;
}