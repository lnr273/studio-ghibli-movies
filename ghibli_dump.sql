-- MySQL dump 10.13  Distrib 8.0.37, for Win64 (x86_64)
--
-- Host: localhost    Database: ghibli_db
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `banner`
--

DROP TABLE IF EXISTS `banner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `banner` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `image` (`image`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banner`
--

LOCK TABLES `banner` WRITE;
/*!40000 ALTER TABLE `banner` DISABLE KEYS */;
INSERT INTO `banner` VALUES (1,'home','https://i.imgur.com/ImmyjIH.jpeg'),(2,'movies','https://i.imgur.com/VOxjJfv.jpeg'),(3,'favorites','https://i.imgur.com/M7fqHmC.jpeg'),(4,'about','https://i.imgur.com/NPd09ES.jpeg');
/*!40000 ALTER TABLE `banner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorites`
--

DROP TABLE IF EXISTS `favorites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorites` (
  `userId` int NOT NULL,
  `movieId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorites`
--

LOCK TABLES `favorites` WRITE;
/*!40000 ALTER TABLE `favorites` DISABLE KEYS */;
/*!40000 ALTER TABLE `favorites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `year` year NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `quote` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `background` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `poster` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `imdbRating` float NOT NULL,
  `genre` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `writer` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `runtime` int NOT NULL,
  `boxoffice` int NOT NULL,
  `awards` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (1,'Ponyo',2008,'When Sosuke, a young boy who lives on a clifftop overlooking the sea, rescues a stranded goldfish named Ponyo, he discovers more than he bargained for. Ponyo is a curious, energetic young creature who yearns to be human, but even as she causes chaos around the house, her father, a powerful sorcerer, schemes to return Ponyo to the sea.','Welcome to a world where anything is possible.','https://i.imgur.com/YVY6D55.png','https://a.ltrbxd.com/resized/film-poster/4/4/5/9/4/44594-ponyo-0-1000-0-1500-crop.jpg?v=6e5faa20db',7.6,'Adventure,Comedy','Hayao Miyazaki, Melissa Mathison',101,16543471,'12 wins & 20 nominations'),(2,'Tales from Earthsea',2006,'Something bizarre has come over the land. The kingdom is deteriorating. People are beginning to act strange… What\'s even more strange is that people are beginning to see dragons, which shouldn\'t enter the world of humans. Due to all these bizarre events, Ged, a wandering wizard, is investigating the cause. During his journey, he meets Prince Arren, a young distraught teenage boy. While Arren may look like a shy young teen, he has a severe dark side, which grants him strength, hatred, ruthlessness and has no mercy, especially when it comes to protecting Teru. For the witch Kumo this is a perfect opportunity. She can use the boy\'s “fears” against the very one who would help him, Ged.','Once Man and Dragon were one. Man chose Land and Sea, Dragon chose Wind and Fire.','https://i.imgur.com/rHuCvak.jpeg','https://a.ltrbxd.com/resized/film-poster/2/6/5/8/7/26587-tales-from-earthsea-0-1000-0-1500-crop.jpg?v=23db0dfab3',6.3,'Adventure,Fantasy','Ursula K. Le Guin, Gorô Miyazaki, Keiko Niwa',115,48658,'3 nominations'),(3,'Kiki\'s Delivery Service',1989,'A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.','I was feeling blue, but I\'m better now','https://i.imgur.com/fHd7xLB.jpeg','https://a.ltrbxd.com/resized/sm/upload/5e/rk/0e/99/C70E830B-E641-4CD4-87B3-8DFB91383E20-0-1000-0-1500-crop.jpg?v=359a791d0d',7.8,'Family,Fantasy','Eiko Kadono, Hayao Miyazaki',103,1004057,'4 wins'),(4,'My Neighbor Totoro',1988,'Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.','He\'s your friendly neighbourhood forest spirit!','https://i.imgur.com/YiRBgcu.jpeg','https://a.ltrbxd.com/resized/film-poster/4/7/7/5/6/47756-my-neighbor-totoro-0-1000-0-1500-crop.jpg?v=749abe71ad',8.1,'Comedy,Family','Hayao Miyazaki',86,2250213,'5 wins & 2 nominations'),(5,'Howl\'s Moving Castle',2004,'Sophie, a young milliner, is turned into an elderly woman by a witch who enters her shop and curses her. She encounters a wizard named Howl and gets caught up in his resistance to fighting for the king.','The two lived there.','https://i.imgur.com/bse1X7W.jpeg','https://a.ltrbxd.com/resized/film-poster/4/9/0/6/2/49062-howl-s-moving-castle-0-1000-0-1500-crop.jpg?v=fde81bda52',8.2,'Adventure,Family','Hayao Miyazaki, Diana Wynne Jones',119,6789268,'Nominated for 1 Oscar. 14 wins & 20 nominations total'),(6,'Spirited Away',2001,'A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.','Nothing that happens is ever forgotten, even if you can\'t remember it','https://i.imgur.com/w48JJre.jpeg','https://a.ltrbxd.com/resized/film-poster/5/1/9/2/1/51921-spirited-away-0-1000-0-1500-crop.jpg?v=a3ad463c55',8.6,'Adventure,Family','Hayao Miyazaki',124,15205725,'Won 1 Oscar. 58 wins & 31 nominations total'),(7,'Princess Mononoke',1997,'Ashitaka, a prince of the disappearing Emishi people, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest, and Lady Eboshi, who is trying to destroy it. Ashitaka must find a way to bring balance to this conflict.','The fate of the world rests on the courage of one warrior.','https://i.imgur.com/CkDduF7.jpeg','https://a.ltrbxd.com/resized/sm/upload/fu/5h/fp/mj/mNqZOtJIQfFQPjo3hmYLIn8Qqhf-0-1000-0-1500-crop.jpg?v=aae03975f7',8.3,'Drama','Hayao Miyazaki, Neil Gaiman',133,4845631,'14 wins & 6 nominations'),(8,'The Secret World of Arrietty',2010,'14-year-old Arrietty and the rest of the Clock family live in peaceful anonymity as they make their own home from items “borrowed” from the house\'s human inhabitants. However, life changes for the Clocks when a human boy discovers Arrietty.','Do not be seen by humans. That\'s been the law of children of the underfloor.','https://i.imgur.com/a08jmDv.jpeg','https://a.ltrbxd.com/resized/sm/upload/ba/5u/k5/he/arietty-0-1000-0-1500-crop.jpg?v=c291004a3a',7.6,'Adventure,Drama','Mary Norton, Hayao Miyazaki, Keiko Niwa',94,19587032,'12 wins & 6 nominations'),(9,'Porco Rosso',1992,'In Italy in the 1930s, sky pirates in biplanes terrorize wealthy cruise ships as they sail the Adriatic Sea. The only pilot brave enough to stop the scourge is the mysterious Porco Rosso, a former World War I flying ace who was somehow turned into a pig during the war. As he prepares to battle the pirate crew\'s American ace, Porco Rosso enlists the help of spunky girl mechanic Fio Piccolo and his longtime friend Madame Gina.','A pig\'s got to fly.','https://i.imgur.com/0LqNRUn.jpeg','https://a.ltrbxd.com/resized/sm/upload/pf/lk/cj/4e/nCx0EESDNxwXGn7rkCU6cvXTpIB-0-1000-0-1500-crop.jpg?v=67361260f7',7.7,'Adventure,Comedy','Hayao Miyazaki',94,443059,'3 wins'),(10,'Whisper of the Heart',1995,'Shizuku lives a simple life, dominated by her love for stories and writing. One day she notices that all the library books she has have been previously checked out by the same person: \'Seiji Amasawa\'.','I found someone I like.','https://i.imgur.com/M3nekgX.jpeg','https://a.ltrbxd.com/resized/film-poster/2/6/7/1/3/26713-whisper-of-the-heart-0-1000-0-1500-crop.jpg?v=d1e50d223e',7.8,'Drama','Hayao Miyazaki, Aoi Hiiragi, Cindy Davis',111,498156,'N/A'),(11,'Castle in the Sky',1986,'A young boy and a girl with a magic crystal must race against pirates and foreign agents in a search for a legendary floating castle.','One day, a girl came down from the sky…','https://i.imgur.com/OvdFF0U.jpeg','https://a.ltrbxd.com/resized/film-poster/4/6/1/5/7/46157-castle-in-the-sky-0-1000-0-1500-crop.jpg?v=b1924d4dcd',8,'Adventure,Family','Hayao Miyazaki, Jonathan Swift',125,523664,'1 win'),(12,'The Wind Rises',2013,'A lifelong love of flight inspires Japanese aviation engineer Jiro Horikoshi, whose storied career includes the creation of the A-6M World War II fighter plane.','We must live.','https://i.imgur.com/42WsJyr.jpeg','https://a.ltrbxd.com/resized/film-poster/1/1/2/9/5/7/112957-the-wind-rises-0-1000-0-1500-crop.jpg?v=615164f787',7.8,'Biography,Drama','Hayao Miyazaki',126,5209580,'Nominated for 1 Oscar. 26 wins & 54 nominations total'),(13,'Nausicaä of the Valley of the Wind',1984,'After a global war, the seaside kingdom known as the Valley of the Wind remains one of the last strongholds on Earth untouched by a poisonous jungle and the powerful insects that guard it. Led by the courageous Princess Nausicaä, the people of the Valley engage in an epic struggle to restore the bond between humanity and Earth.','A young girl\'s love called forth miracles…','https://i.imgur.com/bWhLgaS.jpeg','https://a.ltrbxd.com/resized/film-poster/5/1/9/6/9/51969-nausicaa-of-the-valley-of-the-wind-0-1000-0-1500-crop.jpg?v=059bc2bbc0',8,'Adventure,Sci-Fi','Hayao Miyazaki, Cindy Davis, Donald H. Hewitt',117,495770,'3 wins & 1 nomination'),(14,'Pom Poko',1994,'The Raccoons of the Tama Hills are being forced from their homes by the rapid development of houses and shopping malls. As it becomes harder to find food and shelter, they decide to band together and fight back. The Raccoons practice and perfect the ancient art of transformation until they are even able to appear as humans in hilarious circumstances.','A Fantastic Tale Of Survival','https://i.imgur.com/9fD5est.jpeg','https://a.ltrbxd.com/resized/film-poster/4/2/4/7/8/42478-pom-poko-0-1000-0-1500-crop.jpg?v=887706ae4b',7.3,'Comedy,Drama','Isao Takahata',119,372405,'3 wins & 1 nomination'),(15,'The Boy and the Heron',2023,'While the Second World War rages, the teenage Mahito, haunted by his mother\'s tragic death, is relocated from Tokyo to the serene rural home of his new stepmother Natsuko, a woman who bears a striking resemblance to the boy\'s mother. As he tries to adjust, this strange new world grows even stranger following the appearance of a persistent gray heron, who perplexes and bedevils Mahito, dubbing him the \'long-awaited one.\'','Where death comes to an end, life finds a new beginning.','https://wallpapercave.com/wp/wp13231599.jpg','https://a.ltrbxd.com/resized/film-poster/4/3/8/6/9/2/438692-the-boy-and-the-heron-0-1000-0-1500-crop.jpg?v=521e114164',7.5,'Adventure,Drama','Hayao Miyazaki',124,46832867,'Won 1 Oscar. 35 wins & 84 nominations total'),(16,'Grave of the Fireflies',1988,'In the final months of World War II, 14-year-old Seita and his sister Setsuko are orphaned when their mother is killed during an air raid in Kobe, Japan. After a falling out with their aunt, they move into an abandoned bomb shelter. With no surviving relatives and their emergency rations depleted, Seita and Setsuko struggle to survive.','Where death comes to an end, life finds a new beginning.','https://i.imgur.com/MeY2jtO.jpeg','https://a.ltrbxd.com/resized/film-poster/4/4/5/5/8/44558-grave-of-the-fireflies-0-1000-0-1500-crop.jpg?v=0c61fd55f0',8.5,'Drama,War','Akiyuki Nosaka, Isao Takahata',88,516962,'3 wins'),(17,'The Cat Returns',2002,'Young Haru rescues a cat from being run over, but soon learns it\'s no ordinary feline; it happens to be the Prince of the Cats.','It\'s not so bad being a cat, now is it?','https://i.imgur.com/Cu8Bqr3.jpeg','https://a.ltrbxd.com/resized/film-poster/4/2/4/2/8/42428-the-cat-returns-0-1000-0-1500-crop.jpg?v=c88b45d6cc',7.1,'Adventure,Comedy','Aoi Hiiragi, Reiko Yoshida, Hayao Miyazaki',75,563718,'1 nomination'),(18,'When Marnie Was There',2014,'Upon being sent to live with relatives in the countryside due to an illness, an emotionally distant adolescent girl becomes obsessed with an abandoned mansion and infatuated with a girl who lives there - a girl who may or may not be real.','Promise we\'ll remain a secret, forever.','https://i.imgur.com/mV4iqyA.jpeg','https://a.ltrbxd.com/resized/film-poster/1/7/0/0/6/2/170062-when-marnie-was-there-0-1000-0-1500-crop.jpg?v=7e34859d4e',7.6,'Drama,Family','Joan G. Robinson, Keiko Niwa, Masashi Andô',103,561085,'Nominated for 1 Oscar. 4 wins & 18 nominations total'),(19,'From Up on Poppy Hill',2011,'Yokohama, 1963. Japan is picking itself up from the devastation of World War II and preparing to host the 1964 Olympics—and the mood is one of both optimism and conflict as the young generation struggles to throw off the shackles of a troubled past. Against this backdrop of hope and change, a friendship begins to blossom between high school students Umi and Shun—but a buried secret from their past emerges to cast a shadow on the future and pull them apart.','There\'s no future for people who worship the future, and forget the past.','https://i.imgur.com/uK62Efb.jpeg','https://a.ltrbxd.com/resized/sm/upload/sk/6v/xg/po/9qsW5uXwn3QBxEmKhSoseXActVw-0-1000-0-1500-crop.jpg?v=89ddfb2d7d',7.4,'Comedy,Drama','Tetsurô Sayama, Hayao Miyazaki, Keiko Niwa',91,1002895,'6 wins & 11 nominations'),(20,'Only Yesterday',1991,'In lyrical switches between the present and the past, Taeko contemplates the arc of her life, and wonders if she has been true to the dreams of her childhood self.','I\'m going on a trip with Me.','https://i.imgur.com/CVHcx17.jpeg','https://a.ltrbxd.com/resized/film-poster/4/2/6/1/3/42613-only-yesterday-0-1000-0-1500-crop.jpg?v=cc0bd36c20',7.6,'Drama,Romance','Hotaru Okamoto, Yuuko Tone, David Freedman',119,453243,'1 win & 8 nominations'),(21,'The Tale of the Princess Kaguya',2013,'Found inside a shining stalk of bamboo by an old bamboo cutter and his wife, a tiny girl grows rapidly into an exquisite young lady. The mysterious young princess enthrals all who encounter her. But, ultimately, she must confront her fate.','A princess\'s crime and punishment.','https://i.imgur.com/A0s5DWP.jpeg','https://a.ltrbxd.com/resized/film-poster/1/1/2/9/5/6/112956-the-tale-of-the-princess-kaguya-0-1000-0-1500-crop.jpg?v=2f4295660e',8,'Drama,Family','Isao Takahata, Riko Sakaguchi',137,974913,'Nominated for 1 Oscar. 13 wins & 38 nominations total');
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=126 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-08 13:25:36
