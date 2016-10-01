-- Creates the table, but does not insert data yet.
-- (That will occur in the seeds.sql file.)
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(50) NOT NULL,
devoured BOOL,
date TIMESTAMP,
PRIMARY KEY (id)
);