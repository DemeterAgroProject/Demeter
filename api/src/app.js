require('dotenv').config();

const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');

const flash = require('connect-flash');
const helmet = require('helmet');
// const csrf = require('csurf');

const session = require('express-session');
const sessionOptions = session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.CONNECTION_STRING_SERVER, ttl: 60 * 60, autoRemove: 'native'}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60,
        httpOnly: true
    }
});


import userRoutes from './routes/user';
import brandRoutes from './routes/brand';
import machineRoutes from './routes/machine';
import advertisementRoutes from './routes/advertisement';

class App {
    constructor() {
        this.app = express();
        this.connect_db();
        this.middlewares();
        this.routes();
    }

    connect_db() {
        mongoose.connect(process.env.CONNECTION_STRING_SERVER)
            .then(() => {
                this.app.emit('ready')
            })
            .catch(e => console.log(e));

        this.app.use(helmet());
        this.app.use(flash());
        // this.app.use(csrf());
        this.app.use(sessionOptions);
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        
        // Permitir requisicoes de http://localhost:5173
        this.app.use(cors({
            origin: 'http://localhost:5173'
        }));
    }

    routes() {
        this.app.use('/api/usuarios/', userRoutes);
        this.app.use('/api/marcas/', brandRoutes);
        this.app.use('/api/maquinas/', machineRoutes);
        this.app.use('/api/anuncios/', advertisementRoutes);
    }
}

export default new App().app;