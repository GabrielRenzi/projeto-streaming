# EduStream - Plataforma de Streaming de Vídeos Educacionais

## 1. Descrição do Projeto
O **EduStream** é uma aplicação web desenvolvida como parte do **Trabalho 02 da disciplina de Cloud Computing** (Sistemas de Informação - UNIDAVI)[cite: 143]. A plataforma simula um ambiente de streaming educacional, permitindo que usuários realizem o CRUD completo (Cadastro, Consulta, Atualização e Exclusão) de metadados de vídeos relacionados ao tema[cite: 158, 159].

O foco principal do projeto é a implementação de uma arquitetura conteinerizada utilizando **Docker** e a orquestração de múltiplos serviços com **Docker Compose**, garantindo a persistência de dados e a comunicação isolada entre os containers[cite: 145, 146].

## 2. Tecnologias Utilizadas
* **Node.js (v18):** Runtime principal para o servidor da aplicação[cite: 161].
* **Express.js:** Framework para roteamento e gerenciamento de requisições HTTP.
* **Mongoose:** Biblioteca para conexão com o banco de dados.
* **MongoDB:** Banco de dados NoSQL utilizado para armazenamento persistente[cite: 193].
* **HTML5/CSS3/JavaScript:** Interface funcional e estilizada[cite: 156, 167].
* **Docker & Docker Compose:** Criação de imagens, orquestração e gerenciamento de volumes [cite: 149-154].

## 3. Arquitetura Utilizada
A solução utiliza uma topologia de dois containers principais conectados em uma rede bridge personalizada[cite: 151, 183]:

* **Serviço `app`:** Executa a aplicação Node.js. Ele depende do serviço de banco de dados para iniciar[cite: 149].
* **Serviço `db`:** Executa a imagem oficial do MongoDB em container separado[cite: 150, 188].
* **Rede `streaming-net`:** Rede do tipo `bridge` que isola a comunicação entre os containers[cite: 183].
* **Persistência:** Utiliza um volume nomeado (`db-data`) para garantir que os vídeos cadastrados permaneçam salvos após a reinicialização dos containers[cite: 152, 195, 196].

## 4. Instruções de Execução

### Pré-requisitos
* Docker Desktop instalado e em execução[cite: 180].

### Comandos Necessários
1.  **Clonar o repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO_GITHUB>
    cd projeto-streaming
    ```

2.  **Iniciar a orquestração com Docker Compose:**
    Este comando irá construir a imagem, criar a rede/volumes e iniciar os containers[cite: 181, 182].
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
    * Aplicação: `3000`[cite: 214].
    * Banco de Dados: `27017`[cite: 214].
* **Variáveis de Ambiente:**
    * `MONGO_URI`: Define a string de conexão para o banco de dados dentro da rede Docker[cite: 185, 215].
* **Instruções do Docker Compose:** O arquivo `docker-compose.yml` automatiza a criação do volume e da rede, conectando a aplicação ao banco de dados de forma transparente para o usuário[cite: 186, 216].

## 6. Estrutura de Pastas Obrigatória
O projeto segue rigorosamente a estrutura definida no enunciado [cite: 169-177]:
* `app/`: Código fonte (Node.js, HTML, CSS).
* `evidencias/`: Prints das etapas obrigatórias de execução.
* `Dockerfile`: Receita da imagem da aplicação.
* `docker-compose.yml`: Orquestrador dos serviços.
* `README.md`: Documentação técnica.

---
**Desenvolvido por:** Gabriel
**Disciplina:** Cloud Computing - Prof. Esp. Ademar Perfoll Junior [cite: 142]