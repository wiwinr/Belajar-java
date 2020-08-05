var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1


for(noAngkot; noAngkot<=jmlAngkot; noAngkot++){
	if(noAngkot <= 6 && noAngkot!= 5){
		console.log('Angkot No. '+ noAngkot +' sedang beroperasi dengan baik');
	}else if(noAngkot == 8 || noAngkot == 10 || noAngkot==5){
		console.log('Angkot No. '+ noAngkot +' sedang lembur');
	}else{
		console.log('Angkot No. '+ noAngkot +' sedang tidak beroperasi');
	}
	
}

console.log('Pelajari Gerbang Logika || = gerbang atau')
// Penting
// if(kondisi){
// 	aksi 1
// }else{
// 	aksi2
// }