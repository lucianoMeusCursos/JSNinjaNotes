### Operador vírgula
O operador vírgula avalia o valor de seus operandos (da esquerda para a direita) e retorna o valor do último operando.

```
var a, b = 2, c;
function myFunc(){
	var x = 0;
	var y = 10;
	return (y += 1, x);
}
myFunc()
```

### Switch
Condicional onde você tem vários casos
```
function myFunc2(x){
	switch(x){
		case 1:
			console.log('x é 1');
		break;
		case 2:
			console.log('x é 2');
		break;
		default:
			console.log('x não é nem 1 nem 2');
	}
}
```

### While
Estrutura de loop, fica se repetindo enquanto a condição for verdadeira. Enquanto [condição] for verdade, faça isso...
```
var counter = 0;
while(counter < 10){
	console.log(counter);
	counter++;
}

// contador decrescente

var counter2 = 10;
while(counter2--){
	console.log(counter2);
}
```
