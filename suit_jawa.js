var tanya = true;
while (tanya){	

	//menangkap pilhan player
	var p = prompt('pilih: gajah, semut, orang');

	//menangkap pilihan computer
	//membangkitkan (menggenerate) bilangan random
	var comp = Math.random();

	if(comp < 0.34){
	comp = 'gajah';
	}else if(comp >= 0.34 && comp < 0.67){
	comp = 'orang';
	}else{
	comp = 'semut';
	}
	console.log(comp);

	var hasil= '';

	//menentukan rules
	if(p == comp){
	hasil = 'Seri !';
	}else if( p == 'gajah'){
	// if(comp == 'orang'){
	// 	hasil = 'Menang !';
	// } else{
	// 	hasil = 'Kalah !';
	// }
	hasil = (comp == 'orang') ? 'Menang !' : 'Kalah !';
	}else if(p == 'orang'){
	hasil = (comp == 'gajah') ? 'Kalah !' : 'Menang !';
	}else if (p == 'semut'){
	hasil = (comp == 'orang') ? 'Kalah !' : 'Menang !';
	}else {
	hasil = 'memasukan pilihan yang salah';
	}

	// tampilkan hasilnya
	alert('Kamu memiilih : ' + p + ' dan Komputer memilih : '+ comp + ' \nMaka hasilnya : Kamu ' + hasil);

	tanya = confirm('lagi ?');
}
