require('dotenv').config();

const CONFIGS = {
  SERVER_PORT: process.env.SERVER_PORT,
  URL_BASE: process.env.URL_BASE,
};

module.exports = CONFIGS;
