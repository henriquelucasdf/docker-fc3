# Desafios Docker - Full Cycle 3.0

### Desafio 1: Imagem Golang
- Upload feito no hub com o nome [henriquelucasdf/golang-hello](https://hub.docker.com/repository/docker/henriquelucasdf/golang-hello)

### Desafio 2: Nginx com Node.js
- Um banco mysql será criado a partir do Dockefile e de um arquivo setup.sql, criando a Database e a Tabela "people", se não existirem.  
- O Nginx foi configurado como proxy reverso da aplicação node (porta 8080). Ao acessar localhost:8080, o nome "Henrique Lucas" será inserido na tabela "people" do banco de dados e, em seguida, uma consulta do conteúdo dessa tabela será feita, retornando o primeiro nome inserido no app.

### Observações:
- Como não conheço nem node nem javascript, o app em node ficou bem simples e diversas melhorias poderiam ser feitas (por exemplo, fechar a conexão com o BD). Como o foco é no docker, preferi manter a app o mais simples o possível.
- Quando executarem o docker-compose pela primeira vez, o banco sql será criado do zero, demorando cerca de 30s para o app node.js conseguir a conexão. 