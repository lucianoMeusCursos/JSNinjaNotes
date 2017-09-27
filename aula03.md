### Tipos Primitivos
```
number // Números
string // Letras e Texto
boolean // true ou false
null e undefined // null é quando não tem valor e undefined é ausencia de valor
```

### Tipos de Objetos
Todos os outros que não são primitivos.  
Um objeto é um conjunto de propriedades
```
var pessoa = {
    nome: 'Clara',
    sobrenome: 'Battesini',
    idade: 20,
    peso: 60,
    altura: 1.55,
}
```

Acessando objetos
```
pessoa.idade // 20
pessoa.nome // 'Clara'
pessoa.altura // 1.55
```

Adicionando propriedades
```
pessoa.cor = 'caucasiano';
```

### Funções anônimas (sem nome)
Isso só é possível quando uma função está atribuida a uma variável.  
A finalidade de uma função anônima é exatamente a de permitir passá-la como se fosse um objeto qualquer, que você pode atribuir a uma variável, independentemente de haver um nome para a função.     
Armazenar uma variável em uma função que pode ter parâmetros ou não. Ela pode retornar um valor e torna-lo imutável, ou então apenas realizar comandos sem retorno.
```
var myvar = function(){ return 'variável myvar'; };
```

### Método
Quando você usa funções como propriedades dentro de um objeto
```
pessoa.aniversario = function() {
    pessoa.idade++;
};
pessoa.nomeCompleto = function() {
    return pessoa.nome + " " + pessoa.sobrenome;
};
```
Chamando métodos
```
pessoa.nomeCompleto();
```
