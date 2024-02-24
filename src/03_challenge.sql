CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(60),
    age INTEGER,
    created_at DATE NOT NULL DEFAULT(NOW())
);