--insert

INSERT INTO users VALUES (DEFAULT, 'dajohn', 'John', 'Smith', 'johnsmith@email.com', 'AAAaaa111', DEFAULT, CURRENT_TIMESTAMP);
INSERT INTO users VALUES (DEFAULT, 'superTest', 'Bob', 'King', 'test@email.com', 'test123', DEFAULT, '1990-01-01');

INSERT INTO items VALUES (DEFAULT, '1980-ish Barbie', 'The first one ever WOW!', DEFAULT, DEFAULT, 8999.99, 1, '2023-04-26',1);
INSERT INTO items VALUES (DEFAULT, 'LOZ:BOTW2', 'The wait is almost over!', DEFAULT, DEFAULT, 89.99, 1, '2023-05-15',1);
INSERT INTO items VALUES (DEFAULT, 'DEC Certificate', 'I want to break free', DEFAULT, DEFAULT, 280.99, 1, '2023-05-27:14:00',1);

INSERT INTO items VALUES (DEFAULT, 'FF:Pixel Remastered', 'Better buy it off hands since the furnisher couldn''t provide!', DEFAULT, DEFAULT, 89.99, 1, '2023-07-15',1);
INSERT INTO items VALUES (DEFAULT, 'PepsiCola Magnet', 'Make your mom happy since i dunno', DEFAULT, DEFAULT, 36.87, 1, '2023-05-26:16:34',1);
INSERT INTO items VALUES (DEFAULT, 'Pearl', ' snatched from a siren very furious', DEFAULT, DEFAULT, 4200, 1, '2023-08-13:02:24:03',1);
INSERT INTO items VALUES (DEFAULT, 'Ace Attorney Vinyl', 'Go back to school', DEFAULT, DEFAULT, 280.99, 1, '2023-05-28:08:00',1);
INSERT INTO items VALUES (DEFAULT, 'Santoku knife', 'Chop Chop!!', DEFAULT, DEFAULT, 350, 1, '2023-05-23',1);
INSERT INTO items VALUES (DEFAULT, 'Broken mirror', 'At least you won''t be the one cursed' , DEFAULT, DEFAULT, 450.99, 1, '2023-05-27:12:00:04',1);
INSERT INTO items VALUES (DEFAULT, 'Sidney Crosbey''s cards', 'Someone enjoyed timbits', DEFAULT, DEFAULT, 89.99, 1, '2023-05-15:23:59',1);
INSERT INTO items VALUES (DEFAULT, 'DM Ropes', 'Release your inner dragonborn', DEFAULT, DEFAULT, 80.99, 1, '2023-06-27',1);

INSERT INTO items VALUES (DEFAULT, 'mAGIC pENCIL', 'Maybe it will answer to your deepest wishes?', DEFAULT, DEFAULT, 42.74, 1, '2023-06-29:12:00');
INSERT INTO items VALUES (DEFAULT, 'Death Eraser', 'This may be a reference to Death Note, who knows', DEFAULT, DEFAULT, 3.99, 1, '2023-07-29:12:00');
INSERT INTO items VALUES (DEFAULT, 'Bootleg Saber pen', 'Do it for her', DEFAULT, DEFAULT, 65.00, 1, '2023-06-30:14:00');
INSERT INTO items VALUES (DEFAULT, 'Photograph with Gumby', 'I miss you mom!', DEFAULT, DEFAULT, 10.99, 1, '2023-06-29:16:00');
INSERT INTO items VALUES (DEFAULT, 'Pooh Bear Plush from 1997', 'We all know what i want from the internet', DEFAULT, DEFAULT, 250.99, 1, '2023-06-26:11:00');
INSERT INTO items VALUES (DEFAULT, 'Smurf Handed Link Amiibo', 'Maybe youll find him online', DEFAULT, DEFAULT, 20.00, 1, '2023-06-26:13:00');


INSERT INTO tag_list VALUES (3, 'Livre & Manuscrit');
INSERT INTO tag_list VALUES (3, 'Bijoux & Accessoire');
INSERT INTO tag_list VALUES (1, 'Collection');
INSERT INTO tag_list VALUES (2, 'Collection');
INSERT INTO tag_list VALUES (2, 'Automobile');
INSERT INTO tag_list VALUES (3, 'Art & Sculture');

INSERT INTO tag_list VALUES (4, 'Collection');
INSERT INTO tag_list VALUES (4, 'Livre & Manuscrit');
INSERT INTO tag_list VALUES (5, 'Collection');
INSERT INTO tag_list VALUES (5, 'Bijoux & Accessoire');
INSERT INTO tag_list VALUES (5, 'Monnaie');
INSERT INTO tag_list VALUES (5, 'Vaisselle & Coutellerie');
INSERT INTO tag_list VALUES (6, 'Monnaie');
INSERT INTO tag_list VALUES (6, 'Bijoux & Accessoire');
INSERT INTO tag_list VALUES (7, 'Musique');
INSERT INTO tag_list VALUES (7, 'Collection');
INSERT INTO tag_list VALUES (8, 'Vaisselle & Coutellerie');
INSERT INTO tag_list VALUES (8, 'Antique');
INSERT INTO tag_list VALUES (9, 'Antique');
INSERT INTO tag_list VALUES (9, 'Meuble');
INSERT INTO tag_list VALUES (10, 'Sport');
INSERT INTO tag_list VALUES (10, 'Collection');
INSERT INTO tag_list VALUES (11, 'Vêtement');

INSERT INTO favorite_tag_list VALUES (1, 'Antique');
INSERT INTO favorite_tag_list VALUES (1, 'Art & Sculture');
INSERT INTO favorite_tag_list VALUES (1, 'Automobile');
INSERT INTO favorite_tag_list VALUES (1, 'Bijoux & Accessoire');
INSERT INTO favorite_tag_list VALUES (1, 'Collection');
INSERT INTO favorite_tag_list VALUES (1, 'Livre & Manuscrit');
INSERT INTO favorite_tag_list VALUES (1, 'Meuble');
INSERT INTO favorite_tag_list VALUES (1, 'Monnaie');
INSERT INTO favorite_tag_list VALUES (1, 'Musique');
INSERT INTO favorite_tag_list VALUES (1, 'Sport');
INSERT INTO favorite_tag_list VALUES (1, 'Vaisselle & Coutellerie');
INSERT INTO favorite_tag_list VALUES (1, 'Vêtement');

INSERT INTO tag_list VALUES (12, 'Collection');
INSERT INTO tag_list VALUES (13, 'Collection');
INSERT INTO tag_list VALUES (14, 'Collection');
INSERT INTO tag_list VALUES (15, 'Collection');
INSERT INTO tag_list VALUES (16, 'Collection');
INSERT INTO tag_list VALUES (17, 'Collection');

SELECT * FROM items;
SELECT * FROM users;






