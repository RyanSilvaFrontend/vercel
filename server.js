const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsing do body das requisições
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Servir o arquivo HTML principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Configuração do nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'contateryansilva@gmail.com',
        pass: 'Beto2102'
    }
});

// Rota para o formulário de contato
app.post('/send', (req, res) => {
    const { name, email, message } = req.body;
    console.log(req.body);  // Adicionado para depuração

    const mailOptions = {
        from: email,
        to: 'contateryansilva@gmail.com',
        subject: `Nova mensagem de ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);  // Adicionado para depuração
            return res.status(500).send(error.toString());
        }
        console.log('Email enviado: ' + info.response);  // Adicionado para depuração
        res.status(200).send('Mensagem enviada com sucesso');
    });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
