-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 27, 2023 at 08:32 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `1pos`
--

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `productid` int(11) NOT NULL,
  `type` varchar(50) NOT NULL DEFAULT 'product',
  `product_name` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` float(10,2) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `categoryOrder` int(11) NOT NULL,
  `active` int(11) NOT NULL DEFAULT 0,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `categoryOrder`, `active`, `created_at`) VALUES
(1, 'Screen Protector', 2, 1, '2023-10-02 15:23:45'),
(2, 'Accessories', 5, 1, '2023-10-25 22:29:15'),
(3, 'Pouches', 3, 1, '2023-10-02 15:24:51'),
(4, 'Cases', 1, 1, '2023-10-02 15:24:51');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `customerName` varchar(255) NOT NULL,
  `street` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `dob` date NOT NULL,
  `points` float(10,2) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `customerName`, `street`, `city`, `phone`, `email`, `dob`, `points`, `created_at`) VALUES
(1, 'Vasant', '29 Maverick Cres', 'Brampton', '6478982749', 'vasantshrma10@gmail.com', '1996-12-10', 0.00, '2023-09-21 00:59:35'),
(2, 'Sahil', 'Bramlea', 'Brampton', '7878787878', 'sahil@gmail.com', '1996-10-10', 0.00, '2023-09-29 23:44:29'),
(3, 'Jaiswal', '29 Maverick Cres', 'Brampton', '7898789870', 'jaiswal@gmail.com', '1996-04-05', 20.00, '2023-09-29 23:46:31');

-- --------------------------------------------------------

--
-- Table structure for table `logs`
--

CREATE TABLE `logs` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `clockedin` datetime NOT NULL,
  `clockedout` datetime DEFAULT NULL,
  `created` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `logs`
--

INSERT INTO `logs` (`id`, `userid`, `clockedin`, `clockedout`, `created`) VALUES
(1, 14, '2023-10-15 08:36:48', '2023-10-26 14:55:51', '2023-10-15 15:36:48'),
(2, 14, '2023-10-16 08:36:48', '2023-10-26 14:55:51', '2023-10-16 15:36:48'),
(3, 12, '2023-10-16 08:36:48', NULL, '2023-10-16 15:36:48'),
(4, 12, '2023-10-15 08:36:48', '2023-10-15 19:38:51', '2023-10-15 15:36:48'),
(5, 14, '2023-10-17 13:42:28', '2023-10-26 14:55:51', '2023-10-17 13:42:28'),
(6, 14, '2023-10-22 14:07:17', '2023-10-26 14:55:51', '2023-10-22 14:07:17'),
(7, 14, '2023-10-24 22:56:23', '2023-10-26 14:55:51', '2023-10-24 22:56:23'),
(8, 14, '2023-10-25 07:28:17', '2023-10-26 14:55:51', '2023-10-25 07:28:17'),
(9, 14, '2023-10-26 15:04:20', NULL, '2023-10-26 15:04:20');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `customerid` int(11) DEFAULT NULL,
  `orderId` varchar(255) NOT NULL,
  `modeOfPayment` varchar(255) DEFAULT NULL,
  `card` decimal(10,2) DEFAULT 0.00,
  `giftcard` decimal(10,2) DEFAULT 0.00,
  `cash` decimal(10,2) DEFAULT 0.00,
  `discount` decimal(10,2) DEFAULT 0.00,
  `pointsRedeem` decimal(10,2) DEFAULT 0.00,
  `totalItems` int(11) DEFAULT NULL,
  `subtotal` decimal(10,2) DEFAULT 0.00,
  `tax` decimal(10,2) DEFAULT 0.00,
  `total` decimal(10,2) DEFAULT 0.00,
  `due` decimal(10,2) DEFAULT 0.00,
  `changeamount` float(10,2) NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `dispute` int(11) NOT NULL DEFAULT 0,
  `type` varchar(50) NOT NULL DEFAULT 'product',
  `notes` text NOT NULL DEFAULT 'NC',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `userid`, `customerid`, `orderId`, `modeOfPayment`, `card`, `giftcard`, `cash`, `discount`, `pointsRedeem`, `totalItems`, `subtotal`, `tax`, `total`, `due`, `changeamount`, `status`, `dispute`, `type`, `notes`, `created_at`) VALUES
(1, 14, 1, '9101', '[{\"amount\":\"536.75\",\"modeofpayment\":\"Cash\"}]', 0.00, 0.00, 536.75, 0.00, 0.00, 8, 475.00, 61.75, 536.75, 0.00, 0.00, 'Complete', 0, 'product', 'NC', '2023-10-25 10:27:45'),
(2, 14, 1, '9102', '[{\"amount\":\"100\",\"modeofpayment\":\"Cash\"},{\"amount\":\"69.50\",\"modeofpayment\":\"Credit\\/Debit Card\"}]', 69.50, 0.00, 100.00, 0.00, 0.00, 1, 150.00, 19.50, 169.50, 0.00, 0.00, 'Complete', 0, 'product', 'NC', '2023-10-25 10:28:14'),
(3, 14, 0, '9103', '[{\"amount\":\"50\",\"modeofpayment\":\"Cash\"},{\"amount\":\"119.50\",\"modeofpayment\":\"Pay Later\"}]', 0.00, 0.00, 50.00, 0.00, 0.00, 1, 150.00, 19.50, 169.50, 119.50, 0.00, 'Pay Later', 0, 'product', 'NC', '2023-10-25 10:29:07'),
(4, 14, 2, '9104', '[{\"amount\":150,\"modeofpayment\":\"Cash\"}]', 0.00, 0.00, 150.00, 0.00, 0.00, 1, 150.00, 0.00, 150.00, 0.00, 0.00, 'Buy', 0, 'buy', 'used like new', '2023-10-25 10:29:43'),
(5, 14, 3, '9105', '[{\"amount\":282.5,\"modeofpayment\":\"Cash\"}]', 0.00, 0.00, 282.50, 0.00, 0.00, 1, 250.00, 32.50, 282.50, 0.00, 0.00, 'Complete', 0, 'sell', 'sold', '2023-10-25 10:47:52'),
(6, 14, 3, '9106', '[{\"amount\":20,\"modeofpayment\":\"Points Redeem\"},{\"amount\":\"36.50\",\"modeofpayment\":\"Cash\"}]', 0.00, 0.00, 36.50, 0.00, 20.00, 1, 50.00, 6.50, 56.50, 0.00, 0.00, 'Complete', 0, 'product', 'NC', '2023-10-25 12:31:55'),
(7, 14, 0, '9107', '[{\"amount\":\"135.60\",\"modeofpayment\":\"Cash\"}]', 0.00, 0.00, 135.60, 0.00, 0.00, 1, 120.00, 15.60, 135.60, 0.00, 0.00, 'Complete', 0, 'product', 'NC', '2023-10-25 13:31:23'),
(8, 14, 0, '9108', '[{\"amount\":\"316.40\",\"modeofpayment\":\"Cash\"}]', 0.00, 0.00, 316.40, 0.00, 0.00, 2, 280.00, 36.40, 316.40, 0.00, 0.00, 'Complete', 0, 'product', 'NC', '2023-10-25 13:38:26'),
(9, 14, 0, '9109', '[{\"amount\":\"84.75\",\"modeofpayment\":\"Cash\"}]', 0.00, 0.00, 84.75, 0.00, 0.00, 1, 75.00, 9.75, 84.75, 0.00, 0.00, 'Complete', 0, 'product', 'NC', '2023-10-25 13:39:41'),
(10, 14, 0, '91010', '[{\"amount\":\"271.20\",\"modeofpayment\":\"Credit\\/Debit Card\"}]', 271.20, 0.00, 0.00, 0.00, 0.00, 2, 240.00, 31.20, 271.20, 0.00, 0.00, 'Complete', 0, 'product', 'NC', '2023-10-25 13:42:10'),
(11, 14, 0, '91011', '[{\"amount\":\"135.60\",\"modeofpayment\":\"Credit\\/Debit Card\"}]', 135.60, 0.00, 0.00, 0.00, 0.00, 2, 120.00, 15.60, 135.60, 0.00, 0.00, 'Complete', 0, 'product', 'NC', '2023-10-25 13:44:01'),
(12, 14, 0, '91012', '[{\"amount\":\"214.70\",\"modeofpayment\":\"Cash\"}]', 0.00, 0.00, 214.70, 0.00, 0.00, 2, 190.00, 24.70, 214.70, 0.00, 0.00, 'Complete', 0, 'product', 'NC', '2023-10-25 13:47:24'),
(13, 14, 0, '91013', '[{\"amount\":\"56.50\",\"modeofpayment\":\"Credit\\/Debit Card\"}]', 56.50, 0.00, 0.00, 0.00, 0.00, 1, 50.00, 6.50, 56.50, 0.00, 0.00, 'Complete', 0, 'product', 'NC', '2023-10-25 13:51:15'),
(14, 14, 0, '91014', '[{\"amount\":\"79.10\",\"modeofpayment\":\"Cash\"}]', 0.00, 0.00, 79.10, 0.00, 0.00, 1, 70.00, 9.10, 79.10, 0.00, 0.00, 'Complete', 0, 'product', 'NC', '2023-10-25 13:52:24'),
(15, 14, 0, '91015', '[{\"amount\":\"169.50\",\"modeofpayment\":\"Cash\"}]', 0.00, 0.00, 169.50, 0.00, 0.00, 1, 150.00, 19.50, 169.50, 0.00, 0.00, 'Complete', 0, 'product', 'NC', '2023-10-25 13:53:10'),
(16, 14, 0, '91016', '[{\"amount\":\"90.40\",\"modeofpayment\":\"Cash\"}]', 0.00, 0.00, 90.40, 0.00, 0.00, 1, 80.00, 10.40, 90.40, 0.00, 0.00, 'Complete', 0, 'product', 'NC', '2023-10-25 13:54:07'),
(17, 14, 0, '91017', '[{\"amount\":\"45.20\",\"modeofpayment\":\"Cash\"}]', 0.00, 0.00, 45.20, 0.00, 0.00, 1, 40.00, 5.20, 45.20, 0.00, 0.00, 'Complete', 0, 'product', 'NC', '2023-10-25 13:55:27'),
(18, 14, 0, '91018', '[{\"amount\":\"79.10\",\"modeofpayment\":\"Cash\"}]', 0.00, 0.00, 79.10, 0.00, 0.00, 1, 70.00, 9.10, 79.10, 0.00, 0.00, 'Complete', 0, 'product', 'NC', '2023-10-25 13:58:01'),
(19, 14, 0, '91019', '[{\"amount\":\"158.20\",\"modeofpayment\":\"Cash\"}]', 0.00, 0.00, 158.20, 0.00, 0.00, 1, 140.00, 18.20, 158.20, 0.00, 0.00, 'Complete', 0, 'product', 'NC', '2023-10-25 13:58:37'),
(20, 14, 0, '91020', '[{\"amount\":\"39.55\",\"modeofpayment\":\"Cash\"}]', 0.00, 0.00, 39.55, 0.00, 0.00, 1, 35.00, 4.55, 39.55, 0.00, 0.00, 'Complete', 0, 'product', 'NC', '2023-10-25 14:00:31'),
(21, 14, 0, '91021', '[{\"amount\":\"79.10\",\"modeofpayment\":\"Cash\"}]', 0.00, 0.00, 79.10, 0.00, 0.00, 1, 70.00, 9.10, 79.10, 0.00, 0.00, 'Complete', 0, 'product', 'NC', '2023-10-25 14:02:13'),
(22, 14, 0, '91022', '[{\"amount\":\"56.50\",\"modeofpayment\":\"Cash\"}]', 0.00, 0.00, 56.50, 0.00, 0.00, 1, 50.00, 6.50, 56.50, 0.00, 0.00, 'Complete', 0, 'product', 'NC', '2023-10-25 14:04:18'),
(23, 14, 0, '91023', '[{\"amount\":\"73.45\",\"modeofpayment\":\"Cash\"}]', 0.00, 0.00, 73.45, 0.00, 0.00, 2, 65.00, 8.45, 73.45, 0.00, 0.00, 'Complete', 0, 'product', 'NC', '2023-10-25 14:05:59'),
(24, 14, 0, '91024', '[{\"amount\":\"96.05\",\"modeofpayment\":\"Cash\"}]', 0.00, 0.00, 96.05, 0.00, 0.00, 2, 85.00, 11.05, 96.05, 0.00, 0.00, 'Complete', 0, 'product', 'NC', '2023-10-25 14:06:42'),
(25, 14, 0, '91025', '[{\"amount\":\"45.20\",\"modeofpayment\":\"Cash\"}]', 0.00, 0.00, 45.20, 0.00, 0.00, 1, 40.00, 5.20, 45.20, 0.00, 0.00, 'Complete', 0, 'product', 'NC', '2023-10-25 14:08:31'),
(26, 14, 0, '91026', '[{\"amount\":\"158.20\",\"modeofpayment\":\"Cash\"}]', 0.00, 0.00, 158.20, 0.00, 0.00, 1, 140.00, 18.20, 158.20, 0.00, 0.00, 'Complete', 0, 'product', 'NC', '2023-10-25 14:09:50'),
(27, 14, 0, '91027', '[{\"amount\":\"79.10\",\"modeofpayment\":\"Cash\"}]', 0.00, 0.00, 79.10, 0.00, 0.00, 1, 70.00, 9.10, 79.10, 0.00, 0.00, 'Complete', 0, 'product', 'NC', '2023-10-25 14:27:52'),
(28, 14, 0, '91028', '[{\"amount\":\"56.50\",\"modeofpayment\":\"Cash\"}]', 0.00, 0.00, 56.50, 0.00, 0.00, 1, 50.00, 6.50, 56.50, 0.00, 0.00, 'Complete', 0, 'product', 'NC', '2023-10-25 14:30:08'),
(29, 14, 0, '91029', '[{\"amount\":\"45.20\",\"modeofpayment\":\"Cash\"}]', 0.00, 0.00, 45.20, 0.00, 0.00, 1, 40.00, 5.20, 45.20, 0.00, 0.00, 'Complete', 0, 'product', 'NC', '2023-10-25 14:30:48'),
(30, 14, 0, '91030', '[{\"amount\":\"56.50\",\"modeofpayment\":\"Cash\"}]', 0.00, 0.00, 56.50, 0.00, 0.00, 1, 50.00, 6.50, 56.50, 0.00, 0.00, 'Complete', 0, 'product', 'NC', '2023-10-25 14:38:50'),
(31, 14, 0, '91031', '[{\"amount\":\"90.40\",\"modeofpayment\":\"Cash\"}]', 0.00, 0.00, 90.40, 0.00, 0.00, 1, 80.00, 10.40, 90.40, 0.00, 0.00, 'Complete', 0, 'product', 'NC', '2023-10-25 14:39:34'),
(32, 14, 0, '91032', '[{\"amount\":\"79.10\",\"modeofpayment\":\"Cash\"}]', 0.00, 0.00, 79.10, 0.00, 0.00, 1, 70.00, 9.10, 79.10, 0.00, 0.00, 'Complete', 0, 'product', 'NC', '2023-10-25 14:40:33'),
(33, 14, 0, '91033', '[{\"amount\":\"197.75\",\"modeofpayment\":\"Cash\"}]', 0.00, 0.00, 197.75, 0.00, 0.00, 1, 175.00, 22.75, 197.75, 0.00, 0.00, 'Complete', 0, 'product', 'NC', '2023-10-25 22:45:04'),
(34, 14, 0, '91034', '[{\"amount\":\"152.55\",\"modeofpayment\":\"Cash\"}]', 0.00, 0.00, 152.55, 0.00, 0.00, 2, 135.00, 17.55, 152.55, 0.00, 0.00, 'Complete', 0, 'product', 'NC', '2023-10-25 22:45:34'),
(35, 14, 0, '91035', '[{\"amount\":\"152.55\",\"modeofpayment\":\"Cash\"}]', 0.00, 0.00, 152.55, 0.00, 0.00, 2, 135.00, 17.55, 152.55, 0.00, 0.00, 'Complete', 0, 'product', 'NC', '2023-10-25 22:46:06'),
(36, 14, 0, '91036', '[{\"amount\":\"719.81\",\"modeofpayment\":\"Cash\"}]', 0.00, 0.00, 719.81, 0.00, 0.00, 10, 637.00, 82.81, 719.81, 0.00, 0.00, 'Complete', 0, 'product', 'NC', '2023-10-27 17:29:18'),
(37, 14, 1, '91037', '[{\"amount\":130,\"modeofpayment\":\"Cash\"}]', 0.00, 0.00, 130.00, 0.00, 0.00, 1, 130.00, 0.00, 130.00, 0.00, 0.00, 'Buy', 0, 'buy', 'used like new', '2023-10-27 17:49:43');

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` int(10) UNSIGNED NOT NULL,
  `order_id` varchar(100) NOT NULL,
  `product_id` int(10) UNSIGNED DEFAULT NULL,
  `product_type` varchar(50) NOT NULL DEFAULT 'product',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` decimal(8,2) UNSIGNED DEFAULT NULL,
  `subtotal` decimal(8,2) UNSIGNED DEFAULT NULL,
  `created` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=COMPACT;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`id`, `order_id`, `product_id`, `product_type`, `name`, `quantity`, `price`, `subtotal`, `created`) VALUES
(1, '1', 2, 'product', 'Tempered Glass', 1, 50.00, 50.00, '2023-10-25 06:27:45'),
(2, '1', 1, 'product', 'Tempered Glass', 1, 35.00, 35.00, '2023-10-25 06:27:45'),
(3, '1', 3, 'product', 'Tempered Glass', 1, 40.00, 40.00, '2023-10-25 06:27:45'),
(4, '1', 5, 'product', 'Charger', 1, 50.00, 50.00, '2023-10-25 06:27:45'),
(5, '1', 6, 'product', 'Headsets', 1, 70.00, 70.00, '2023-10-25 06:27:45'),
(6, '1', 11, 'product', 'Test Case Normal', 1, 50.00, 50.00, '2023-10-25 06:27:45'),
(7, '1', 8, 'product', 'Pouches', 2, 70.00, 140.00, '2023-10-25 06:27:45'),
(8, '1', 10, 'product', 'Soft Case', 1, 40.00, 40.00, '2023-10-25 06:27:45'),
(9, '2', 5, 'product', 'Charger', 3, 50.00, 150.00, '2023-10-25 06:28:14'),
(10, '3', 0, 'product', 'screen repair', 1, 150.00, 150.00, '2023-10-25 06:29:07'),
(11, '4', 0, 'phonebuy', 'Iphone 13 mini-7874587458', 1, 150.00, 150.00, '2023-10-25 06:29:43'),
(12, '5', 0, 'phonesell', 'iphone 13 mini-7874587458', 1, 250.00, 250.00, '2023-10-25 06:47:52'),
(13, '6', 4, 'product', 'Lens Protector', 2, 25.00, 50.00, '2023-10-25 08:31:55'),
(14, '7', 3, 'product', 'Tempered Glass', 3, 40.00, 120.00, '2023-10-25 09:31:23'),
(15, '8', 7, 'product', 'Car Mount', 2, 70.00, 140.00, '2023-10-25 09:38:26'),
(16, '8', 6, 'product', 'Headsets', 2, 70.00, 140.00, '2023-10-25 09:38:26'),
(17, '9', 4, 'product', 'Lens Protector', 3, 25.00, 75.00, '2023-10-25 09:39:41'),
(18, '10', 6, 'product', 'Headsets', 2, 70.00, 140.00, '2023-10-25 09:42:10'),
(19, '10', 5, 'product', 'Charger', 2, 50.00, 100.00, '2023-10-25 09:42:10'),
(20, '11', 7, 'product', 'Car Mount', 1, 70.00, 70.00, '2023-10-25 09:44:01'),
(21, '11', 5, 'product', 'Charger', 1, 50.00, 50.00, '2023-10-25 09:44:01'),
(22, '12', 8, 'product', 'Pouches', 2, 70.00, 140.00, '2023-10-25 09:47:24'),
(23, '12', 11, 'product', 'Test Case Normal', 1, 50.00, 50.00, '2023-10-25 09:47:24'),
(24, '13', 5, 'product', 'Charger', 1, 50.00, 50.00, '2023-10-25 09:51:15'),
(25, '14', 7, 'product', 'Car Mount', 1, 70.00, 70.00, '2023-10-25 09:52:24'),
(26, '15', 2, 'product', 'Tempered Glass', 3, 50.00, 150.00, '2023-10-25 09:53:10'),
(27, '16', 10, 'product', 'Soft Case', 2, 40.00, 80.00, '2023-10-25 09:54:07'),
(28, '17', 9, 'product', 'Hard Case', 1, 40.00, 40.00, '2023-10-25 09:55:27'),
(29, '18', 8, 'product', 'Pouches', 1, 70.00, 70.00, '2023-10-25 09:58:01'),
(30, '19', 12, 'product', 'New Edit', 2, 70.00, 140.00, '2023-10-25 09:58:37'),
(31, '20', 1, 'product', 'Tempered Glass', 1, 35.00, 35.00, '2023-10-25 10:00:31'),
(32, '21', 8, 'product', 'Pouches', 1, 70.00, 70.00, '2023-10-25 10:02:13'),
(33, '22', 5, 'product', 'Charger', 1, 50.00, 50.00, '2023-10-25 10:04:18'),
(34, '23', 4, 'product', 'Lens Protector', 1, 25.00, 25.00, '2023-10-25 10:05:59'),
(35, '23', 3, 'product', 'Tempered Glass', 1, 40.00, 40.00, '2023-10-25 10:05:59'),
(36, '24', 1, 'product', 'Tempered Glass', 1, 35.00, 35.00, '2023-10-25 10:06:42'),
(37, '24', 2, 'product', 'Tempered Glass', 1, 50.00, 50.00, '2023-10-25 10:06:42'),
(38, '25', 10, 'product', 'Soft Case', 1, 40.00, 40.00, '2023-10-25 10:08:31'),
(39, '26', 8, 'product', 'Pouches', 2, 70.00, 140.00, '2023-10-25 10:09:50'),
(40, '27', 8, 'product', 'Pouches', 1, 70.00, 70.00, '2023-10-25 10:27:52'),
(41, '28', 5, 'product', 'Charger', 1, 50.00, 50.00, '2023-10-25 10:30:08'),
(42, '29', 10, 'product', 'Soft Case', 1, 40.00, 40.00, '2023-10-25 10:30:48'),
(43, '30', 5, 'product', 'Charger', 1, 50.00, 50.00, '2023-10-25 10:38:50'),
(44, '31', 10, 'product', 'Soft Case', 2, 40.00, 80.00, '2023-10-25 10:39:34'),
(45, '32', 8, 'product', 'Pouches', 1, 70.00, 70.00, '2023-10-25 10:40:33'),
(46, '33', 1, 'product', 'Tempered Glass', 5, 35.00, 175.00, '2023-10-25 18:45:04'),
(47, '34', 2, 'product', 'Tempered Glass', 2, 50.00, 100.00, '2023-10-25 18:45:34'),
(48, '34', 1, 'product', 'Tempered Glass', 1, 35.00, 35.00, '2023-10-25 18:45:34'),
(49, '35', 2, 'product', 'Tempered Glass', 2, 50.00, 100.00, '2023-10-25 18:46:06'),
(50, '35', 1, 'product', 'Tempered Glass', 1, 35.00, 35.00, '2023-10-25 18:46:06'),
(51, '36', 1, 'product', 'Tempered Glass', 1, 35.00, 35.00, '2023-10-27 13:29:18'),
(52, '36', 13, 'product', 'Hard Tempered Glass', 1, 100.00, 100.00, '2023-10-27 13:29:18'),
(53, '36', 2, 'product', 'Tempered Glass', 2, 50.00, 100.00, '2023-10-27 13:29:18'),
(54, '36', 3, 'product', 'Tempered Glass', 1, 40.00, 40.00, '2023-10-27 13:29:18'),
(55, '36', 4, 'product', 'Lens Protector', 2, 25.00, 50.00, '2023-10-27 13:29:18'),
(56, '36', 5, 'product', 'Charger', 2, 50.00, 100.00, '2023-10-27 13:29:18'),
(57, '36', 7, 'product', 'Car Mount', 1, 70.00, 70.00, '2023-10-27 13:29:18'),
(58, '36', 12, 'product', 'New Edit', 1, 70.00, 70.00, '2023-10-27 13:29:18'),
(59, '36', 23219, 'product', '18W USB-C POWER ADAPTER (RETAIL PACK IP)', 1, 2.00, 2.00, '2023-10-27 13:29:18'),
(60, '36', 6, 'product', 'Headsets', 1, 70.00, 70.00, '2023-10-27 13:29:18'),
(61, '37', 0, 'phonebuy', 'Iphone 13 mini-1245412541', 1, 130.00, 130.00, '2023-10-27 13:49:43');

-- --------------------------------------------------------

--
-- Table structure for table `phones`
--

CREATE TABLE `phones` (
  `id` int(11) NOT NULL,
  `orderId` int(11) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `imei` varchar(100) NOT NULL,
  `price` float(10,2) NOT NULL,
  `documentType` varchar(100) NOT NULL,
  `documentNumber` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL,
  `customerId` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `notes` longtext DEFAULT NULL,
  `created` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `phones`
--

INSERT INTO `phones` (`id`, `orderId`, `phone`, `imei`, `price`, `documentType`, `documentNumber`, `userId`, `customerId`, `status`, `notes`, `created`) VALUES
(1, 4, 'Iphone 13 mini', '7874587458', 150.00, 'dl', '4125412541', 14, 2, 0, 'used like new', '2023-10-25 06:29:43'),
(2, 5, 'iphone 13 mini', '7874587458', 250.00, 'dl', '9788789', 14, 3, 1, 'sold', '2023-10-25 06:47:52'),
(3, 37, 'Iphone 13 mini', '1245412541', 130.00, 'dl', '1212121212', 14, 1, 0, 'used like new', '2023-10-27 13:49:43');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) UNSIGNED NOT NULL,
  `category_id` int(11) UNSIGNED DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `model_no` varchar(50) DEFAULT NULL,
  `upc` varchar(50) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` decimal(8,2) DEFAULT 0.00,
  `product_stock` varchar(100) NOT NULL,
  `sku` varchar(20) NOT NULL,
  `views` int(11) DEFAULT 0,
  `active` int(1) DEFAULT 1,
  `product_order` int(11) NOT NULL,
  `created` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `category_id`, `name`, `model_no`, `upc`, `slug`, `image`, `price`, `product_stock`, `sku`, `views`, `active`, `product_order`, `created`) VALUES
