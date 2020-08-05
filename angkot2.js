var jmlAngkot = 10;
var angkotBeroprasi = 5;
var noAngkot = 1;

while(noAngkot <= angkotBeroprasi){
	console.log('Angkot No. '+ noAngkot +' beroperasi dengan baik.');
	noAngkot++;
}

for(
	noAngkot = angkotBeroprasi +1;
	noAngkot <= jmlAngkot;
	noAngkot++ ){
	console.log('Angkot No. ' + noAngkot + ' sedang tidak dapat beroperasi');
}