const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const messageRoutes = require('./routes/message');
const userRoutes = require('./routes/user');
const mailRoutes = require('./routes/mail');

app.use('/api/correio-elegante/message', messageRoutes);
app.use('/api/correio-elegante/user', userRoutes);
app.use('/api/correio-elegante/mails', mailRoutes);

const swaggerSetup = require('./swagger');
swaggerSetup(app);

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
