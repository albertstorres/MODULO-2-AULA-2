const express = require('express');
const app = express();

app.get('/home', (resposta, requisicao) => {
    resposta.send('Olá Mundo!');
});

app.listen(3000);