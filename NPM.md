#NPM

Node Package Manager

__Glossary: Dependencies, Dependencies, Packages, Modules__

- [X] Verificar se temos o npm instalado `npm -v`
- [X] Criar nosso próprio pacote
- [X] O que é o arquivo package.json
- [X] Utilizar módulos de terceiros
- [X] O que é o diretório node_modules
- [X] O que é o arquivo package-lock.json
- [X] Criar scripts para rodar com o npm
- [X] Instalar pacote de maneira global
- [X] Desinstalar pacotes
- [X] Mudar versão de pacotes

- Para criar um pacote usamos `npm init` ou `npm init -y`, sendo que o ultimo responde todas as perguntas com yes.

- O packge.json é um arquivo em formato JSON onde tem as expecificações tecnicas do projeto.

- Para instalar módulos de terceiros usamos o `npm install` e o nome do módulo.

- `npm install nome_pacote -D` é usado para instalar um modulo como dependencia de desenvolvimento.

- `npm update` mapeia e atualiza as dependencias do projeto.

- O node_modules é um diretorio que tem as dependencias dos módulos de terceiros. Ela não é enviada para o repositorio, onde usamos o arquivo.gitignore.

- O package-lock.json serve para fazer um mapeamento de todas as dependencias do projeto, assim não deletamos esse arquivo.

- Criamos scripts no package.json na parte de scripts. Assim usamos o comando `npm run nome_do_script`.

- Podemos instalar módulos em nossas maquinas como um todo, utilizando o comando `npm install nome_do_pacote -g`. Utilizamos o comando `npm root -g` para saber onde esses pacotes foram instalados.

- Para desistalar um pacote usamos o comando `npm unistall nome_do_pacote -g`.

- Para saber o que significa os números das versões de algum pacote, temos as seguintes informações:

major.minor.path -> Lá no package.jon nas dependencias temos como Ex: ("cfonts": "^3.1.1").

^ - se esse sinal tiver na frente, significa que ele vai atualizar os dois ultimos numeros.

~ - se esse sinal tiver na frente, significa que ele vai atualizar só o patch.

* - somente esse sinal ele vai mudar todas as versões.

major quer dizer a versão do projeto.

minor quer dizer que vai ter algumas alterações mas não tem perigo quebrar o projeto.

patch quer dizer que ele está resolvendo algum bug no pacote.

- Para mudar a versão dos pacote instalados do nosso projeto usamos o comando `npm install @numero_da_versão`. 

- O comando `npm outdated` mostra as informações dos pacotes instalados.

- O comando `npm upgrate` atualiza todos os módulos do projeto.

- O comando `npm install nome_do_pacote@latest` pega a ultima versão do módulo.