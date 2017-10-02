### Clousure
É um escopo fechado.

A variável scope dentro da função `checkScope` sobrescreve a variável scope global.

A função interna `func` consegue guardar os valores dela e os valores que estão fora

```
(function(){
    'use strict';
    var scope = 'global scope';
    
    function checkScope() {
        
        var scope = 'local scope'; // sobrescreve global
        
        function func() {
           
            return scope; // o valor aqui é 'local scope'
        }

        return func();
        
    }

    console.log(checkScope()); // local scope
})();
```