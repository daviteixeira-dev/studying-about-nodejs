# HyperText Transfer Protocol

Protocolo de Transferência de HyperTexto

## Visão Geral

- Permite trocar de informações e dados na internet;

- Uma troca de mensagens;

- HTML, CSS, Scripts, Imagens, Vídeo;

- Uma chamada para cada um desses recursos.

### Visualizando a comunicação

No protocolo HTTP tudo funciona com pedidos e respostas, que são chamados em inglês como Request e Response, mandando mensagens nos dois casos.

No caso das mensagens de pedidos, você precisa de um verbo HTTP, que chamamos de método, que vai definiir o tipo de pedido que está sendo feito, por exemplo o método GET, vindo do inglês para "pegar", pega um recurso, como um URL para algum local da internet, ou o método POST, que serve para criar um recurso.

Depois do pedido, a resposta traz um Status Code do servidor, que é um código sobre o estado do seu pedido, entre esses códigos, estão 200, onde tudo deu certo e sua página foi enviada, 404, onde o servidor não conseguiu encontrar o pedido, 301, que é um redirecionamento para outro local, entre outros além do Status Code, o servidor pode mandar um header e um body.

Existem coisas que podem estar tanto na Request quanto na Response, que são o header e o body, os Headers são campos informativos, e o body contém conteúdo, podendo ser em forma de HTML ou JSON.

### Conceitos

O HTTP, que foi feito pra ser um protocolo simples e fácil de entender pra qualquer pessoa. Ele foi baseado na estrutura de cliente/servidor, ou seja, sempre vão ter uma requisição e uma resposta acontecendo, como um exemplo, voce pode pensar na forma de comprar um lanche, você faz um pedido, especificando a comida que você quer, e o estabelecimento te "responde" com a comida.

O HTTP foi criado para também ser stateless, traduzindo, não guardar estado, ou seja, ele não vai guardar nenhuma informação, e não existe nenhuma relação entre as conexões. Outra característica do protocolo é ser extensível, podendo fazer diversas trocas de informação entre o cliente e o servidor, conforme a necessidade.