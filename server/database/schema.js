const db = require('../configs/database');
const Database = require('../utils/Database');

const table_user = require('./tables/user');
const table_message = require('./tables/message');

const procedure_get_message = require('./procedures/GetMessage');
const procedure_update_message_status = require('./procedures/UpdateMessageStatus');


let query = Database.prepareQuery([ 
  table_user,
  table_message,
  procedure_update_message_status, 
  procedure_get_message 
]);

console.log('====================================');
console.log(query);
console.log('====================================');

db.getConnection((err, connection) => {
  if (err) {
    console.error('Erro ao obter conexão do pool:', err);
  }

  connection.query(query, (err, results) => {
    connection.release(); 
    
    if (err) {
      console.log('ERROR: ', err);
       return;
    }

    console.log('FOI: ', results);
  });
});
