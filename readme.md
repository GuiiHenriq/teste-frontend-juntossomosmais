
# Teste Juntos Somos Mais :rocket:
Projeto desenvolvido para o teste técnico da Juntos Somos Mais. Foi desenvolvido um projeto em Vue e o back-end em Node, onde é consumido uma API e renderizado uma lista de usuários.


## Observações 🤖

> Devido alguns filtros solicitados, tomei a decisão de criar uma API em NodeJS com Express, para assim facilitar a integração desses filtros. O filtro do tipo de usuário (Normal, Trabalhoso e etc.) seria bem complexo de trabalhar exclusivamente no front-end, sendo assim, optei por criar uma REST API.
 
> Estou estudando CSS-in-JS, então implementei o Styled Components, tenho total noção que a forma que fiz não é com as melhores práticas de uso, porém, tomei a iniciativa de usar em algumas features e assim aprender mais sobre essa lib e esse conceito de CSS-in-JS.

> O back-end está consumindo e renderizando em tela o build do front-end.


## Rodar Projeto Completo :computer:

> :grey_exclamation: **Versão do Node Recomendado: 14xx** :grey_exclamation:
> 
  :one: Faça o clone do projeto:
> git clone https://github.com/GuiiHenriq/teste-frontend-juntossomosmais

 :two: Dentro da pasta "**back-end**" instale as dependências do projeto:
> npm install / yarn install

 :three: Rode o projeto:
> npm start / yarn start (http://localhost:3000/)

## Rodar Front/Back Separado :computer:
> :grey_exclamation: **Versão do Node Recomendado: 14xx** :grey_exclamation:
> 
  :one: Faça o clone do projeto:
> git clone https://github.com/GuiiHenriq/teste-frontend-juntossomosmais

 :two: Dentro da pasta "**back-end**" instale as dependências da API:
> npm install / yarn install

 :three: Dentro da pasta "**front-end**" instale as dependências do projeto:
> npm install / yarn install

 :four: Dentro da pasta "**back-end**", rode o back-end:
> npm start / yarn start (http://localhost:3000/api/)

 :five: Dentro da pasta "**front-end**", rode o projeto:
> npm run serve / yarn serve (http://localhost:8080/)