(1, 1, 'Tempered Glass', NULL, '', NULL, 'tempered-glass.jpg', 35.00, '898', '', 0, 1, 1, '2023-10-25 18:38:54'),
(2, 1, 'Tempered Glass', NULL, '', NULL, 'tempered-glass.jpg', 50.00, '996', '', 0, 1, 2, '2023-10-02 15:26:56'),
(3, 1, 'Tempered Glass', NULL, '', NULL, 'tempered-glass.jpg', 40.00, '999', '', 0, 1, 3, '2023-10-02 15:26:56'),
(4, 1, 'Lens Protector', NULL, '', NULL, 'lens-protector.jpg', 25.00, '998', '', 0, 1, 4, '2023-10-02 15:26:56'),
(5, 2, 'Charger', NULL, '', NULL, 'charger.jpg', 50.00, '998', '', 0, 1, 0, '2023-10-02 15:26:56'),
(6, 2, 'Headsets', NULL, '', NULL, 'headset.jpg', 70.00, '999', '', 0, 1, 0, '2023-10-02 15:26:56'),
(7, 2, 'Car Mount', NULL, '', NULL, 'car-mount.jpeg', 70.00, '999', '', 0, 1, 0, '2023-10-02 15:26:56'),
(8, 3, 'Pouches', NULL, '', NULL, 'pouches.jpg', 70.00, '1000', '', 0, 1, 0, '2023-10-02 15:26:56'),
(9, 4, 'Hard Case', NULL, '', NULL, 'hard-case.jpg', 40.00, '1000', '', 0, 1, 0, '2023-10-02 15:26:56'),
(10, 4, 'Soft Case', NULL, '', NULL, 'soft-case.jpg', 40.00, '1000', '', 0, 1, 0, '2023-10-02 15:26:56'),
(11, 3, 'Test Case Normal', NULL, '', NULL, '652f3cd49ee2c_71v-GfltDgL._AC_SL1500_.jpg', 50.00, '1000', '', 0, 1, 1, '2023-10-17 22:03:06'),
(12, 2, 'New Edit', NULL, '', NULL, '652f3e614fcc9_sym.png', 70.00, '999', '', 0, 1, 2, '2023-10-17 22:11:11'),
(13, 1, 'Hard Tempered Glass', NULL, NULL, NULL, '653ac24055a0b_r-gold-sam-tab-s5e-t720-360-rotating-cover.jpg', 100.00, '999', '', 0, 1, 5, '2023-10-26 15:47:19'),
(14, 1, 'Product 1', NULL, NULL, NULL, '653ac4d24d22c_black-sam-tab-s5e-t720-360-rotating-cover.jpg', 90.00, '1000', '', 0, 1, 6, '2023-10-26 15:58:21'),
(15, 1, 'Product2', NULL, NULL, NULL, '653ac4e5eed69_n-blue-sam-tab-s5e-t720-360-rotating-cover.jpg', 80.00, '1000', '', 0, 1, 7, '2023-10-26 15:58:37'),
(16, 1, 'PRoduct 3', NULL, NULL, NULL, '653ac4f5af32c_pink-sam-tab-s5e-t720-360-rotating-cover.jpg', 70.00, '500', '', 0, 1, 8, '2023-10-26 15:58:56'),
(17, 1, 'Product4', NULL, NULL, NULL, '653ac51fe47e5_purple-sam-tab-s5e-t720-360-rotating-cover.jpg', 60.00, '400', '', 0, 1, 9, '2023-10-26 15:59:32'),
(18, 1, 'Product 5', NULL, NULL, NULL, '653ac52d1aced_red-sam-tab-s5e-t720-360-rotating-cover.jpg', 110.00, '100', '', 0, 1, 10, '2023-10-26 15:59:48');

