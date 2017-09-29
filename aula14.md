### Arrays
`reduce()`
Não modifica o array principal, e nem retorna o array. Reduz todos os itens do array em um só. Tem dois parâmetros, a função de redução e o valor inicial para a redução. Ele pega o valor acumulado e soma com o valor atual.s
```
var arr = [ 1, 2, 3, 4, 5 ];
var reduce = arr.reduce(function(acumulado, atual, index, array){
    return acumuludo + atual;
}, 0); // neste caso o ínicio do valor acumulado é 0, se este número não for passado o primeiro número passa a ser o valor acumulado e o segundo o valor atual.
/*
1º - 0 + 1 = 1
2º - 1 + 2 = 3
3º - 3 + 3 = 6
4º - 6 + 4 = 10
5º - 10 + 5 = 15
*/
console.log( reduce ); // 15
```

Com strings ocorre a concatenação. A diferença para o join é que o join trata os números como string.
```
var arr = [ 'C', 'l', 'a', 'r', 'a' ];
var reduce = arr.reduce(function(acumulado, atual, index, array){
    return acumulado + atual;
});
console.log( reduce ); // 'Clara'
```

`reduceRight()`
A mesma coisa que o reduce só que vai no sentido contrário, da direita pra esquerda
```
var arr = [ 'C', 'l', 'a', 'r', 'a' ];
var reduce = arr.reduceRight(function(acumulado, atual, index, array){
    return acumuludo + atual;
});
console.log( reduce ); // 'aralC'
```
```
var arr = [ 1, 2, 3, 4, 5 ];
var reduce = arr.reduceRight(function(acumulado, atual, index, array){
    return acumuludo * atual; // neste caso altera o resultado pois trata-se de uma multiplicação
}, 1);
/*
1º - 1 * 5 = 5
2º - 5 * 2 = 10
3º - 10 * 3 = 30
4º - 30 * 4 = 120
5º - 120 * 5 = 600
*/
console.log( reduce ); // 600
```

`indexOf()`
Procura se o valor existe no array e retorna o seu índice.
```
var arr = [ 1, 2, 3, 4, 5 ];
console.log( arr.indexOf( 3 ) ); // 2

// Se não existir retorna -1
console.log( arr.indexOf( 6 ) ); // -1

// Você também pode decidir a partir de onde começa a busca, neste caso do indíce 1
console.log( arr.indexOf( 4, 1 ) ); // 3
```

`lastIndexOf()`
igual ao indexOf porém procura da ordem inversa, do final.
```
var arr = [ 'C', 'l', 'a', 'r', 'a' ];
console.log( arr.lastIndexOf( 'l' ) ); // 1
console.log( arr.lastIndexOf( 'a', 3 ) ); // 2
console.log( arr.lastIndexOf( 'a', 1 ) ); // -1
```

`isArray()`
Diz se é um array ou não, serve para fazer verificação
```
console.log( Array.isArray( arr ) ); // true
console.log( Array.isArray( {} ) ); // false
```