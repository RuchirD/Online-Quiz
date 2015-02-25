-- phpMyAdmin SQL Dump
-- version 3.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 25, 2015 at 05:16 PM
-- Server version: 5.5.25a
-- PHP Version: 5.4.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `quiz`
--

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE IF NOT EXISTS `questions` (
  `_id` int(255) NOT NULL AUTO_INCREMENT,
  `ques` varchar(1000) NOT NULL,
  `ans` varchar(1000) NOT NULL,
  `correctans` int(255) NOT NULL,
  `id` int(255) NOT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=62 ;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`_id`, `ques`, `ans`, `correctans`, `id`) VALUES
(1, 'What is the name of the tallest uninterrupted waterfall in the world?', 'Niagara Falls;Angel Falls;Victoria Falls;Chelavara Falls', 1, 1),
(2, 'Which of the following capital cities is the most northerly?', 'Dublin, Republic of Ireland;Ottawa, Canada;New Delhi, India;Tokyo, Japan', 0, 2),
(59, 'How many vovels are there in English alphabets?', '1;2;3;5', 3, 3),
(60, 'Where did British first open their Factories in Eastern part of India?', 'Assam;Orissa;Bihar;Sikkim', 1, 4),
(61, 'Goa was captured by Portuguese in?', '1600 AD;1510 AD;1642 AD;1845 AD', 1, 5);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
