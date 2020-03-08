DROP DATABE IF EXISTS;
CREATE DATABASE burgers_db;

use burgers_db;
CREATE TABLE burgers(
    id AUTO_INCREMENT,
    burger_name VARCHAR(250),
    devoured boolean,
    PRIMARY KEY (id)
)