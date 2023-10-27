USE desafio-nginx-node-db;

-- DROP TABLE people;

CREATE TABLE IF NOT EXISTS `people`(
    `id` int NOT NULL AUTO_INCREMENT, 
    `name` varchar(255) NOT NULL, 
    PRIMARY KEY(`id`),
    UNIQUE KEY `unique_name` (`name`)
);