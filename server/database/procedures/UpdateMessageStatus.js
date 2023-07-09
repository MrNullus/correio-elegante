 
const procedure_update_message_status = `
  DELIMITER $$

  CREATE PROCEDURE UpdateMessageStatus(IN messageId INT)
  BEGIN
    UPDATE 
      message 
    SET 
      status = 'desativado' 
    WHERE 
      message_id = messageId;
  END $$

  DELIMITER ;
`;

module.exports = procedure_update_message_status;