CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(25) NOT NULL,
devoured BOOL,
date TIMESTAMP,
PRIMARY KEY (id)
);