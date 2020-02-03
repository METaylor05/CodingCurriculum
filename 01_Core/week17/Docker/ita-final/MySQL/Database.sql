CREATE DATABASE website_db;
USE website_db;
CREATE TABLE contacts (
id INT AUTO_INCREMENT PRIMARY KEY,
FIRST_NAME VARCHAR(50) NOT NULL DEFAULT "none",
LAST_NAME VARCHAR(50) NOT NULL DEFAULT "none",
PHONE VARCHAR(20) NOT NULL DEFAULT "none",
EMAIL VARCHAR(255) NOT NULL DEFAULT "none",
PCM VARCHAR(1) NOT NULL DEFAULT "E",
HDUHAU VARCHAR(2) NOT NULL DEFAULT "TV",
COMMENTS VARCHAR(280)
);
CREATE TABLE products (
id INT PRIMARY KEY NOT NULL,
NAME VARCHAR(255),
IMAGE VARCHAR(255),
CAPTION VARCHAR(999),
RATING INT NOT NULL,
PRICE INT NOT NULL,
QTY INT NOT NULL
);
INSERT INTO products (
id,NAME,IMAGE,CAPTION,RATING,PRICE,QTY)
VALUES (1,"Asus Router","../images/Products/router4.png","High Powered A/B/G/N/AC Tri-band router able to penetrate your entire home",6,130.00,1),
(2,"Linksys B Router","../images/Products/router5.png","Standard B Single-band router for simple email and lite browsing",3,30.00,6),
(3,"Linksys B/G Router","../images/Products/router6.png","Standard B/G Single-band router to single wireless use",4,50.00,7),
(4,"Netgear Nighthawk Router","../images/Products/router7.png","High Powered extreme range A/B/G/N/AC Tri-band router for the most dedicated gamer",9,180.00,4),
(5,"Asus Dual-band Router","../images/Products/router10.png","Great A/B/G/N/AC Dual-band router that would break the bank but will provide excellent connection speeds and reliablility",7,130.00,2),
(6,"Asus Tri-band Router","../images/Products/router11.png","High Powered extreme range A/B/G/N/AC Tri-band router for multiple gamer use and streaming sessions.",10,200.00,9),
(7,"Corelink Dual-band Router","../images/Products/router12.png","B/G/N Dual-band router. Perfect router for a small office or home network",5,80.00,3)