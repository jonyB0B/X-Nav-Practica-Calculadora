
var teclas = document.querySelectorAll('#calculadora span');
var ops = ['+', '-', 'x', '/'];
var decimalAdded = false;

for(var i = 0; i < teclas.length; i++) {
	teclas[i].onclick = function(e) {
		
		var entrada = document.querySelector('.screen');
		var entradaVal = entrada.innerHTML;
		var btnVal = this.innerHTML;

		if(btnVal == 'C') {
			entrada.innerHTML = '';
			decimalAdded = false;
		}

		else if(btnVal == '=') {
			var equacion = entradaVal;
			var ultimo = equacion[equacion.length - 1];

			equacion = equacion.replace(/x/g, '*').replace(/÷/g, '/');

			if(ops.indexOf(ultimo) > -1 || ultimo == '.')
				equacion = equacion.replace(/.$/, '');
			
			if(equacion)
				entrada.innerHTML = eval(equacion);
				
			decimalAdded = false;
		}

		else if(ops.indexOf(btnVal) > -1) {
			var ultimo = entradaVal[entradaVal.length - 1];

			if(entradaVal != '' && ops.indexOf(ultimo) == -1) 
				entrada.innerHTML += btnVal;

			else if(entradaVal == '' && btnVal == '-') 
				entrada.innerHTML += btnVal;

			if(ops.indexOf(ultimo) > -1 && entradaVal.length > 1) {
				entrada.innerHTML = entradaVal.replace(/.$/, btnVal);
			}
			
			decimalAdded =false;
		}
		else if(btnVal == '.') {
			if(!decimalAdded) {
				entrada.innerHTML += btnVal;
				decimalAdded = true;
			}
		}

		else {
			entrada.innerHTML += btnVal;
		}
		e.preventDefault();
	} 
}
