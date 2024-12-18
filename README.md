# Desafio Front-End Kognit

## Como rodar o projeto.

O projeto foi criado usando o gerenciador de pacotes _yarn_. Para rodar o projeto, em modo de desenvolvimento execute:
```bash
# Instalar as dependências do projeto
yarn

# Executar o projeto em modo de desenvolvimento
yarn start
```

Caso queira buildar e rodar o projeto em modo de produção.
```bash
# Caso não tenha instalado as dependências
yarn

# Builda o projeto
yarn build

# Executa o projeto a partir da build, em modo de produção.
yarn start
```

## Telas

### Tela de Login

Na tela de login, não foi implementado tela de cadastro nem tela de esqueci minha senha.
Nessa tela foi implementado:
- Loading ao clicar no botão _login_.
- Bloqueio dos botões ao logar. Dessa forma impede o usuário de fazer várias requisições enquanto carrega.

### Tela de Dashboard

Nessa tela foi implementado apenas o botão das notificações.
Esse botão ao ser clicado faz a requição para a api solicitada, e armazena o conteúdo da resposta em um estado. Durante o processo em que está realizando a requisição um spinner é apresentado e bloqueia o botão para que não haja excesso de requisições.
Assim que puxar os conteúdos abre um modal que irá apresentar as notificações.
O Modal contém um botão para limpar as notificações, que apenas limpa o estado e cada notificação desse modal possui um botão que ao ser clicado, remove a notificação selecionada.
