/*
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello world!'));
const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port
${port}`));
*/

const express = require('express');
const app = express();
const port = process.env.PORT || 8085;
const mongoose = require('mongoose');
const cors = require('cors');
const items = require('./routes/api/items');

app.use('/api/items', items); 
app.use(cors({origin: true, credentials: true})); 
app.use(express.json({ extended: false})); 
app.get('/user/:id', (req, res) => {
   res.send(`user ${req.params.id}`)
})

const conn_str = 'mongodb+srv://webprogproject4:<password>@cluster0.pm6xxz2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.set('strictQuery', false);
mongoose.connect(conn_str).then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`)); 
    console.log('MongoDB Connection Succeeded...');
})
.catch(err => {
    console.log(`Error in DB Connection ${err}`); 
})
