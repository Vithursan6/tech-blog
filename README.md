
# Tech-Blog
---
<br>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<br>

---
<br>
<br>

## User Story
- AS A developer who writes about tech I WANT a CMS-style blog site
  SO THAT I can publish articles, blog posts, and my thoughts and opinions

<br>

---
<br>
<br>

## Acceptance Criteria

GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

<br>

---
<br>
<br>

## Description:
A Tech-blog application design for tech enthusiasts to post and discuss tech topics. The application has full CRUD functionality, password encryption and protected sessions.
Users can post, update, comment on, edit and delete posts. Handlebars and animate.style was used for the front end. The user will be required to sign up for initial use and login thereafter. 
If user isn't signed in, posts can only be viewed. 

<br>

---
<br>
<br>

## Usage and Installation

A deployed version of the application can be found here:

 - https://glacial-brushlands-88300.herokuapp.com/login

For local testing, download repo and please add .env file to root of app directory and in it place login credentials for the following parameters:

 - DB_NAME='tech_db'
 - DB_USER='root'
 - DB_PW='XXXX'

Save changes to .env file and deploy.

<br>

---
<br>
<br>

## Built With:

- Node.js
- Express.js
- Sequelize
- Bcrypt
- Handlebars
- MVC Structure
- MySQL Database
- Express Session
- Animate.style
<br>

---
<br>
<br>

## Screenshots

![Screenshot1](./content/images/pic1.png)
<br>
![Screenshot2](./content/images/pic2.png)
<br>
![Screenshot3](./content/images/pic3.png)
<br>
![Screenshot4](./content/images/pic4.png)
<br>

---
<br>
<br>

## Links

Deployed Application:

 - https://glacial-brushlands-88300.herokuapp.com/login

Github Repository:

 - https://github.com/vithursan6/tech-blog
<br>

---
<br>
<br>

## License

MIT License

Copyright (c) 2022 Vithursan6

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
<br>

---

