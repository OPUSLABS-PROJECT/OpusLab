DROP DATABASE IF EXISTS opus;

CREATE DATABASE opus;

USE opus;

CREATE TABLE list (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(50) NOT NULL,
  companyName varchar(50) NOT NULL,
  description varchar(50) NOT NULL,
  dateDue varchar(50) NOT NULL,
  phone varchar(15) NOT NULL,
  email varchar(50) NOT NULL
);

INSERT INTO list(name, companyName, description, dateDue, phone, email) VALUES
('hi','company', 'need video edited', '12/12/2019', '1234678906', 'map@gmail.com')
