# Define a imagem base do Node.js
FROM node:18

# Define a pasta de trabalho dentro do container
WORKDIR /usr/src/app

# Copia o arquivo de dependências para dentro do container
COPY app/package*.json ./

# Instala as dependências da aplicação
RUN npm install

# Copia todo o código da pasta 'app' para dentro do container
COPY app/ .

# Informa qual porta a aplicação utiliza (conforme o index.js)
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "index.js"]