const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const correioRoutes = require('./routes/correio');
const userRoutes = require('./routes/user');

app.use('/api/correio-elegante', correioRoutes);
app.use('/api/correio-elegante/user', userRoutes);

const swaggerSetup = require('./swagger');
swaggerSetup(app);

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
