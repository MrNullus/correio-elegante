const table_letter = `
    CREATE TABLE IF NOT EXISTS letter (
      letter_id int PRIMARY KEY AUTO_INCREMENT,
      message_id int,
      FOREIGN KEY (message_id) REFERENCES message (message_id),
      user_id int,
      FOREIGN KEY (user_id) REFERENCES user (user_id),
      forma_carta_id int,
      -- FOREIGN KEY (forma_carta_id) REFERENCES forma_carta (forma_carta_id),
      cor_carta_id int,
      -- FOREIGN KEY (cor_carta_id) REFERENCES cor_carta (cor_carta_id),

      valor decimal(10, 2) NOT NULL,
      forma_pagamento varchar(50) DEFAULT NULL
      status varchar(100) NOT NULL DEFAULT 'ativo',
      created_at datetime NOT NULL,
    );
`;

module.exports = table_letter;
