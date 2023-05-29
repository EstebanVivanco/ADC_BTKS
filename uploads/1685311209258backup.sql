
DROP TABLE IF EXISTS `asiento`;
CREATE TABLE `asiento` (
  `id_asiento` int(11) NOT NULL AUTO_INCREMENT,
  `numero` int(11) DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  `id_usuario` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id_asiento`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


LOCK TABLES `asiento` WRITE;
INSERT INTO `asiento` VALUES (1,1,1,'\"google-oauth2|109428170022012035795\"'),(2,2,1,'\"google-oauth2|109428170022012035795\"'),(3,3,1,'\"google-oauth2|109428170022012035795\"'),(4,4,1,'\"google-oauth2|109428170022012035795\"'),(5,5,1,'\"google-oauth2|109428170022012035795\"'),(6,6,1,'\"google-oauth2|109428170022012035795\"'),(7,7,1,'\"google-oauth2|109428170022012035795\"'),(8,8,1,'\"google-oauth2|109428170022012035795\"'),(9,9,1,'\"google-oauth2|109428170022012035795\"'),(10,10,1,'\"google-oauth2|109428170022012035795\"');
UNLOCK TABLES;
