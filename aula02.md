### && Operador "and"

```
// x igual a 3 e y igual a 4
x==3 && y==4 
```

### || Operador "or"
```
// (x igual a 3 ou y igual a 4)
x==3 || y==4    
```

### ! Operador "not"
```
// nega o que o segue
x !== 3 // false
x !== '3' // true
```

### + Operador Unário
```
// usado para converter em número variáveis que são NaN
+'3' // 3

// usado para concatenação, sempre que tiver um + somando uma string ele irá retornar uma concatenação
'cla' + 'ra' // 'clara'
'3' +  3 // '33'
```

### - Inversor de sinal
```
// também converte a string para número
-'3' -> -3
```
____

Case Sensitive, quer dizer que a linguagem diferencia as letras maiúsculas das minúsculas.
```
// Tipos de Comentários
// Comentário de Linha
/* Comentário
    de
    bloco */
```

### Literais
Valores que não mudam, que fazem parte da linguagem
* 12 (number)
* true (boolean)
* 'strings' (string)
* [arrays] (object)

### Identificadores
Nomes para variáveis e funções :

- Podem iniciar
    * "_" 
    * "$" 
    * "letras de 'a' a 'z'" 
    * "letras de 'A' a 'Z'"

- Podem conter
    - "_" 
    - "$"
    - "letras de 'a' a 'z'" 
    - "letras de 'A' a 'Z'"
    - "digitos de 0 a 9"

### Condicionais
```
// If

if(se isso for verdadeiro){
    Faça isso
}
if ( x > 2 && y < 10 ){
    return x + y;
}

// Else
    else{
        Se o if não acontecer, faça isso..
    }
    // Else If
        else if (próxima condição) {
            É a próxima condição se o if for falso antes de acontecer o else. Pode ser usado quantas vezes quiser. 
        }
```
### Return
Este comando só funciona dentro de funções e a função ignora tudo que vem após ele.
```
return
```
