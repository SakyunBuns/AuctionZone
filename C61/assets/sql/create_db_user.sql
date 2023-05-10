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

