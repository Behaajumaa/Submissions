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

# CREATE TABLE graduates (
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
