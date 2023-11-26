-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 28, 2022 at 08:20 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jobbyo`
--

-- --------------------------------------------------------

--
-- Table structure for table `add_job`
--

CREATE TABLE `add_job` (
  `jobid` int(10) NOT NULL,
  `jb_ttl` varchar(200) NOT NULL,
  `m_qual` varchar(50) NOT NULL,
  `s_range` varchar(10) NOT NULL,
  `jb_des` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `add_job`
--

INSERT INTO `add_job` (`jobid`, `jb_ttl`, `m_qual`, `s_range`, `jb_des`) VALUES
(1, 'ghe', '1', '56656', 'hgyjhui'),
(2, 'web development', 'Diploma', '30000', 'fffggghhjhj'),
(3, 'Jr. Softwatre Developer', 'B.tech', '10000', 'having experience on some basic technologies like as java ,php');

-- --------------------------------------------------------

--
-- Table structure for table `admin_login`
--

CREATE TABLE `admin_login` (
  `adid` varchar(50) NOT NULL,
  `passwd` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin_login`
--

INSERT INTO `admin_login` (`adid`, `passwd`) VALUES
('arpita123@gmail.com', '123');

-- --------------------------------------------------------

--
-- Table structure for table `apply_job`
--

CREATE TABLE `apply_job` (
  `jobid` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `jbttl` varchar(50) NOT NULL,
  `email_add` varchar(200) NOT NULL,
  `mob` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `apply_job`
--

INSERT INTO `apply_job` (`jobid`, `name`, `jbttl`, `email_add`, `mob`) VALUES
(1, 'fgg', 'fhg', 'fg@gmail.com', '2445666723'),
(2, 'Arpita Kumari', 'asdxfcgvhbj', 'arpitakumari21may@gmail.com', '234567890');

-- --------------------------------------------------------

--
-- Table structure for table `enquiry`
--

CREATE TABLE `enquiry` (
  `f_name` varchar(20) NOT NULL,
  `l_name` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `mob` varchar(50) NOT NULL,
  `msg` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `enquiry`
--

INSERT INTO `enquiry` (`f_name`, `l_name`, `email`, `mob`, `msg`) VALUES
('', '', '', '', ''),
('ahvsj', 'agshhj', 'arpitakumari21may@gmail.com', '4567890', 'acfgszvhbjxnkm'),
('aghs', 'avc', 'arpitakumari21may@gmail.com', '23456789', 'FDGHJN'),
('sahfgh', 'hgsahj', 'fxgcjh@gmail.com', '234567890', 'xfdcghvbjn'),
('cgfhvjb', 'acshgvbj', 'df@gmail.com', '3456789', 'dgfhjkl');

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `f_name` varchar(50) NOT NULL,
  `l_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `c_no.` varchar(15) NOT NULL,
  `strt` varchar(50) NOT NULL,
  `city` varchar(20) NOT NULL,
  `state` varchar(20) NOT NULL,
  `qual` varchar(100) NOT NULL,
  `gnd` varchar(20) NOT NULL,
  `chs_pwd` varchar(20) NOT NULL,
  `rescv` varchar(3000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`f_name`, `l_name`, `email`, `c_no.`, `strt`, `city`, `state`, `qual`, `gnd`, `chs_pwd`, `rescv`) VALUES
('Arpita', 'Kumari', 'arpitakumari21may@gmail.com', '654345678', 'Ismailganj', 'Lucknow', 'Uttar Pradesh', 'Intermediate', 'on', 'hjyt', '1.png');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_star`
--

CREATE TABLE `tbl_star` (
  `name` varchar(50) NOT NULL,
  `star` varchar(30) NOT NULL,
  `mob` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_star`
--

INSERT INTO `tbl_star` (`name`, `star`, `mob`) VALUES
('arpita', '5', '6307584691');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `add_job`
--
ALTER TABLE `add_job`
  ADD PRIMARY KEY (`jobid`);

--
-- Indexes for table `admin_login`
--
ALTER TABLE `admin_login`
  ADD PRIMARY KEY (`adid`);

--
-- Indexes for table `apply_job`
--
ALTER TABLE `apply_job`
  ADD PRIMARY KEY (`jobid`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `add_job`
--
ALTER TABLE `add_job`
  MODIFY `jobid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `apply_job`
--
ALTER TABLE `apply_job`
  MODIFY `jobid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
