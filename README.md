# API Lojinha com Node.js – Padrão MVC

## 🎯 Tema da Pesquisa
Padrões de projeto ajudam a estruturar o desenvolvimento de software de forma organizada, escalável e reutilizável. No desenvolvimento de APIs REST com Node.js, a adoção de padrões como o MVC é fundamental para separar responsabilidades e tornar o sistema mais modular.

---

## 🧩 Padrões de Projeto Comuns em APIs REST com Node.js

- **MVC (Model-View-Controller)**: separa responsabilidades em modelos de dados, regras de negócio e controle de requisições.
- **Repository Pattern**: centraliza o acesso a dados, favorecendo testabilidade.
- **Service Layer Pattern**: agrupa regras de negócio em uma camada intermediária.
- **Singleton**: garante que uma única instância de um objeto seja usada.

---

## 📌 Padrão Utilizado: MVC

### ✅ Vantagens:
- Organização clara do projeto.
- Melhoria na manutenção e teste do código.
- Isolamento entre as camadas de dados, lógica de negócios e rotas.

### 🔧 Aplicado na API:
- **Modelos (`models/`)**: acessam o banco de dados.
- **Controladores (`controllers/`)**: controlam a lógica das rotas.
- **Rotas (`routes/`)**: definem os endpoints da API.
- **Banco de Dados**: MySQL via Knex.js.

---

## 🚀 Funcionalidades da API

- Endpoints para `produto` e `cliente`.
- Métodos: `GET`, `POST`, `PUT`, `DELETE`.


