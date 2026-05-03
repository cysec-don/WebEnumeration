"use client";

import { TerminalDisplay } from "@/components/TerminalDisplay";

const sqlDump = `-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: db.internal.vulnerableart.shop    Database: artshop_production
-- ------------------------------------------------------
-- Server version	8.0.32-0ubuntu0.22.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table \`users\`
--

DROP TABLE IF EXISTS \`users\`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE \`users\` (
  \`id\` int NOT NULL AUTO_INCREMENT,
  \`username\` varchar(50) NOT NULL,
  \`email\` varchar(100) NOT NULL,
  \`password_hash\` varchar(255) NOT NULL,
  \`full_name\` varchar(100) DEFAULT NULL,
  \`role\` enum('user','admin','super_admin') DEFAULT 'user',
  \`api_token\` varchar(64) DEFAULT NULL,
  \`created_at\` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  \`last_login\` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (\`id\`),
  UNIQUE KEY \`idx_email\` (\`email\`),
  UNIQUE KEY \`idx_username\` (\`username\`)
) ENGINE=InnoDB AUTO_INCREMENT=15420 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table \`users\`
--

LOCK TABLES \`users\` WRITE;
/*!40000 ALTER TABLE \`users\` DISABLE KEYS */;
INSERT INTO \`users\` VALUES
(1,'admin','admin@vulnerableart.shop','$2b$12$LJ3m5s2G8qX9kP7vR4wT6eY8iO0pA1sD3fG5hJ7kL9nQ2rS4tU6w','System Administrator','super_admin','demo_sk_DEMO_SECRET_KEY_12345_NOT_REAL','2020-01-15 00:00:00','2024-01-15 14:32:07'),
(2,'sarah.smith','sarah.smith@gmail.com','$2b$12$9K8J7H6G5F4D3S2A1Q9Z8X7C6V5B4N3M2L1K0J9H8G7F6D5S4A3','Sarah Smith','admin','demo_sk_q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2','2021-03-22 10:15:30','2024-01-14 09:18:42'),
(3,'john.doe','john.doe@outlook.com','$2b$12$P1O2I3U4Y5T6R7E8W9Q0A1S2D3F4G5H6J7K8L9Z0X1C2V3B4N5M6','John Doe','user','demo_sk_g2h3i4j5k6l7m8n9o0p1q2r3s4t5u6v7','2021-06-10 14:22:18','2024-01-13 16:45:33'),
(4,'emily.johnson','emily.johnson@yahoo.com','$2b$12$Z0Y9X8W7V6U5T4S3R2Q1P0O9I8U7Y6T5R4E3W2Q1A0S9D8F7G6','Emily Johnson','user',NULL,'2021-08-05 08:30:45','2024-01-12 11:22:10'),
(5,'michael.brown','m.brown@company.org','$2b$12$H4J5K6L7M8N9O0P1Q2R3S4T5U6V7W8X9Y0Z1A2B3C4D5E6F7G8','Michael Brown','user','demo_sk_w8x9y0z1a2b3c4d5e6f7g8h9i0j1k2l3','2022-01-20 16:45:12','2024-01-11 08:15:27'),
(6,'lisa.wang','lisa.wang@techcorp.io','$2b$12$M6N7O8P9Q0R1S2T3U4V5W6X7Y8Z9A0B1C2D3E4F5G6H7I8J9K0','Lisa Wang','admin','demo_sk_m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9','2022-04-15 12:10:33','2024-01-10 14:30:55'),
(7,'david.garcia','david.garcia@mail.com','$2b$12$T5U6V7W8X9Y0Z1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9','David Garcia','user',NULL,'2022-07-30 09:05:47','2024-01-09 18:42:16'),
(8,'anna.kowalski','anna.k@european-art.eu','$2b$12$F7G8H9I0J1K2L3M4N5O6P7Q8R9S0T1U2V3W4X5Y6Z7A8B9C0D1','Anna Kowalski','user','demo_sk_c2d3e4f5g6h7i8j9k0l1m2n3o4p5q6r7','2022-11-12 15:28:09','2024-01-08 12:17:38'),
(9,'robert.chen','r.chen@asiantech.cn','$2b$12$W8X9Y0Z1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S0T1U2','Robert Chen','user',NULL,'2023-02-28 07:42:51','2024-01-07 09:33:20'),
(10,'maria.santos','maria.santos@artmail.br','$2b$12$D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S0T1U2V3W4X5Y6Z7A8B9C0','Maria Santos','user','demo_sk_s2t3u4v5w6x7y8z9a0b1c2d3e4f5g6h7','2023-05-14 11:55:23','2024-01-06 20:08:45');
/*!40000 ALTER TABLE \`users\` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table \`payments\`
--

DROP TABLE IF EXISTS \`payments\`;
CREATE TABLE \`payments\` (
  \`id\` int NOT NULL AUTO_INCREMENT,
  \`user_id\` int NOT NULL,
  \`amount\` decimal(10,2) NOT NULL,
  \`card_last4\` varchar(4) DEFAULT NULL,
  \`status\` enum('pending','completed','failed','refunded') DEFAULT 'pending',
  \`stripe_charge_id\` varchar(100) DEFAULT NULL,
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table \`payments\`
--

LOCK TABLES \`payments\` WRITE;
INSERT INTO \`payments\` VALUES
(1,3,2400.00,'4242','completed','ch_1Oa2b3c4d5e6f7g8'),
(2,5,1800.00,'8910','completed','ch_2Pb3c4d5e6f7g8h9'),
(3,4,3200.00,'5678','completed','ch_3Qc4d5e6f7g8h9i0'),
(4,8,2100.00,'1234','refunded','ch_4Rd5e6f7g8h9i0j1'),
(5,9,950.00,'6789','completed','ch_5Se6f7g8h9i0j1k2');
UNLOCK TABLES;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-15  2:30:00`;

export default function DbDumpPage() {
  return (
    <div className="min-h-screen bg-slate-950 p-4 sm:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
            <span className="text-green-400 font-bold text-sm">SQL</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">db_dump.sql</h1>
            <p className="text-xs text-slate-500">4.2 MB — Last modified: 2024-01-15 02:30:00</p>
          </div>
        </div>
        <div className="bg-red-950/30 border border-red-500/20 rounded-lg p-3 mb-6">
          <p className="text-xs text-red-400">
            🔴 CRITICAL: This SQL dump contains user data including password hashes and API tokens.
            This file should NEVER be publicly accessible.
          </p>
        </div>
        <TerminalDisplay content={sqlDump} title="db_dump.sql" language="sql" />
      </div>
    </div>
  );
}
