DROP DATABASE IF EXISTS puppies;
CREATE DATABASE puppies;

\c puppies;

CREATE TABLE pups (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  breed VARCHAR,
  age INTEGER,
  sex VARCHAR,
  imageURL VARCHAR
);

INSERT INTO pups (name, breed, age, sex, imageURL)
  VALUES ('Tyler', 'Retrieved', 3, 'M', 'http://www.petsworld.in/blog/wp-content/uploads/2015/03/How-To-Make-Your-Puppy-Gain-Weight.jpg'),
         ('Tyler', 'Retrieved', 4, 'M', 'http://www.yim778.com/data/out/68/863429.jpg'),
         ('Billy', 'Golden', 4, 'F', 'http://www.zarias.com/wp-content/uploads/2015/12/57-cute-puppies.jpg'),
         ('Newton', 'Red', 3, 'M', 'http://cdn.akc.org/content/article-body-image/samoyed_cute_puppies.jpg'),
         ('lev', 'blue', 2, 'F', 'https://cdn.pixabay.com/photo/2015/02/05/12/09/chihuahua-624924_1280.jpg'); 