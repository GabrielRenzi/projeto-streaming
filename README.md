# EduStream - Plataforma de Streaming de Vídeos Educacionais

## 1. Descrição do Projeto
O **EduStream** é uma aplicação web desenvolvida como parte do **Trabalho 02 da disciplina de Cloud Computing** (Sistemas de Informação - UNIDAVI). A plataforma simula um ambiente de streaming educacional, permitindo que usuários realizem o CRUD completo (Cadastro, Consulta, Atualização e Exclusão) de metadados de vídeos relacionados ao tema.

O foco principal do projeto é a implementação de uma arquitetura conteinerizada utilizando **Docker** e a orquestração de múltiplos serviços com **Docker Compose**, garantindo a persistência de dados e a comunicação isolada entre os containers.

## 2. Tecnologias Utilizadas
* **Node.js (v18):** Runtime principal para o servidor da aplicação.
* **Express.js:** Framework para roteamento e gerenciamento de requisições HTTP.
* **Mongoose:** Biblioteca para conexão com o banco de dados.
* **MongoDB:** Banco de dados NoSQL utilizado para armazenamento persistente.
* **HTML5/CSS3/JavaScript:** Interface funcional e estilizada.
* **Docker & Docker Compose:** Criação de imagens, orquestração e gerenciamento de volumes.

## 3. Arquitetura Utilizada
A solução utiliza uma topologia de dois containers principais conectados em uma rede bridge personalizada:

* **Serviço `app`:** Executa a aplicação Node.js. Ele depende do serviço de banco de dados para iniciar.
* **Serviço `db`:** Executa a imagem oficial do MongoDB em container separado.
* **Rede `streaming-net`:** Rede do tipo `bridge` que isola a comunicação entre os containers.
* **Persistência:** Utiliza um volume nomeado (`db-data`) para garantir que os vídeos cadastrados permaneçam salvos após a reinicialização dos containers.

## 4. Instruções de Execução

### Pré-requisitos
* Docker Desktop instalado e em execução.

### Comandos Necessários
1.  **Clonar o repositório:**
    ```bash
    git clone https://github.com/GabrielRenzi/projeto-streaming.git
    cd projeto-streaming
    ```

2.  **Iniciar a orquestração com Docker Compose:**
    Este comando irá construir a imagem, criar a rede/volumes e iniciar os containers.
    ```bash
    docker compose up -d
    ```

3.  **Acessar a aplicação:**
    Abra o navegador em: `http://localhost:3000`

4.  **Parar os serviços:**
    ```bash
    docker compose down
    ```

## 5. Configurações Técnicas
* **Portas Utilizadas:**
    * Aplicação: `3000`.
    * Banco de Dados: `27017`.
* **Variáveis de Ambiente:**
    * `MONGO_URI`: Define a string de conexão para o banco de dados dentro da rede Docker.
* **Instruções do Docker Compose:** O arquivo `docker-compose.yml` automatiza a criação do volume e da rede, conectando a aplicação ao banco de dados de forma transparente para o usuário.

## 6. Estrutura de Pastas Obrigatória
O projeto segue rigorosamente a estrutura definida no enunciado :
* `app/`: Código fonte (Node.js, HTML, CSS).
* `evidencias/`: Prints das etapas obrigatórias de execução.
* `Dockerfile`: Receita da imagem da aplicação.
* `docker-compose.yml`: Orquestrador dos serviços.
* `README.md`: Documentação técnica.

---
**Desenvolvido por:** Gabriel Renzi
**Disciplina:** Cloud Computing - Prof. Esp. Ademar Perfoll Junior
