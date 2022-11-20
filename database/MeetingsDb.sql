-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: meetings
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dev_team`
--

DROP TABLE IF EXISTS `dev_team`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dev_team` (
  `id` int NOT NULL AUTO_INCREMENT,
  `devTeam_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dev_team`
--

LOCK TABLES `dev_team` WRITE;
/*!40000 ALTER TABLE `dev_team` DISABLE KEYS */;
INSERT INTO `dev_team` VALUES (1,'UI team'),(2,'React team'),(3,'Fullstack team'),(4,'QA');
/*!40000 ALTER TABLE `dev_team` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meeting`
--

DROP TABLE IF EXISTS `meeting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meeting` (
  `id` int NOT NULL AUTO_INCREMENT,
  `devTeam_id` int DEFAULT NULL,
  `start_meet` varchar(45) DEFAULT NULL,
  `end_meet` varchar(45) DEFAULT NULL,
  `description` varchar(155) DEFAULT NULL,
  `room` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meeting`
--

LOCK TABLES `meeting` WRITE;
/*!40000 ALTER TABLE `meeting` DISABLE KEYS */;
INSERT INTO `meeting` VALUES (3,2,'06/12/22 18:00','06/12/22 19:30','donation pro','404'),(4,2,'02/12/22 15:00','02/12/22 16:30','dront pro','ac3'),(5,1,'02/12/22 19:00','02/12/22 22:00','style css','generator'),(6,3,'12/12/22 15:00','12/12/22 16:00','project phone store','blurLight1'),(13,2,'1999-12-31T00:11','62650-06-22T05:52','da','ad'),(14,2,'2022-11-08T15:48','2022-11-25T13:51','da','ad'),(15,4,'31231-12-31T04:42','61321-04-05T04:03','da','ad'),(16,4,'2123-12-13T16:03','2499-03-11T02:12','קך','קך'),(17,3,'16/02/2022 16:00','16/02/2022 17:00','fulstack talking','404'),(19,1,'1999-12-31T12:12','1999-12-31T12:30','da','NY'),(20,3,'2022-12-31T16:30','2022-12-31T18:00','create vacation web','London'),(21,1,'','','',''),(22,3,'1999-12-02T12:12','1999-12-02T12:50','Create a project About Vacations','402');
/*!40000 ALTER TABLE `meeting` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-20 17:25:29
