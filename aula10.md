### Wrapper Objects
Valores primitivos não são objetos, mas possuem propriedades, pois o Javascript cria envoltótios para o tipo, no caso string, usando os construtores, para que você possa acessar algumas propriedades e após o uso ele descarta.

```
var name = 'Clara'; // Converte para um objeto
```

Construtores criam novos objetos. Para utilizar construtores, basta utilizar a palavra chave 'new'

```
var name = new String('Clara'); // String: 'Clara'
var age = new Number(30); // Number: 30
var ninja = new Boolean(false); // Boolean: False
```

Conversores. sem utilizar a palavra chave 'new', converte-se o tipo da variável.
```
var name = String(30); // '30'
var age = Number('150'); // 150
var ninja = Boolean(0); // false
```

A atribuição é sempre a última coisa a ser feita. A expressão começa a ser interpretada da direita para a esquerda. Então primeiro é feita a soma de 10 + 10, que dá 20. Depois, esse valor é passado como parâmetro para o objeto String, ficando String(20). O resultado aqui deveria ser 1010.

```
var concat = String(10 + 10);
var concat = String(10) + String(10);
```

### Typeof, testando tipos de Valores

Typeof, é um operador unário, que te retorna o tipo do valor passado  
Confie em typeof somente para valores primitivos!
```
typeof undefined; // 'undefined'
typeof function(){}; // 'function'
typeof true; // 'Boolean'
typeof 10; // 'number'
typeof 'JS Ninja'; // 'string'

// Qualquer outro objeto que não seja uma function ele vai retornar Object
typeof {}; // 'object'
typeof []; // 'object'

// Retorna 'object' pois é um erro na implementação do javascript
typeof null; 
```
Testando valores null
```
function test(x) {
    if ( x === null ){
        return 'Valor Nulo!';
    }
}
```

