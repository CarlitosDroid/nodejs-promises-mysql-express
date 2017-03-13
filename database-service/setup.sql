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

CREATE TABLE chirinos.meeting_place_detail
(
  id_place INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  description VARCHAR(50) NOT NULL,
  calification INT(11)
);
ALTER TABLE chirinos.meeting_place_detail COMMENT = 'meeting place detail table';

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

INSERT INTO CHIRINOS.USER(name, lastname, gender) VALUES('Henry', 'Tacuchi', 'M');

DROP PROCEDURE IF EXISTS sp_GetEmployee;
DELIMITER //
CREATE PROCEDURE sp_GetEmployee()
  BEGIN
    SELECT * FROM EMPLOYEE;
  END //
DELIMITER ;
/**Drop StoreProcedure**/
CALL sp_GetEmployee();

/**********************************CRUD USER *********************************/

#INSERT NEW USER
DROP PROCEDURE IF EXISTS sp_PostUser;
DELIMITER //
CREATE PROCEDURE sp_PostUser(IN _name VARCHAR(40),IN _lastname VARCHAR(40), IN _gender CHAR  )
  BEGIN
    INSERT INTO USER (name, lastname, gender)
    VALUES (_name, _lastname, _gender);
  END //
DELIMITER ;

DROP PROCEDURE IF EXISTS sp_GetUser;
DELIMITER //
CREATE PROCEDURE sp_GetUser()
  BEGIN
    SELECT * FROM USER;
  END //
DELIMITER ;
CALL sp_GetUser();

/**********************************CRUD MEETING_PLACE *********************************/

#INSERT NEW MEETING_PLACE
DROP PROCEDURE IF EXISTS sp_PostMeetingPlace;
DELIMITER //
CREATE PROCEDURE sp_PostMeetingPlace(IN _name VARCHAR(40),IN _latitude DECIMAL(10,8), IN _longitude DECIMAL(11,8))
  BEGIN
    INSERT INTO MEETING_PLACE (name, latitude, longitude)
    VALUES (_name, _latitude, _longitude);
  END //
DELIMITER ;

#GET ALL MEETING_PLACE
DROP PROCEDURE IF EXISTS sp_GetMeetingPlace;
DELIMITER //
CREATE PROCEDURE sp_GetMeetingPlace()
  BEGIN
    SELECT * FROM MEETING_PLACE;
  END //
DELIMITER ;
CALL sp_GetMeetingPlace();
