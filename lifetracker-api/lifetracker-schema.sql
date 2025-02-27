CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE CHECK (POSITION('@' in email) > 1),
    username VARCHAR(255) NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE nutrition (
    id SERIAL PRIMARY KEY,
    foodname VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    quantity INTEGER NOT NULL,
    calories INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE exercise (
    id SERIAL PRIMARY KEY,
    exname VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    duration INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    intensity INTEGER NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);