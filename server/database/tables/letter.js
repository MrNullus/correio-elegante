const table_message = `
    CREATE TABLE IF NOT EXISTS message (
      message_id int PRIMARY KEY AUTO_INCREMENT,
      user_id int,
      FOREIGN KEY (user_id) REFERENCES user (user_id),

      content varchar(255) NOT NULL,
      status varchar(100) NOT NULL DEFAULT 'ativo',
      created_at datetime NOT NULL,
      nome_destinatario varchar(90) DEFAULT NULL,
      serie_escolhida int(11) DEFAULT NULL,
      curso_escolhido varchar(255) DEFAULT NULL,
      periodo varchar(50) DEFAULT NULL,
      dica varchar(255) DEFAULT NULL,
      cor_bilhete varchar(7) DEFAULT NULL,
      forma_cartinha varchar(50) DEFAULT NULL,
      forma_pagamento varchar(50) DEFAULT NULL
    );
`;

module.exports = table_message;
