
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

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
    // Aqui você pode adicionar lógica para enviar o formulário via AJAX, por exemplo.
});

// Scroll suave para links de navegação
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animações ao rolar a página
window.addEventListener('scroll', function() {
    document.querySelectorAll('section').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.style.animation = 'fadeIn 2s';
        }
    });
});
