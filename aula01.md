

### Alguns tipos de valores
```
null // Nenhum valor (um valor nulo)
undefined // Ausencia de valor (nao existe)
NaN // Not a number, quando deveria ser um numero, mas nao e
```

### Object {}
Objetos tem propriedades e metodos.
```
var pessoas = {
	altura: 1.87, //propriedades sao coisas referentes ao objeto, no caso a pessoa
	peso: 90,
};

// propriedades podem ser alteradas
pessoa.altura = 1.95;
```
		

### Array []
Arrays sao listas, ou vetores, de valores
```
var numeros = [];
var numeros = [1,2,3,4,5];
var letras = ['a','b','c','d','e']
```
		
indices do Array
```
numeros[0] // 1 a
numeros[1] // 2 b
numeros[2] // 3 c
numeros[3] // 4 d
numeros[4] // 5 e
```

### Operadores e comparadores
* ++  soma + 1, incremento
* --  diminui -1, decremento 
* +=, -=, *=, /=
```
(var = var + valor) == (var += 20)
(var = var * valor) == (var *= 20)
```
* =  atribui o valor a...
* ==  igual a...
* ===  igual a e do mesmo tipo
* !=  diferente de...
* !==  diferente, mas do mesmo tipo

### Function()
Funoes sao blocos de codigo
```
function soma(){
	x = x + 1;
};
```
invocando a função, pode ser invocada mais de uma vez
```
soma()
```
variaveis criadas dentro de uma função nao podem ser acessadas de fora
```
function qualquer(){
	var clara = 'clara'; 
};

function cinco(){
	return 5;
};

var y = 4;
y + cinco() // 9
```

Parametros de uma funcao sao valores que podem ser passados a uma função
```
function soma(x,y){ // x e y são os parâmetros
	return x+y;
};
```


