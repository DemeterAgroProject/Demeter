import app from './src/app';

const port = process.env.APP_PORT;

app.on('ready', () => {
    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
        console.log(`http://localhost:${port}`);
    });
});