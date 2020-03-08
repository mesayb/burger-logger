DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

use burgers_db;
CREATE TABLE burgers(
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(250),
    devoured boolean,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burgers_name, devoured) VALUES ('Steak Burger', true), ('Cheese Burger', false);