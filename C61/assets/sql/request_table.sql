-- Requete
SELECT *,
( items.auction_on - CURRENT_TIMESTAMP) AS "time_idx" 
FROM items 
WHERE ( items.auction_on - CURRENT_TIMESTAMP) >= INTERVAL '0 SECONDs'
ORDER BY "time_idx" ASC;

SELECT id_tag, COUNT(id_tag) FROM favorite_tag_list WHERE id_user = 1 GROUP BY id_tag;
SELECT * FROM items 
INNER JOIN tag_list 
ON tag_list.id_item = items.id
WHERE tag_list.id_tag = 'Collection';

SELECT id_tag as "TAG",
COUNT(id_tag) as "NbTime"
FROM favorite_tag_list
GROUP BY id_tag;
