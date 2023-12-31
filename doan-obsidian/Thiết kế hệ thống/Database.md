## Firestore collections
|Collections|Usage|
|--|--|
|userInfo|use for store O-auth infomations|
|userSetting|use for store personalization user's setting|
##### settings
|fields|type|usage|
|--|--|--|
|userName|***string***|
|description|string|
|isPrivate|boolean|
|showPost|boolean|
|showLink|boolean|
|facebookLink|string|
|instagramLink|string|

## SQL database
```sql
CREATE TABLE users(
	user_id VARCHAR PRIMARY KEY,
	username VARCHAR NOT NULL,
	plan VARCHAR -- ['free', 'pro']
);

CREATE TABLE users_info(
	user_id VARCHAR PRIMARY KEY,
	username VARCHAR NOT NULL,
	fullname VARCHAR,
	birthday DATE,
	email VARCHAR NOT NULL,
	phone VARCHAR
);

CREATE TABLE balance(
	balance_id VARCHAR PRIMARY KEY,
	username VARCHAR NOT NULL,
	amount VARCHAR NOT NULL,
	currency VARCHAR -- ['VND', 'USD']
);

CREATE TABLE transition(
	transition_id VARCHAR PRIMARY KEY,
	transition_time DATE,
	sender VARCHAR NOT NULL,
	reciever VARCHAR NOT NULL,
	amount VARCHAR,
	status VARCHAR
);

CREATE TABLE withdraw(
	withdraw_id VARCHAR PRIMARY KEY,
	withdraw_time DATE NOT NULL,
	user_id VARCHAR,
	username VARCHAR NOT NULL,
	amount VARCHAR NOT NULL,
	status VARCHAR
);

CREATE TABLE deposit(
	deposit_id VARCHAR PRIMARY KEY,
	deposit_time DATE NOT NULL,
	user_id VARCHAR,
	username VARCHAR NOT NULL,
	amount VARCHAR NOT NULL,
	status VARCHAR
);

```