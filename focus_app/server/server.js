const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const next = require('next');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const conn_str = 'mongodb+srv://webprogproject4:webprogproj4@cluster0.pm6xxz2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(conn_str).then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
    console.log('MongoDB connected');
}).catch((error) => {
    console.error('MongoDB connection error:', error);
});

nextApp.prepare().then(() => {
    app.get('*', (req, res) => {
        return handle(req, res);
    });
}).catch((error) => {
    console.error('Error starting Next.js server:', error);
    process.exit(1);
});

const notesRouter = require('../routes/api/notes');
const c = require('config');
app.use('/api/notes', notesRouter);

module.exports = app;
