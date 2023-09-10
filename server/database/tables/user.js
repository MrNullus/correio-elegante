const table_user = `
  CREATE TABLE IF NOT EXISTS user (
    user_id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    
    firstname varchar(90) NOT NULL,
    lastname varchar(90) NOT NULL,
    nick varchar(50) NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(150) NOT NULL,
    status int(11) NOT NULL DEFAULT 1,
    created_at datetime NOT NULL DEFAULT now()
  );
`;

module.exports = table_user;
