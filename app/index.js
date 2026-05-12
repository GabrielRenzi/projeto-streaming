const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

// Conexão com o MongoDB (usando o nome do serviço 'db' que definiremos no Docker)
const mongoUri = process.env.MONGO_URI || 'mongodb://db:27017/streamingDB';
mongoose.connect(mongoUri)
  .then(() => console.log('Conectado ao MongoDB com sucesso!'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Modelo de Dados (Schema)
const Video = mongoose.model('Video', {
  titulo: String,
  url: String,
  descricao: String
});

// Rota para cadastrar vídeo
app.post('/videos', async (req, res) => {
  const { titulo, url, descricao } = req.body;
  const novoVideo = new Video({ titulo, url, descricao });
  await novoVideo.save();
  res.redirect('/');
});

// Rota para listar vídeos (Consulta)
app.get('/api/videos', async (req, res) => {
  const videos = await Video.find();
  res.json(videos);
});

// Servir a interface (HTML)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});