-- --------------------------------------------------------

--
-- Table structure for table `refunds`
--

CREATE TABLE `refunds` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `orderId` int(11) NOT NULL,
  `orderNumber` int(11) NOT NULL,
  `amount` float(10,2) NOT NULL,
  `items` longtext NOT NULL,
  `note` text NOT NULL,
  `created` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `refunds`
--

INSERT INTO `refunds` (`id`, `userid`, `orderId`, `orderNumber`, `amount`, `items`, `note`, `created`) VALUES
(1, 14, 9, 9109, 45.20, '[{\"item_id\":25,\"product_id\":10,\"item_name\":\"Soft Case\",\"item_quantity\":3,\"item_price\":40,\"item_subtotal\":120,\"item_created\":\"2023-10-17 13:41:15\"},{\"item_id\":24,\"product_id\":9,\"item_name\":\"Hard Case\",\"item_quantity\":3,\"item_price\":40,\"item_subtotal\":120,\"item_created\":\"2023-10-17 13:41:15\"}]', 'Case', '2023-10-17 16:02:14');

-- --------------------------------------------------------

--
-- Table structure for table `reports`
--

CREATE TABLE `reports` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `bills` text NOT NULL,
  `total` float(10,2) NOT NULL,
  `type` varchar(20) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reports`
--

INSERT INTO `reports` (`id`, `user_id`, `bills`, `total`, `type`, `created_at`) VALUES
(1, 14, '{\"5c\":\"1\",\"10c\":\"5\",\"25c\":\"6\",\"1d\":\"1\",\"2d\":\"5\",\"5d\":\"7\",\"10d\":\"1\",\"20d\":\"0\",\"50d\":\"0\",\"100d\":\"0\"}', 58.05, 'clock-in', '2023-10-12 16:18:16'),
(2, 14, '{\"5c\":1,\"10c\":1,\"25c\":2,\"1d\":3,\"2d\":4,\"5d\":1,\"10d\":1,\"20d\":1,\"50d\":0,\"100d\":0}', 46.65, 'clock-in', '2023-10-13 15:23:59'),
(3, 14, '{\"5c\":\"10\",\"10c\":\"10\",\"25c\":\"10\",\"1d\":\"16\",\"2d\":\"10\",\"5d\":\"10\",\"10d\":\"2\",\"20d\":\"2\",\"50d\":0,\"100d\":0}', 150.00, 'clock-in', '2023-10-14 00:04:14'),
(4, 14, '{\"5c\":1,\"10c\":2,\"25c\":3,\"1d\":\"5\",\"2d\":2,\"5d\":\"4\",\"10d\":2,\"20d\":5,\"50d\":\"0\",\"100d\":\"0\"}', 150.00, 'clock-in', '2023-10-16 15:04:42'),
(5, 14, '{\"5c\":\"1\",\"10c\":\"2\",\"25c\":\"3\",\"1d\":\"10\",\"2d\":\"12\",\"5d\":\"5\",\"10d\":\"5\",\"20d\":\"2\",\"50d\":\"0\",\"100d\":\"0\"}', 150.00, 'clock-in', '2023-10-17 13:40:34'),
(6, 14, '{\"5c\":5,\"10c\":5,\"25c\":5,\"1d\":8,\"2d\":10,\"5d\":10,\"10d\":5,\"20d\":1,\"50d\":0,\"100d\":0}', 150.00, 'clock-in', '2023-10-18 14:00:25'),
(7, 14, '{\"5c\":1,\"10c\":1,\"25c\":1,\"1d\":5,\"2d\":5,\"5d\":5,\"10d\":5,\"20d\":1,\"50d\":0,\"100d\":0}', 110.40, 'clock-in', '2023-10-19 16:04:37'),
(8, 14, '{\"5c\":10,\"10c\":10,\"25c\":14,\"1d\":10,\"2d\":10,\"5d\":5,\"10d\":2,\"20d\":1,\"50d\":1,\"100d\":0}', 150.00, 'clock-in', '2023-10-20 13:15:04'),
(11, 14, '{\"5c\":10,\"10c\":10,\"25c\":10,\"1d\":1,\"2d\":10,\"5d\":5,\"10d\":10,\"20d\":0,\"50d\":0,\"100d\":0}', 150.00, 'clock-in', '2023-10-22 00:00:00'),
(12, 14, '{\"5c\":12,\"10c\":12,\"25c\":12,\"1d\":12,\"2d\":12,\"5d\":12,\"10d\":12,\"20d\":1,\"50d\":\"\",\"100d\":\"\"}', 240.80, 'clock-in', '2023-10-24 00:00:00'),
(13, 14, '{\"5c\":10,\"10c\":10,\"25c\":10,\"1d\":6,\"2d\":5,\"5d\":20,\"10d\":1,\"20d\":1,\"50d\":0,\"100d\":0}', 150.00, 'clock-in', '2023-10-25 00:00:00'),
(14, 14, '{\"5c\":5,\"10c\":5,\"25c\":5,\"1d\":5,\"2d\":9,\"5d\":5,\"10d\":5,\"20d\":5,\"50d\":0,\"100d\":0}', 200.00, 'clock-in', '2023-10-26 00:00:00'),
(15, 14, '{\"5c\":10,\"10c\":10,\"25c\":10,\"1d\":11,\"2d\":10,\"5d\":5,\"10d\":5,\"20d\":2,\"50d\":0,\"100d\":0}', 150.00, 'clock-in', '2023-10-27 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` int(11) NOT NULL,
  `storename` varchar(255) NOT NULL,
  `storenumber` int(111) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `postalcode` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `timing1` varchar(50) NOT NULL,
  `timing2` varchar(50) NOT NULL,
  `timing3` varchar(50) NOT NULL,
  `repairfooter` longtext NOT NULL,
  `salefooter` longtext NOT NULL,
  `phonefooter` longtext NOT NULL,
  `modified` datetime NOT NULL DEFAULT current_timestamp(),
  `created` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `storename`, `storenumber`, `address`, `city`, `state`, `postalcode`, `phone`, `email`, `timing1`, `timing2`, `timing3`, `repairfooter`, `salefooter`, `phonefooter`, `modified`, `created`) VALUES
