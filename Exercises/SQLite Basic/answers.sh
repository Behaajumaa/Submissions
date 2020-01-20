# /*Basic Queries */


# Problem 1: Get all the names of students in the database 
 select  name from students

# Problem 2: Get all the data of students above 30 years old 3.
 select  * from students WHERE Age > 30

# Problem 3: Get the names of the females who are 30 years old
 select  name from students WHERE Age > 30 AND Gender 

# Problem 4: Get the number of Points of Alex
 select Points from students  WHERE Name == "Alex"

# Problem 5: Add yourself as a new student (your name, your age...)
INSERT INTO students (name, Age, Gender, Points)
VALUES ('Behaa', 33, 'M', 434);

# Problem 6: Increase the points of Basma because she solved a new exercise
UPDATE students
SET Points=76
WHERE id==2;


# Problem 7: Decrease the points of Alex because hes late today 
UPDATE students
SET Points=44
WHERE id==2;


# --------------------------------------

# Creating Table


   ID INTEGER PRIMARY KEY,
   name TEXT NOT NULL,
   age INTEGER,
   gender TEXT,	
   Points INTEGER,
  Graduation TEXT
);

# Copy Layal's data from students to graduates'   

INSERT INTO graduates (name, age, gender, Points)
SELECT name, age, gender, Points
FROM students
WHERE id==4; 


# Add the graduation date previously mentioned to Layal's record in graduates

UPDATE graduates
SET Graduation='08/09/2018'
WHERE id==1;

# Remove Layal's record from students

DELETE FROM students WHERE name='Layal';

#Joins__________________________________

#Produce a table that contains, for each employee, his/her name, company name, and company date.

SELECT e.Name as empName ,e.Company as compName, c.Date as comDate
from employees as e ,companies as c
WHERE e.Company = c.Name

#Find the name of employees that work in companies made before 2000.

SELECT employees.Name , companies.Date 
from employees ,companies
WHERE companies.Date<2000 and companies.Name=employees.Company

#Find the name of company that has a graphic designer.

SELECT Role from employees ;
where Company = Graphic Designer


#Count & Filter __________________________________________________

#Find the person with the highest number of points in students
SELECT MAX(Points) ,name FROM students;

#Find the average of points in students

SELECT AVG(Points)
FROM students


#Find the number of students that have 500 points

SELECT COUNT(name)
FROM students
WHERE Points>500; 

#Find the names of students that contains 's'
SELECT * FROM students
WHERE name LIKE '%s%';

#Find all students based on the decreasing order of their points
SELECT
   name
FROM
   students
ORDER BY
    Points DESC;



    # POINTS LIST in student table not exacty right because i had a mistake where i insert same number to all of them some where :) 
    