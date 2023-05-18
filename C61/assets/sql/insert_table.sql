--insert

INSERT INTO users VALUES (DEFAULT, 'dajohn', 'John', 'Smith', 'johnsmith@email.com', 'AAAaaa111', DEFAULT, CURRENT_TIMESTAMP);
INSERT INTO items VALUES (DEFAULT, '1980-ish Barbie', 'The first one ever WOW!', DEFAULT, DEFAULT, 8999.99, 1, '2023-04-26',1);
INSERT INTO items VALUES (DEFAULT, 'LOZ:BOTW2', 'The wait is almost over!', DEFAULT, DEFAULT, 89.99, 1, '2023-05-15',1);
INSERT INTO items VALUES (DEFAULT, 'DEC Certificate', 'I want to break free', DEFAULT, DEFAULT, 280.99, 1, '2023-05-27',1);

INSERT INTO tag_list VALUES (3, 'Livre & Manuscrit');
INSERT INTO tag_list VALUES (3, 'Bijoux & Accessoire');
INSERT INTO tag_list VALUES (1, 'Collection');
INSERT INTO tag_list VALUES (2, 'Collection');
INSERT INTO tag_list VALUES (3, 'Art & Sculture');

SELECT * FROM items;
SELECT * FROM users;


-- Requete
SELECT *,
( items.auction_on - CURRENT_TIMESTAMP) AS "time_idx" 
FROM items 
WHERE ( items.auction_on - CURRENT_TIMESTAMP) >= INTERVAL '0 SECONDs'
ORDER BY "time_idx" ASC;