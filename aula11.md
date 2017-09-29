### Do / While
Primeiro entra na instrunção para depois verificar se é verdadeira ou não
```
var counter = 1;
do{
    console.log( counter++ ); // ele sempre fará essa primeira instrução
}
while( counter < 10 ); // para depois verificar a condição
```

### For / in
Serve para percorrer propriedades de um objeto. É mais lento que o for normal
```
	var car = {
		brand: 'VW',
		model: 'gol',
		year: '2015'
	};
	for ( var prop in car ){
		console.log( prop ); // brand, model, year
		console.log( car[prop] ); // Vw, gol, 2015
	}
	console.log( 'brand in car?', 'brand' in car ); // brand in car? true
```
### Saltos
Usados para pular uma parte do código.

- O `return` quando implementado pula todo o código seguinte da função
- O `break` sai do loop, como por exemplo em um switch
- O `continue` ao invés de sair do loop vai para a próxima instrução válida
