const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();
app.use(express.json({ extended: false }));

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/profile', require('./routes/profile'));

app.get('/', (req, res) => res.json({ msg: 'Welcome to the LoginRegister API...' }));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));