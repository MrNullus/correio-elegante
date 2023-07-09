
const procedure_get_message = `
  DELIMITER $$

  CREATE PROCEDURE GetMessage()
  BEGIN
    SELECT * FROM message;
  END $$

  DELIMITER ;
`;

module.exports = procedure_get_message;
