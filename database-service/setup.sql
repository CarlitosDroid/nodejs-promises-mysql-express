/***CREATING ALL TABLES*/
CREATE TABLE EMPLOYEE (
  EmployeeId   INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  FirstName    VARCHAR(40)                    NULL,
  LastName     VARCHAR(40)                    NULL,
  Phone        VARCHAR(20)                    NULL,
  Address      VARCHAR(100)                   NULL,
  City         VARCHAR(30)                    NULL,
  FullName     VARCHAR(100)                   NULL,
  Email        VARCHAR(100)                   NULL,
  Pin          VARCHAR(100)                   NULL,
  CreationDate DATETIME                       NULL,
  EmployeeCode VARCHAR(10) UNIQUE             NOT NULL
)
  ENGINE = INNODB;

CREATE TABLE CHIRINOS.USER
(
  id_user INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(40) NOT NULL,
  lastname VARCHAR(40) DEFAULT NULL,
  gender CHAR NOT NULL
);
ALTER TABLE CHIRINOS.USER COMMENT = 'user table';


CREATE TABLE CHIRINOS.MEETING_PLACE
(
  id_place INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(40) NOT NULL,
  latitude DECIMAL(10,8) NOT NULL,
  longitude DECIMAL(11,8) NOT NULL
);
ALTER TABLE CHIRINOS.MEETING_PLACE COMMENT = 'header of meeting place';

/* INSERT DATA */
INSERT INTO EMPLOYEE (FirstName, LastName, Phone, Address, City, FullName, Email, Pin, CreationDate, EmployeeCode)
VALUES ('SYSADMIN', 'SYSADMIN', 945214775, 'Av. Alfonso Ugarte', 'Lima', 'SYSADMIN SYSADMIN', 'sysadmin@gmail.com',
        1, '2011-12-18 13:17:17', 'SYSADMIN');

DROP PROCEDURE IF EXISTS sp_GetEmployee;
DELIMITER //
CREATE PROCEDURE sp_GetEmployee()
  BEGIN
    SELECT * FROM EMPLOYEE;
  END //
DELIMITER ;
/**Drop StoreProcedure**/
CALL sp_GetEmployee();
/******************************************************************/

