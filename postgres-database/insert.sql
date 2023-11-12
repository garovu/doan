INSERT INTO users (
    user_id,
    username,
    plan
)
VALUES
    (default, 'garo', 'free'),
    (default, 'nam', 'free');
	
INSERT INTO users_info(
	user_id,
	username,
	fullname,
	birthday,
	email,
	phone
)VALUES
    (default,'garo', 'Vu Hoang Nam', '2000-08-24', 'garovu.dev@gmail.com', '0978678901'),
	(default,'nam', 'Ngo Khon Tan', '2002-01-04', 'namvuhoang235@gmail.com', '0978678021');

INSERT INTO balance(
	balance_id,
	username,
	amount,
	currency -- ['VND', 'USD']
)VALUES
    (default,'garo', '100000', 'VND'),
	(default,'nam', '2100000', 'VND');
	
INSERT INTO transition(
	transition_id,
	transition_time ,
	sender,
	reciever,
	amount,
	status
)VALUES	
    (default, '2023-10-10 15:36:38','nam','garo', '900000', 'done');
	
INSERT INTO deposit(
	deposit_id,
	deposit_time,
	user_id,
	username,
	amount,
	status
)VALUES
	(default, '2023-10-05 18:36:31', 'user002', 'nam', '300000', 'done');

INSERT INTO withdraw(
	withdraw_id,
	withdraw_time,
	user_id,
	username,
	amount,
	status
)VALUES
	(default, '2023-10-12 12:36:28', 'user001', 'garo', '800000', 'done');
	