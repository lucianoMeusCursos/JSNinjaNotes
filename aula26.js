// API DOM

    // DOM = Document Object Model
    // A API existe em outras linguagens também, mas como o JS está sendo executado na hora junto com browser, é mais fácil manipular elementos do DOM em tempo real.
    // O papel da API DOM é transformar cada elemento da marcação (XML ou HTML) em um nó, que você consegue manipular separadamente.

    // O elemento que começa o DOM é o Document, e o seu filho direto é o elemento principal do HTML que é a tag <html>, o root element. Onde a partir dele saem os filhos. Cada um desses 'parentes' é um nó manipulável.

// PERCORRENDO ELEMENTOS

    // PROPRIEDADES que trazem sempre as quebras de linha e cometários como nós
        // parentNode - Retorna o nó pai do elemento
            var $main = document.querySelector('.main');
            console.log($main.parentNode);
            
        // childNodes - Retorna todos os nós filhos do elemento, em formato de node-list
            console.log($main.childNodes);

        // firstChild - Retorna apenas o primeiro filhos do elemento
            console.log($main.firstChild);

        // lastChild - Retorna apenas o último filhos do elemento
            console.log($main.lastChild);

        // nextSibling - Retorna o próximo irmão do elemento
            console.log($main.nextSibling);

        // previousSibling - Retorna o irmão anterior do elemento
            console.log($main.previousSibling);

        // nodeType - Retorna uma numeração referente ao tipo do elemento em questão
            console.log($main.firstChild.nodeType);
            // Alguns números: 
            // Documet = 9
            // Element(tags html) = 1
            // Text = 3
            // Comments = 8
            // Document Fragment = 11
            
        // nodeValue - Retorna o conteúdo textual dos elementos Text e Comment
            console.log($main.childNodes.nodeValue);
            console.log($main.firstChild.nextSibling.nodeValue);
    
        // nodeNome - Retorna o nome do nó, se for uma tag é o nome da tag, se for um texto é #texto
            console.log($main.childNodes.nodeValue); //#text
            console.log($main.firstChild.nextSibling.nodeValue); //div
            
    // PROPRIEDADES que trazem apenas os nós que são elementos do DOM
        // children - Propriedade não padronizada pela W3C, mas que é muito útil, pois filtra o conteúdo e traz somente os n[os que são elementos html, trazendo uma html collection

        // firstElementChild - Primeiro filho
        // lastElementChild - Último filho
        // nextElementSibling - Próximo irmão
        // prevElementSibling - Irmão Anterior
        // childElementCount - Traz a quantidade de filhos do elemento, funciona como o children.length

    // MÉTODOS
        // .hasAttribute(name) - passa um nome como parâmetro, para verificar se aquele elemento tem o atributo específico. Atributos podem ser classes, datas, hrefs, ids e etc...
        $main.hasAttribute('class'); // true | false
        
        // .hasAttributes(name) - verifica se o elemento tem qualquer atributo
        $main.firstChild.hasAttributes(); // true | false
        
        // .appendChild(child) - adiciona um filho no final de algum elemento. Se o elemento já existir ele é movido de lugar.
        $main.appendChild($main.lastChild);
        
        // .insertBefore(node, beforeWhom) - insere um elemento antes de algum elemento. que você deve passar também
        $main.insertBefore($main.lastChild, $main.firstChild); //Dentro do $main ele vai pegar o lastChild e inserir antes do firstChild
        
        // .cloneNode(boolean) - clona um elemento, recebe um parâmetro onde você opta por clonar o conteúdo ou não.
        var $cloneFirstChild = $main.firstChild.cloneNome(true); //clona
        $main.appendChild($cloneFirstChild); //insere o clone na página
        
        // .hasChildNodes() - Verifica se o elemento tem um nó filho.
        $main.firstChild.hasChildNodes();
        
        // .removeChild(child) - Remove um filho, passando por parâmetro qual o filho deve ser removido.
        $main.removeChild($main.firstChild);
        
        // .replaceChild(new, old) - Vai trocar um elemento por um novo, passando por parâmetro quem é o antigo e quem é o novo
        $main.replaceChild($newFirstChild, $main.firstChild);
        
        // document.createTextNode(text) - Vai criar um nó de texto
        var $newTextNode = document.createTextNode('Opa!');
        $main.appendChild($newTextNode);
        
        // document.createElement(tagName) - Passando uma tag cria uma tag html para você
        var $newTextNode = document.createElement('p'); // cria uma tag <p></p>
        $main.appendChild($newTextNode); // insere ele em main
    
    // ATRIBUTOS
        // Para manipular atributos, basta usá-los como propriedade
            $main.id; //id
            $main.className; //classe
            $main.value; //value
        
        // Atributos são getters e setters
        $main.className = "lalala";

        // getAttribute(atributo) - Outra forma de pegar atributos passando como parametro uma string escrito o nome do atributo como é escrito em html. Retorna sempre string
        $main.getAttribute('class');
        
        // setAttribute(atributo, value) - cria um atributo novo ou modifica um existente, passando como parametro o atributo e o valor dele.
        $main.setAttribute('class', 'blue');