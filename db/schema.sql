ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;


USE burger_db;

CREATE TABLE burgers (
	id INT AUTO_INCREMENT,
	`name` VARCHAR(50) NOT NULL,
    eaten BOOLEAN DEFAULT false NOT NULL,
    PRIMARY KEY (id)
)
