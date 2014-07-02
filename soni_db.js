// JavaScript Document

function set_up_soni_db(){
	//alert("DB");
	
		db.transaction(function (tx) {
		
		//tx.executeSql('DROP TABLE bands');
		
		tx.executeSql('CREATE TABLE IF NOT EXISTS bands (id UNIQUE, band_name TEXT, stage TEXT, day INTEGER, start_time INTEGER, finish_time INTEGER, band_fav INTEGER)');
		//friday apollo
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (1, "The Prodigy", "Apollo", 20140704, 2120, 2300, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (2, "Limp Bizkit", "Apollo", 20140704, 1940, 2040, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (3, "HIM", "Apollo", 20140704, 1835, 1920, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (4, "Band of Skulls", "Apollo", 20140704, 1730, 1815, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (5, "Gary Numan", "Apollo", 20140704, 1625, 1710, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (6, "Anti-Flag", "Apollo", 20140704, 1535, 1605, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (7, "The Defiled", "Apollo", 20140704, 1445, 1515, 0)');
		//friday bohemia
		//tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (8, "Infamy", "Bohemia", 20140705, 0130, 0200, 0)');
		//tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (10, "Mixhell", "Bohemia", 20140705, 0045, 0130, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (11, "65Daysofstatic", "Bohemia", 20140704, 2315, 2359, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (12, "Electric Wizard", "Bohemia", 20140704, 2130, 2245, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (13, "Anthrax", "Bohemia", 20140704, 2000, 2100, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (14, "Atari Teenage Riot", "Bohemia", 20140704, 1845, 1930, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (15, "Bam Margera", "Bohemia", 20140704, 1740, 1825, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (16, "Devil You Know", "Bohemia", 20140704, 1645, 1715, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (17, "Comeback Kid", "Bohemia", 20140704, 1555, 1625, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (18, "Yashin", "Bohemia", 20140704, 1505, 1535, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (19, "Canterbury", "Bohemia", 20140704, 1415, 1445, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (20, "Lostalone", "Bohemia", 20140704, 1325, 1355, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (21, "Hounds", "Bohemia", 20140704, 1235, 1305, 0)');
		
		
		//saturday apollo
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (22, "Iron Maiden", "Apollo", 20140705, 2045, 2315, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (23, "Deftones", "Apollo", 20140705, 1815, 1915, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (24, "Frank Turner", "Apollo", 20140705, 1620, 1705, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (25, "Anthrax", "Apollo", 20140705, 1445, 1530, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (26, "Ghost", "Apollo", 20140705, 1325, 1400, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (27, "Babymetal", "Apollo", 20140705, 1210, 1240, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (28, "Tesseract", "Apollo", 20140705, 1100, 1130, 0)');
		
		//sat saturn
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (29, "Slayer", "Saturn", 20140705, 1925, 2025, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (30, "Hundred Reasons", "Saturn", 20140705, 1715, 1800, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (31, "Carcass", "Saturn", 20140705, 1535, 1615, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (32, "The Winery Dogs", "Saturn", 20140705, 1405, 1440, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (33, "Chas and Dave", "Saturn", 20140705, 1245, 1320, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (34, "Alestorm", "Saturn", 20140705, 1135, 1205, 0)');
		
		
		
		//friday jager 
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (49, "Carnifex", "Jagermeister", 20140704, 2000, 2045, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (45, "Brutality Will Prevail", "Jagermeister", 20140704, 1900, 1930, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (38, "Protafield", "Jagermeister", 20140704, 1800, 1830, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (48, "October File", "Jagermeister", 20140704, 1700, 1730, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (42, "TRC", "Jagermeister", 20140704, 1600, 1630, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (40, "Malefice", "Jagermeister", 20140704, 1500, 1530, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (122, "Centiment", "Jagermeister", 20140704, 1400, 1430, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (37, "Black Dogs", "Jagermeister", 20140704, 1300, 1330, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (47, "Shrine", "Jagermeister", 20140704, 1200, 1230, 0)');
		
		
		//friday Satellite
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (123, "Demonic Resurrection", "Satellite", 20140704, 2130, 2200, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (124, "Scholars", "Satellite", 20140704, 2030, 2100, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (44, "Little Matador", "Satellite", 20140704, 1930, 2000, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (46, "Messenger", "Satellite", 20140704, 1830, 1900, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (41, "Max Raptor", "Satellite", 20140704, 1730, 1800, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (121, "Fort Hope", "Satellite", 20140704, 1630, 1700, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (39, "Love Zombies", "Satellite", 20140704, 1530, 1600, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (35, "Empire", "Satellite", 20140704, 1430, 1500, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (43, "Straight Lines", "Satellite", 20140704, 1330, 1400, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (36, "Glass City Vice", "Satellite", 20140704, 1230, 1300, 0)');
		
		
		//sat bohemia
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (50, "Hang The Bastard", "Bohemia", 20140705, 1115, 1145, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (51, "Calling Are Cars", "Bohemia", 20140705, 1205, 1235, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (52, "Voodoo Six", "Bohemia", 20140705, 1255, 1325, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (53, "Blitz Kids", "Bohemia", 20140705, 1345, 1415, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (54, "Reckless Love", "Bohemia", 20140705, 1425, 1455, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (55, "The Virginmarys", "Bohemia", 20140705, 1515, 1545, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (56, "Black Spiders", "Bohemia", 20140705, 1605, 1645, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (57, "Sebastian Bach", "Bohemia", 20140705, 1710, 1755, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (58, "Dog Eat Dog", "Bohemia", 20140705, 1820, 1910, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (59, "New Model Army", "Bohemia", 20140705, 1940, 2030, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (60, "The Sisters Of Mercy", "Bohemia", 20140705, 2315, 2359, 0)');
		//tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (61, "Kerrang Party", "Bohemia", 20140706, 0100, 0300, 0)');
		
		//sat jager
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (9, "Collibus", "Jagermeister", 20140705, 1100, 1130, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (62, "The Wild Lies", "Jagermeister", 20140705, 1200, 1230, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (63, "Empire Kill", "Jagermeister", 20140705, 1300, 1330, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (64, "The Hell", "Jagermeister", 20140705, 1400, 1430, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (65, "Stormzone", "Jagermeister", 20140705, 1500, 1530, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (66, "Glamour Of The Kill", "Jagermeister", 20140705, 1600, 1630, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (67, "Stampin Ground", "Jagermeister", 20140705, 1700, 1730, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (68, "Zico Chain", "Jagermeister", 20140705, 1800, 1830, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (69, "Bleed From Within", "Jagermeister", 20140705, 1900, 1930, 0)');
		
		//sat Satellite
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (70, "The Raven Age", "Satellite", 20140705, 1130, 1200, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (71, "Rival State", "Satellite", 20140705, 1230, 1300, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (72, "Broken Hands", "Satellite", 20140705, 1330, 1400, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (73, "The Safety Fire", "Satellite", 20140705, 1430, 1500, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (74, "Fin Taylor", "Satellite", 20140705, 1515, 1535, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (75, "John Hastings", "Satellite", 20140705, 1535, 1555, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (76, "Alfie Brown", "Satellite", 20140705, 1555, 1615, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (77, "John Robertson", "Satellite", 20140705, 1615, 1635, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (78, "The Noise Next Door", "Satellite", 20140705, 1635, 1655, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (79, "Andrew Oneil", "Satellite", 20140705, 1655, 1715, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (80, "The Lounge Kittens", "Satellite", 20140705, 1730, 1800, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (81, "Eureka Machines", "Satellite", 20140705, 1830, 1900, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (82, "The YoYos", "Satellite", 20140705, 1930, 2015, 0)');
		//tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (83, "Progres Wrestling", "Satellite", 20140706, 0000, 0200, 0)');
		
		//sun apollo
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (84, "Gojira", "Apollo", 20140706, 1115, 1155, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (85, "Devin Townsend Project", "Apollo", 20140706, 1235, 1320, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (86, "Airbourne", "Apollo", 20140706, 1410, 1455, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (87, "Mastodon", "Apollo", 20140706, 1555, 1640, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (88, "Alice In Chains", "Apollo", 20140706, 1745, 1845, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (89, "Metallica", "Apollo", 20140706, 2015, 2230, 0)');
		
		
		//sun saturn
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (90, "Protest The Hero", "Saturn", 20140706, 1200, 1230, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (91, "Karnivool", "Saturn", 20140706, 1325, 1405, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (92, "Reel Big Fish", "Saturn", 20140706, 1500, 1545, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (93, "Dropkick Murphys", "Saturn", 20140706, 1650, 1735, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (94, "Dream Theater", "Saturn", 20140706, 1850, 1955, 0)');
		//sun boh
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (95, "The Struts", "Bohemia", 20140706, 1120, 1150, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (96, "The Cadillac Three", "Bohemia", 20140706, 1210, 1240, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (97, "Truckfighters", "Bohemia", 20140706, 1300, 1330, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (98, "Bo Ningen", "Bohemia", 20140706, 1350, 1420, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (99, "Gallows", "Bohemia", 20140706, 1440, 1520, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (100, "The Chiodos", "Bohemia", 20140706, 1540, 1620, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (101, "Kerbdog", "Bohemia", 20140706, 1640, 1720, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (102, "The Bronx", "Bohemia", 20140706, 1750, 1830, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (103, "Therapy", "Bohemia", 20140706, 1900, 2000, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (104, "Nirvana Defiled", "Bohemia", 20140706, 2315, 2345, 0)');
		//tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (105, "Ultimate Power", "Bohemia", 20140707, 0000, 0200, 0)');
		
		//sun jag
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (119, "Raging Speedhorn", "Jagermeister", 20140706, 1900, 1945, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (116, "Anti Nowhere League", "Jagermeister", 20140706, 1800, 1830, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (113, "Dregen", "Jagermeister", 20140706, 1700, 1730, 0)');
			tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (115, "Sweet Savage", "Jagermeister", 20140706, 1600, 1630, 0)');
		
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (117, "Beastmilk", "Jagermeister", 20140706, 1500, 1530, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (112, "Krokodil", "Jagermeister", 20140706, 1400, 1430, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (108, "Palm Reader", "Jagermeister", 20140706, 1300, 1330, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (106, "Dripback", "Jagermeister", 20140706, 1200, 1230, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (125, "Boy Jumps Ship", "Jagermeister", 20140706, 1100, 1130, 0)');
		//sun satellite
		
		
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (107, "The One Hundred", "Satellite", 20140706, 1130, 1200, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (109, "The Hype Theory", "Satellite", 20140706, 1230, 1300, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (110, "The Bots", "Satellite", 20140706, 1330, 1400, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (111, "Itch", "Satellite", 20140706, 1430, 1500, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (118, "Silverstein", "Satellite", 20140706, 1740, 1810, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (114, "Only Crime", "Satellite", 20140706, 1830, 1900, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (120, "Trash Talk", "Satellite", 20140706, 1925, 2005, 0)');
		
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (126, "Jim Smallman", "Satellite", 20140706, 1655, 1715, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (127, "Mat Ewins", "Satellite", 20140706, 1635, 1655, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (128, "Pat Cahill", "Satellite", 20140706, 1615, 1635, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (129, "Alfie Brown", "Satellite", 20140706, 1555, 1615, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (130, "Matt Rees", "Satellite", 20140706, 1535, 1555, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (131, "Rob Deering", "Satellite", 20140706, 1515, 1535, 0)');
		
		
		set_up_main_page();
	});
}













