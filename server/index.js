const express = require('express');
const cors = require('cors');
const CONFIGS = require('./configs/')
const app = express();


app.use(cors());
app.use(express.json());

const userRoutes = require('./routes/user');
const letterRoutes = require('./routes/letter');

app.use('/api/correio-elegante/user', userRoutes);
app.use('/api/correio-elegante/letters', letterRoutes);

const swaggerSetup = require('./swagger');
swaggerSetup(app);


app.listen(CONFIGS.SERVER_PORT, () => {
  console.log('Servidor iniciado na porta 3000');
});

