CREATE TABLE users(
	user_id SERIAL PRIMARY KEY,
	username VARCHAR NOT NULL,
	plan VARCHAR -- ['free', 'pro']
);

CREATE TABLE users_info(
	user_id SERIAL PRIMARY KEY,
	username VARCHAR NOT NULL,
	fullname VARCHAR,
	birthday DATE,
	email VARCHAR NOT NULL,
	phone VARCHAR
);

CREATE TABLE balance(
	balance_id SERIAL PRIMARY KEY,
	username VARCHAR NOT NULL,
	amount VARCHAR NOT NULL,
	currency VARCHAR -- ['VND', 'USD']
);

CREATE TABLE transition(
	transition_id SERIAL PRIMARY KEY,
	transition_time TIMESTAMP,
	sender VARCHAR NOT NULL,
	reciever VARCHAR NOT NULL,
	amount VARCHAR,
	status VARCHAR
);

CREATE TABLE withdraw(
	withdraw_id SERIAL PRIMARY KEY,
	withdraw_time TIMESTAMP NOT NULL,
	user_id VARCHAR,
	username VARCHAR NOT NULL,
	amount VARCHAR NOT NULL,
	status VARCHAR
);

CREATE TABLE deposit(
	deposit_id SERIAL PRIMARY KEY,
	deposit_time TIMESTAMP NOT NULL,
	user_id VARCHAR,
	username VARCHAR NOT NULL,
	amount VARCHAR NOT NULL,
	status VARCHAR
);