(1, 'Mobile Care', 910, '17600 Yonge St. Unit #E19', 'New Market', 'ON', 'L3Y', '587-289-289', 'mobilecare@gmail.com', '10Am-9Pm', '10Am-9Pm', '10Am-9Pm', 'Mobile Care is not responsible for any problems or issues other than ones repaired or upgraded as well as any missing or damaged equipment (sim cards, cases, etc.,) after it leaves our store. Please retain your receipt when picking the phone up as without a receipt we are not responsible for any products. Please check your product before you leave the store. Mobile Care is not responsible for any devices that are not picked up within 30 days from the date of receipt. By signing here customer acknowledges this agreement and understands all the terms and conditions stated above.\nSignature: _______________________________________________________________\nTHANK YOU', 'HST #:\n*No Refund, Exchange only within 7 days of purchase.\nMobile Care is not responsible for any problems or issues other than ones repaired or upgraded as well as any missing or damage equipment (sim cards, cases, etc.,) after it left our store. Please retain your receipt when picking the phone up as without receipt we are not responsible for any products. Please check your product before you leave the store. Mobile Care is not responsible for any devices that are not picked up within 30 days from date on receipt. By signing here customer acknowledges this agreement and understand all the terms and conditions stated above.\nTHANK YOU', 'Mobile is not responsible', '2023-10-26 18:54:27', '2023-10-24 23:27:17');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `password` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `role` varchar(20) NOT NULL,
  `username` varchar(100) NOT NULL,
  `token` text NOT NULL,
  `created` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `userid`, `password`, `user_password`, `role`, `username`, `token`, `created`) VALUES
