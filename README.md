# EduStream - Plataforma de Vídeos Educacionais

## Descrição
Aplicação multicontainer desenvolvida para o Trabalho 02 de Cloud Computing (Unidavi). A plataforma permite o cadastro e consulta de links de vídeos educacionais.

## Tecnologias Utilizadas
- **Node.js**: Servidor da aplicação.
- **MongoDB**: Banco de dados NoSQL.
- **Docker & Docker Compose**: Conteinerização e orquestração.

## Arquitetura
A solução utiliza dois containers (App e DB) conectados através de uma rede bridge personalizada (`streaming-net`). A persistência dos dados do banco é garantida por um volume Docker (`db-data`).

## Como Executar
1. Certifique-se de ter o Docker e Docker Compose instalados.
2. Clone este repositório.
3. Na raiz do projeto, execute:
   ```bash
   docker compose up -d