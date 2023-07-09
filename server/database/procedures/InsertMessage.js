 
const procedure_update_message_status = `
  DELIMITER $$

  CREATE PROCEDURE InsertMessage(
    IN p_user_id INT,
    IN p_content VARCHAR(255),
    IN p_created_at DATETIME,
    IN p_nome_destinatario VARCHAR(90),
    IN p_serie_escolhida INT,
    IN p_curso_escolhido VARCHAR(255),
    IN p_periodo VARCHAR(50),
    IN p_dica VARCHAR(255),
    IN p_cor_bilhete VARCHAR(7),
    IN p_forma_cartinha VARCHAR(50),
    IN p_forma_pagamento VARCHAR(50)
  )
  BEGIN
    INSERT INTO message (user_id, content, created_at, nome_destinatario, serie_escolhida, curso_escolhido, periodo, dica, cor_bilhete, forma_cartinha, forma_pagamento)
    VALUES (p_user_id, p_content, p_created_at, p_nome_destinatario, p_serie_escolhida, p_curso_escolhido, p_periodo, p_dica, p_cor_bilhete, p_forma_cartinha, p_forma_pagamento);
  END $$

  DELIMITER ;
`;

module.exports = procedure_update_message_status;