(1, 12, 'd37b3ca37106b2bfdeaa12647e3bb1c9', '2749', 'associate', 'Srikant', 'd37b3ca37106b2bfdeaa12647e3bb1c9', '2023-09-08 12:04:47'),
(2, 14, '81dc9bdb52d04dc20036dbd8313ed055', '1234', 'associate', 'Sohaib', '81dc9bdb52d04dc20036dbd8313ed055', '2023-09-08 12:04:47'),
(3, 15, '81dc9bdb52d04dc20036dbd8313ed055', '1234', 'manager', 'Osama', '81dc9bdb52d04dc20036dbd8313ed055', '2023-10-17 23:47:24'),
(7, 16, '81dc9bdb52d04dc20036dbd8313ed055', '1234', 'associate', 'Akash', '81dc9bdb52d04dc20036dbd8313ed055', '2023-10-17 23:51:34');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `logs`
--
ALTER TABLE `logs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `phones`
--
ALTER TABLE `phones`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `name` (`name`),
  ADD KEY `name_slug` (`slug`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `refunds`
--
ALTER TABLE `refunds`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reports`
--
ALTER TABLE `reports`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=614;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `logs`
--
ALTER TABLE `logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `phones`
--
ALTER TABLE `phones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46413;

--
-- AUTO_INCREMENT for table `refunds`
--
ALTER TABLE `refunds`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `reports`
--
ALTER TABLE `reports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
