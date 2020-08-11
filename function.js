function jmlVolume2kubus(a,b) {
	var volumeA,
		volumeB,
		total;


	volumeA = a * a * a;
	volumeB = b * b * b;

	total = volumeA + volumeB;

	return total;

}

console.log(jmlVolume2kubus(8, 8));
console.log(jmlVolume2kubus(8, 3));
console.log(jmlVolume2kubus(10,5));