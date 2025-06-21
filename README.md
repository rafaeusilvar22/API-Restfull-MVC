# 🧪 API RESTful de Produtos, Clientes e Pedidos – Node.js + Express + SQLite

Este projeto é uma **API RESTful** desenvolvida em **Node.js com Express**, seguindo o padrão arquitetural **MVC**. A API permite realizar operações **CRUD completas** sobre os domínios "Produtos", "Clientes" e "Pedidos", incluindo funcionalidades adicionais como contagem e buscas por nome ou ID. A persistência dos dados é feita com um **banco de dados SQLite local**.

---

## 📁 Estrutura do Projeto

```
/src
├── control/
│   ├── produto.controller.js      # Camada responsável por requisições HTTP de Produtos
│   ├── cliente.controller.js      # Camada responsável por requisições HTTP de Clientes
│   └── pedido.controller.js       # Camada responsável por requisições HTTP de Pedidos
├── model/
│   ├── domains/
│   │   ├── produto.model.js       # Entidade Produto (Model)
│   │   ├── cliente.model.js       # Entidade Cliente (Model)
│   │   └── pedido.model.js        # Entidade Pedido (Model)
│   ├── repositories/
│   │   ├── produto.repository.js  # Persistência de dados de Produtos (SQLite)
│   │   ├── cliente.repository.js  # Persistência de dados de Clientes (SQLite)
│   │   ├── pedido.repository.js   # Persistência de dados de Pedidos (SQLite)
│   │   └── database/
│   │       └── db.sqlite          # Arquivo do banco de dados SQLite
│   └── services/
│       ├── produto.service.js     # Regras de negócio de Produtos
│       ├── cliente.service.js     # Regras de negócio de Clientes
│       └── pedido.service.js      # Regras de negócio de Pedidos
├── routes.js                      # Define os endpoints e vincula ao controller
└── index.js                       # Ponto de entrada da aplicação
```

---

## 🚀 Como Executar

### 1. Instalar dependências

```bash
npm install
```

### 2. Criar banco de dados

Crie o banco SQLite (caso não exista). Você pode criar manualmente ou deixar o código criar ao rodar o `start`.

```bash
mkdir -p src/model/repositories/database
touch src/model/repositories/database/db.sqlite
```

> Certifique-se de que o caminho acima esteja correto no seu projeto.

### 3. Iniciar a API

```bash
npm start
```

Servidor iniciará em:  
📍 `http://localhost:3000`

---

## 📌 Endpoints Disponíveis

### Produtos

| Método | Endpoint                        | Descrição                                    |
|--------|----------------------------------|----------------------------------------------|
| GET    | `/v1/produto`                   | Lista todos os produtos                      |
| GET    | `/v1/produto/nome/:nome`        | Lista produtos por nome                      |
| GET    | `/v1/produto/:id`               | Busca produto por ID                         |
| POST   | `/v1/produto`                   | Cria ou atualiza produto                     |
| DELETE | `/v1/produto/:id`               | Remove produto por ID                        |
| GET    | `/v1/produto/contar`            | Retorna a quantidade total de produtos       |

### Clientes

| Método | Endpoint                        | Descrição                                    |
|--------|----------------------------------|----------------------------------------------|
| GET    | `/v1/cliente`                   | Lista todos os clientes                      |
| GET    | `/v1/cliente/nome/:nome`        | Lista clientes por nome                      |
| GET    | `/v1/cliente/:id`               | Busca cliente por ID                         |
| POST   | `/v1/cliente`                   | Cria ou atualiza cliente                     |
| DELETE | `/v1/cliente/:id`               | Remove cliente por ID                        |
| GET    | `/v1/cliente/contar`            | Retorna a quantidade total de clientes       |

### Pedidos

| Método | Endpoint                        | Descrição                                    |
|--------|----------------------------------|----------------------------------------------|
| GET    | `/v1/pedido`                    | Lista todos os pedidos                       |
| GET    | `/v1/pedido/:id`                | Busca pedido por ID                          |
| POST   | `/v1/pedido`                    | Cria ou atualiza pedido                      |
| DELETE | `/v1/pedido/:id`                | Remove pedido por ID                         |
| GET    | `/v1/pedido/contar`             | Retorna a quantidade total de pedidos        |

---

## 📦 Exemplo de JSON para POST

### Produto

```json
{
  "id": 1,
  "nome": "Produto Exemplo",
  "preco": 49.99
}
```

### Cliente

```json
{
  "id": 1,
  "nome": "Cliente Exemplo",
  "email": "cliente@exemplo.com"
}
```

### Pedido

```json
{
  "id": 1,
  "clienteId": 1,
  "produtos": [
    { "produtoId": 1, "quantidade": 2 },
    { "produtoId": 2, "quantidade": 1 }
  ],
  "total": 149.97
}
```

---

## 🧱 Arquitetura MVC

- **Model**: Define a estrutura de dados (Produto, Cliente, Pedido).
- **Repository**: Acesso ao banco SQLite.
- **Service**: Aplica lógica de negócio.
- **Controller**: Recebe as requisições HTTP e trata as respostas.

---

## 🔄 Fluxo Interno

```
[Rotas] → [Controller] → [Service] → [Repository] → [Banco SQLite]
          ↑ utiliza Produto, Cliente e Pedido Models
```

---

## 📊 Diagrama de Classes e Arquitetura

- [✔️] Diagrama de Classes UML
- [✔️] Diagrama C4 (Contexto, Containers e Componentes)
- Disponível em `/docs` ou na pasta fornecida no repositório.

---

## 🧑‍💻 Tecnologias

- Node.js
- Express
- SQLite3
- JavaScript
- Arquitetura MVC
- Clean Code

---

## 📝 Autor

- Rafael Silva  
- Projeto acadêmico para prática de arquitetura MVC, API RESTful e documentação UML.

---

## 📃 Licença

Este projeto é de uso acadêmico e livre para fins educacionais.
