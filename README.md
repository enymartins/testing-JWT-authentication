# Sobre o Projeto

# exams-api
API REST que gerencia um sistema de cadastro de provas.

## Tecnologias utilizadas:
| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `sequelize` | Dependência que interage com o MySQL para a conexão da database e criação das tabelas|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm` | Gerenciador de pacotes|
| `MySQL` | Banco de dado relacional|
| `Sequel Ace` | Interface gráfica para verificar se os dados foram persistidos|
 `Insomnia ou Postman` | Interface gráfica para realizar os testes|
 
 ## Métodos
Requisições para a API devem seguir os padrões:
| Método | Descrição |
|---|---|
| `GET` | Retorna informações de um ou mais registros. |
| `POST` | Utilizado para criar um novo registro. |
| `PUT` | Atualiza dados de um registro. |
| `DELETE` | Remove um registro do sistema. |

 
 ### EndPoints 
 Método GET
- [x]  **"/exams/list"** Deverá retornar todas as provas cadastradas no banco de dados.
- [x]  **"/questions/:exam_id/list"** Deverá retornar todas as questões cadastradas de uma prova específica.
- [x]  **"/alternatives/:question_id/list"** Deverá retornar todas as alternativas cadastradas de uma questão específica.
<br>

Método POST
- [x]  "**exams/create**" Deverá cadastrar/criar uma prova
- [x]  **"/questions/:exam_id/create"** Deverá cadastrar uma nova questão em uma prova existente no banco de dados.
- [x]  **"/alternatives/:question_id/create"** Deverá cadastrar uma nova alternativa em uma questão existente no banco de dados.
 <br>

Método DELETE
- [x]  **"/exams/:id"** Deverá deletar prova por id específico e retornar mensagem amigável.
- [x]  **"/questions/:id"** Deverá deletar questão por id específico e retornar mensagem amigável.
- [x]  **"/alternatives/:id"** Deverá deletar alternativa por id específico e retornar mensagem amigável.
<br>

Método PUT
- [x]  **"/exams/:id"** Deverá alterar informação de uma prova por id específico e retornar mensagem afirmativa de alteração.
- [x]  **"/questions/:id"** Deverá alterar informação de uma questão por id específico e retornar mensagem afirmativa de alteração.
- [x]  **"/alternatives/:id"** Deverá alterar informação de uma alternativa por id específico e retornar mensagem afirmativa de alteração.
<br>


```jsx
