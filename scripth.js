// var nama = prompt('masukan nama');
// alert(nama);

// var test =confirm("kamu yakin??");
// if (test === true) {
// 	alert('user menekan tombol ok');
// }else{
// 	alert('user menekan tombol cancel');
// }

alert('Selamat Datang ..');
var lagi = true;

while(lagi){
	var nama = prompt('masukan nama: ');
	alert('halo' + ' ' + nama);

	lagi = confirm('coba lagi');
}
alert('terima kasih ..');