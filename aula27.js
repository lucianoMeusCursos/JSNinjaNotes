// MANIPULAR DOM COM PERFORMANCE
    // É muito custoso pro browser fazer alterações na página pq ele tem que recarregar todas as informações pra ajustar tudo como deve ficar;
    
    /* createDocumentFragment() 
    Cria um fragmento, como se fosse o documento em branco, para que vc possa manipular nós e quando terminar essa manipulação ele inclui no seu DOM, isso deixa a performance muito melhor, pois ele inclui todas as coisas de uma vez, sem ficar recarregando a página.
    Ele não tem parentNode, será sempre null */
    var fragment = document.createDocumentFragment(); // criado o fragmento
    var childP = document.createElement('p'); //criado elemento P vazio
    var textChildP = document.createTextNode('Texto da tag P'); //criado um texto

    child.appendChild(textChildP); // adicionou o texto dentro da tag <p>
    fragment.appendChild(childP); // jogou a tag <p> e colocou dentro fragment

    document.body.appendChild(fragment); // colocou o fragment dentro do body
    
// EVENTOS
    // Posição dos scripts no HTML importa! Quando existe uma chamada de script no código, o browser para de carregar a página para rodar o script, portanto 
    
    // DOMContentLoaded - Usado para manipular elementos que se espera que realmente não estejam carregados, você só precisa que os elementos estejam na tela, não necessariamente carregados
    
        function afterDomContentLoaded (){
            alert('AfterDomContentLoad');
        }

        document.addEventListener('DOMContentLoaded', afterDomContentLoaded, false);
        
    // Window LOAD - Se precisar que os elementos realmente estejam carregados para a sua ação, pode usar o evento de load do window.

        function afterWindowLoaded (){
            alert('AfterWindowLoad');
        }

        window.addEventListener('load', afterWindowLoaded, false);

// TÉCNICAS NINJA
    // Copiar Arrays
        var arr = [1, 2, 3, 4, 5];
        var arr2 = arr; //true - É errado, pois é apenas uma referência, no caso eles apontam para o mesmo lugar, uma cópia são objetos com mesmo conteúdo mas diferentes
        arr2 = arr.slice(); //Sem passar parâmetros o slice funciona como um copiador de arrays;

        // Usando o slice para copiar arrays like
        var $divs = document.querySelectorAll('div');
        var $divsCopy = Array.prototype.slice.call($divs);

    // Saber o tipo de dado real do objeto
        console.log({prop1: 1, prop2: 2}.toString()); // retorna [object, object]

        var arr = [1, 2, 3];
        function myFunc(){};

        console.log(Object.prototype.toString.call(arr)) // [object Array]
        console.log(Object.prototype.toString.call(myFunc)) // [object Function]