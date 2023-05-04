-----------------------
-- Creation usager
------------------------

CREATE ROLE nath WITH
	LOGIN
	SUPERUSER
	CREATEDB
	CREATEROLE
	INHERIT
	NOREPLICATION
	CONNECTION LIMIT -1
	PASSWORD 'xxxxxx';

CREATE DATABASE "AuctionZone"
    WITH 
    OWNER = nath
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;

---------------------------------
-- Creation tables
----------------------------------

---------------------------------
-- Creation tables
----------------------------------

ALTER TABLE IF EXISTS address
	DROP CONSTRAINT IF EXISTS fk_adress_users;
ALTER TABLE IF EXISTS tag_list
	DROP CONSTRAINT IF EXISTS fk_tag_list_items;
ALTER TABLE IF EXISTS favorite_tag_list
	DROP CONSTRAINT IF EXISTS fk_favorite_tag_list_users;
ALTER TABLE IF EXISTS bids
	DROP CONSTRAINT IF EXISTS fk_bids_items;
ALTER TABLE IF EXISTS bids
	DROP CONSTRAINT IF EXISTS fk_bids_users;
ALTER TABLE IF EXISTS items
	DROP CONSTRAINT IF EXISTS fk_items_users;
ALTER TABLE IF EXISTS pictures_list
	DROP CONSTRAINT IF EXISTS fk_pictures_list_items;
ALTER TABLE IF EXISTS bought_items
	DROP CONSTRAINT IF EXISTS fk_bought_items_users_seller;
ALTER TABLE IF EXISTS bought_items
	DROP CONSTRAINT IF EXISTS fk_bought_items_users;
ALTER TABLE IF EXISTS bought_items
	DROP CONSTRAINT IF EXISTS fk_bought_items_items;
ALTER TABLE IF EXISTS viewed_items
	DROP CONSTRAINT IF EXISTS fk_viewed_items_items;
ALTER TABLE IF EXISTS viewed_items
	DROP CONSTRAINT IF EXISTS fk_viewed_items_users;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS address;
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS bought_items;
DROP TABLE IF EXISTS viewed_items;
DROP TABLE IF EXISTS tag_list;
DROP TABLE IF EXISTS favorite_tag_list;
DROP TABLE IF EXISTS pictures_list;
DROP TABLE IF EXISTS bids;
DROP TYPE IF EXISTS status;
DROP TYPE IF EXISTS tag;

CREATE TYPE status AS ENUM (
  'waiting',
  'in_auction',
  'sold'
);

CREATE TYPE tag AS ENUM (
  'Antique',
  'Art & Sculture',
  'Automobile',
  'Bijoux & Accessoire',
  'Collection',
  'Livre & Manuscrit',
  'Meuble',
  'Monnaie',
  'Musique',
  'Sport',
  'Vaisselle & Coutellerie',
  'Vêtement'
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username varchar(32) UNIQUE NOT NULL,
  name varchar(32),
  lastname varchar(32),
  email varchar(128) UNIQUE NOT NULL,
  password varchar(132) NOT NULL,
  profile_picture bytea,
  dateofbirth timestamp NOT NULL
);

CREATE TABLE address (
  id SERIAL PRIMARY KEY,
  id_user int NOT NULL,
  street varchar(128) NOT NULL,
  apt int DEFAULT null,
  city varchar(32) NOT NULL,
  country VARCHAR(32) NOT NULL,
  postal_code CHAR(6) NOT NULL
);

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(32) NOT NULL,
  description VARCHAR(256) DEFAULT '',
  current_status status NOT NULL DEFAULT 'waiting',
  bid_count int DEFAULT 0,
  price numeric DEFAULT 1,
  id_seller int NOT NULL,
  auction_on timestamp UNIQUE NOT NULL,
  room int
);

CREATE TABLE bought_items (
  id_user INT NOT NULL,
  id_seller INT NOT NULL,
  id_item INT UNIQUE NOT NULL,
  bought_on timestamp
);

CREATE TABLE tag_list (
  id_item INT,
  id_tag tag
);

CREATE TABLE favorite_tag_list (
  id_user INT,
  id_tag tag
);

CREATE TABLE pictures_list (
  id_item int,
  picture bytea
);

CREATE TABLE bids (
  id_item int NOT NULL,
  id_user int NOT NULL,
  amount numeric NOT NULL,
  submited_on timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE viewed_items (
  id_item int NOT NULL,
  id_user int NOT NULL,
  viewed_on timestamp DEFAULT CURRENT_TIMESTAMP
);



ALTER TABLE address ADD CONSTRAINT fk_adress_users FOREIGN KEY (id_user) REFERENCES users (id);

ALTER TABLE tag_list ADD CONSTRAINT fk_tag_list_items FOREIGN KEY (id_item) REFERENCES items (id);

ALTER TABLE favorite_tag_list ADD CONSTRAINT fk_favorite_tag_list_users FOREIGN KEY (id_user) REFERENCES users (id);

ALTER TABLE bids ADD CONSTRAINT fk_bids_items FOREIGN KEY (id_item) REFERENCES items (id);

ALTER TABLE bids ADD CONSTRAINT fk_bids_users FOREIGN KEY (id_user) REFERENCES users (id);

ALTER TABLE items ADD CONSTRAINT fk_items_users FOREIGN KEY (id_seller) REFERENCES users (id);

ALTER TABLE pictures_list ADD CONSTRAINT fk_pictures_list_items FOREIGN KEY (id_item) REFERENCES "items" ("id");

ALTER TABLE bought_items ADD CONSTRAINT fk_bought_items_users_seller FOREIGN KEY (id_seller) REFERENCES "users" ("id");

ALTER TABLE bought_items ADD CONSTRAINT fk_bought_items_users FOREIGN KEY (id_user) REFERENCES users (id);

ALTER TABLE bought_items ADD CONSTRAINT fk_bought_items_items FOREIGN KEY (id_item) REFERENCES items (id);

ALTER TABLE viewed_items ADD CONSTRAINT fk_viewed_items_items FOREIGN KEY (id_item) REFERENCES items (id);

ALTER TABLE viewed_items ADD CONSTRAINT fk_viewed_items_users FOREIGN KEY (id_user) REFERENCES users (id);

