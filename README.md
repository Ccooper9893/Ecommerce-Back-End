# Ecommerce-Back-End
![Badge image](https://img.shields.io/badge/license-MIT-green})

## *Description*
___
A back-end ecommerce server that uses MySQL database and sequelize to store and organize product data. Object Relational Mapping (ORM) is
used in this application to bridge Javascript OOP to relational mySQL databases.

## *Table of Contents*
 ___
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Software](#software)
  - [License](#license)
  - [Questions](#questions)

## *User Story*
___
- AS A manager at an internet retail company
- I WANT a back end for my e-commerce website that uses the latest technologies
- SO THAT my company can compete with other e-commerce companies

## *Acceptance Criteria*
___
- GIVEN a functional Express.js API
- WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
- THEN I am able to connect to a database using Sequelize
- WHEN I enter schema and seed commands
- THEN a development database is created and is seeded with test data
- WHEN I enter the command to invoke the application
- THEN my server is started and the Sequelize models are synced to the MySQL database
- WHEN I open API GET routes in Insomnia Core for categories, products, or tags
- THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
- THEN I am able to successfully create, update, and delete data in my database

## *Installation*
___
Guidelines for installing this application:
1. Clone the repository onto your machine https://github.com/Ccooper9893/Ecommerce-Back-End.git
2. Install MySQL if applicable. https://www.mysql.com/
3. Install node.js, if applicable. https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs
4. Install the dependencies by typing **npm install** in the command line and pressing enter.


## *Usage*
___
Step for using this application:
1. Create the database by running MySQL: SOURCE db/schema.sql;
2. Enter required MySQL credentials into the .env file.
3. Seed the database by running node seeds/index.js or npm run seed.
4. To start the application type npm start or node server.js into the terminal.

Walkthrough Video Guide - 
https://drive.google.com/file/d/1LeM_mMqMrqV8gQsc31ZKSJx9HN21-jPx/view

## *Software*
___
This application was created using the following software:
- Javascript ES6
- Node.js/Dependencies
    - sequelize
    - mysql2
    - dotenv
    - express
- MySQL
- VS Code

## *License*
___
This application is covered under the MIT license.
For more information about this license please visit https://opensource.org/licenses/MIT

## *Questions*
___
For questions or concerns please contact me via Github.
  - Github: https://github.com/ccooper9893
  - Github Repository: https://github.com/Ccooper9893/Ecommerce-Back-End.git




