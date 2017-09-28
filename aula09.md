### Escopo de Funções

Da mesma forma que variáveis, as funções criadas dentro de outras funções, tem escopo local, não podendo ser acessadas fora da função que as contém.
```
function myFunc( ){
    function sum( ){
        return 1 + 2;
    }
    return sum();
}
console.log( myFunc() ); // 3
console.log( sum() ); // erro
```

### Closures
funções que conseguem acessar valores externos a ela
```
function myFunc(){
    var num1 = 1;
    var num2 = 2;
    function sum(){
        return num1 + num2;
    }
    return sum();
}
console.log( myFunc() ); // 3
```

### Hoisting
Se existir uma função literal (não atribuida a uma variável) ele irá içar essa função para o topo.  

Como é escrito:
```
function myFunc2( ){
    var num1 = 1;
    var num2 = 2;
    return sum( );
    function sum2( ){
        return num1 + num2;
    }
}
console.log( myFunc() ); // 3
```

Como o Javascript interpreta:

```
function myFunc2( ){
    function sum2( ){
        return num1 + num2;
    }
    var num1 = 1;
    var num2 = 2;
    return sum( );
}
console.log( myFunc() ); // 3
```

Porém se essa função estiver atribuída a uma variável esse içamento não funciona. Já variáveis só são chamadas a partir de onde foram criadas, elas não são içadas.


```
function myFunc2( ){
    var num1 = 1;
    var num2 = 2;
    return sum( );
    var func = function sum2( ){
        return num1 + num2;
    }
}
console.log( myFunc() ); // Erro
```

O `console.log()` pode receber parâmetros!,

```
console.log('Frase 1', 'Frase 2', variável);
```

### IIFE Funções auto executáveis

```
function sum(){
    return 1 + 3;
}
console.log( sum() ); // 4

var sum2 = function(){
    return 3 + 2;
};
console.log( sum2() ); // 5

var sum3 = function otherSum(){
    return 5 + 8;
};
console.log( otherSum() ); // Erro , não consegue executá-la pois ela está no escopo da variável
```

Não há como executar funções anônimas chamando-as, deve-se chama-las usando '()', desta forma:

```
(function(){
    console.log( 1 + 2 );
})();
```
