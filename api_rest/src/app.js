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
    store: MongoStore.create({ mongoUrl: process.env.CONNECTION_STRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 1,
        httpOnly: true
    }
});


import userRoutes from './routes/user';


class App {
    constructor() {
        this.app = express();
        this.connect_db();
        this.middlewares();
        this.routes();
    }

    connect_db() {
        mongoose.connect(process.env.CONNECTION_STRING)
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
    }
}

export default new App().app;