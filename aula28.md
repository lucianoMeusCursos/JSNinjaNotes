### AJAX - Asynchronous Javascript and XML
Javascript Assíncrono, você não deixa uma operação que demanda muitos recursos bloquear a thread principal, efetuando ela em uma thread secundária, utilizando eventos, temporizadores e etc.

XML - a ideia do ajax iniciou com o XML

Ajax serve para fazer requisições na mesma url/origem, trazendo informações sem precisar recarregar a tela. A resposta pode ser qualquer coisa, html, json, texto e etc.
    
### Fazendo requisições

```
window.XMLHttpRequest() // Objeto do window que precisa ser instanciado para fazer a requisição.
    var ajax = new XMLHttpRequest(); // Como é um objeto global não é preciso passar o window na chamada
    ajax.open(protocol, url); // Abrir uma conexão
    // No argumento protocol deve se incluir: GET, POST, Qualquer protocolo HTTP Válido
    ajax.send(data); // Enviar os dados se tiverem dados
```

### Manipulando respostas
```
ajax.open('GET', '/data/data.xlm');
ajax.open('GET', '/data/data.json');
ajax.send();
```

### Read State Change - evento que vai ver quando o estado da requisição mudou e responde.
```
ajax.addEventListener('readstatechange', function() {
    console.log("Terminou requisição");
}, false);
```
    
### ReadState - verifica em que estado a requisição está.
```
ajax.addEventListener('readstatechange', function() {
    console.log("Terminou requisição", ajax.readyState);
}, false);

```
- Estados ( `readyState` ): 
    - 0: Não enviado - geralmente acontece quando o open não é chamado
    - 1: Conexão aberta - abriu a conexão
    - 2: Headers recebidos - A primeira coisa a receber em uma requisição são os headers, que contém algumas informações gerais.
    - 3: Loading - carregando o corpo do request
    - 4: Concluído - requisição concluída com sucesso
        
### HTTP STATUS

```
ajax.addEventListener('readstatechange', function() {
    console.log("Terminou requisição", ajax.readyState, ajax.status);
}, false);

```
- Alguns Status ( `readstatechange` ): 
    - 200: OK - Sucesso
    - 404: File not found
    - 502: Erro no servidor
    

`responseText` - traz a resposta da requisição em formato string, se for um JSON vc pode acessar as propriedades através desse método e ele retornará o valor

`responseXML` - tenta trazer a resposta da requisição em formato XML, se não for XML é necessário forçar 
```
console.log('Carregando...');
ajax.addEventListener('readstatechange', function() {
    if (isRequestOk()) {
        var data = JSON.parse(ajax.responseText); // transforma de string para objeto
        var dataxml = JSON.parse(ajax.responseXML); // transforma de string para objeto
        console.log('Requisição OK', ajax.data.message);
    }
}, false);

function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
}
```


### Tratamento de erros
Para não deixar os erros passarem para o usuário, utilizamos o try/catch, que vai tentar fazer alguma coisa pra resolver o problema. Isso é útil pois os erros podem parar a renderização da página.
```
console.log('Carregando...');
var response = '';
ajax.addEventListener('readstatechange', function() {
    if (isRequestOk()) {
        // tenta parsear pra JSON, mas se for XML vai dar erro
        try {
            response = JSON.parse(ajax.responseText);
        } catch (e) {
            // se der erro passa o response direto, sem parsear
            response = ajax.responseText;
        }
        console.log(response); // manipula o response
    }
}, false);
```