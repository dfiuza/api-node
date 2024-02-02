1. Iniciando o Projeto
1.1 Instale o Node.js
Certifique-se de ter o Node.js instalado em seu sistema. Você pode baixá-lo em nodejs.org.

1.2 Inicie um novo projeto Node.js
Abra o terminal e execute o seguinte comando para iniciar um novo projeto Node.js:

npm init -y

2. Instalando Dependências
2.1 Instale o Express
Execute o seguinte comando para instalar o Express como dependência do seu projeto:

npm install express

3. Criando a API
Crie arquivos chamado app.js, router.js, server.js, para ser o ponto de entrada da sua aplicação.


3.2 Instale dependencias necessarias
sucrase, nodemon e multer

sucrase
Ele vai liberar o import e o export no express, não precisa criar constant(varialvel de ambiente)
Rodar servidor com sucrase: 

yarn sucrase-node src/server.js

Nodemon
Essa dependencia faz com que fique fazendo reload nas paginas ao salvar.
Crie um arquivo nodemon.json e configure o apontamento para o sucrase.
Rodar servidor com sucrese instalado e apontado no nodemon.json

yarn dev

multer
Trabalha com multipartdata






