-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th9 26, 2017 lúc 06:53 PM
-- Phiên bản máy phục vụ: 10.1.25-MariaDB
-- Phiên bản PHP: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `banhangsieucap`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `account`
--

CREATE TABLE `account` (
  `id` int(11) NOT NULL,
  `username` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `account`
--

INSERT INTO `account` (`id`, `username`, `password`) VALUES
(1, 'hieu', '123');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `category`
--

INSERT INTO `category` (`id`, `name`, `description`, `image`) VALUES
(1, 'sneaker', 'description for sneakre', 'category_sneaker.jpg'),
(2, 'T-Shirt\r\n', 'Description for T-shirt', 'category_tshirt.jpg'),
(3, 'Shirt', 'Description for Shirt', 'category_shirt.jpg'),
(4, 'Bottle', 'Description for bottle', 'category_bottle.jpg'),
(5, 'Headphone', 'Description for headphone', 'category_headphone.jpg'),
(6, 'jacket', 'Description for jacket', 'category_jacket.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `title1` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `introduction1` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `introduction2` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `phone1` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `phone2` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `slogan` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `contact`
--

INSERT INTO `contact` (`id`, `title1`, `introduction1`, `introduction2`, `phone1`, `phone2`, `email`, `slogan`) VALUES
(1, 'Title1', 'introduction 1', 'AD Company, Limited is a world-class producer of advanced measuring, monitoring, controlling and testing instruments', '0938190592', '01203672707', 'hieu@gmail.com', 'You live only once'),
(2, 'title2', 'intro1\r\n', 'intro2', 'phone 1', 'phone 2 ', 'test', 'This is our life');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `size` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `parent_image` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `children_image` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `price` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `priority` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`id`, `category_id`, `name`, `description`, `size`, `parent_image`, `children_image`, `price`, `priority`) VALUES
(1, 1, 'product1', 'description for product 1 description for product 1 description for product 1', '40,41,42', 'image.jpg', 'image1.jpg,image2.jpg,image3.jpg', '100,000VND', 1),
(2, 1, 'product1', 'description for product 1', '40,41,42', 'image.jpg', 'image1.jpg,image2.jpg,image3.jpg', '100,000VND', 1),
(3, 1, 'product1', 'description for product 1', '40,41,42', 'image.jpg', 'image1.jpg,image2.jpg,image3.jpg', '100,000VND', 1),
(4, 1, 'product1', 'description for product 1', '40,41,42', 'image.jpg', 'image1.jpg,image2.jpg', '100,000VND', 1),
(5, 1, 'product1', 'description for product 1', '40,41,42', 'image.jpg', 'image1.jpg,image2.jpg,image3.jpg', '100,000VND', 1),
(6, 1, 'product1', 'description for product 1', '40,41,42', 'image.jpg', 'image1.jpg,image2.jpg,image3.jpg', '100,000VND', 1);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `account`
--
ALTER TABLE `account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT cho bảng `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
