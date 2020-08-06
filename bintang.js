// var s ='';
// for( var i =0; i <5; i++){
// 	for(var a=0; a < 5; a++){
// 		s += '*';
// 	}
// 	s += '\n';
// }
// console.log(s);

// var s ='';
// for( var i =0; i <15 ; i++){
// 	for(var a=0; a <= i; a++){
// 		s += '*';
// 	}
// 	s += '\n';
// }
// console.log(s);

// var s ='';
// for( var i = 10; i > 0 ; i--){
// 	for(var a=0; a < i; a++){
// 		s += '*';
// 	}
// 	s += '\n';
// }
// console.log(s);

// var s ='';
// for( var i = 0; i < 5 ; i++){
// 	for(var a=0; a < i; a++){
// 		s += '*';
// 		if(i+a == 4);
// 	}
// 	s += '\n';
// }
// console.log(s);


var s ='';
for( var i = 9; i > 0 ; i--){
	for(var a=0; a < 9; a++){
		s += '*';
		if(i !== a){
			break;
		} else if ((i-a) == 8){
			break;
		}
	}
	s += '\n';
}
console.log(s);