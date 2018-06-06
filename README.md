# React Test 


## Getting Started

To get started, download the repo, install the dependencies, and run the production server.

```
The first step is to starting by MongoDB installed using an .msi file. If your environement is Windows you can see offical documenatation for more details
next install robo 3T and Studio 3T for MongoDB
open robo 3T
Click Create to create a new connection specifiy the connection name, the address "localhost" and the port number 27017 next click test to ensure that you put the right parametres click Save. Your new connection will display Selected and click Connect. Now you should create the database in this example I named testDB after that double-click on testDB you will see 3 folders Collections, Functions and Users. Go to collection Right click Create collection in my case I create just 2 collections users and photos and form there you can INSERT UPDATE REMOVE DISPLAY documents with JSON format ... 
Before runing the project you should have installed  nodejs, React express, postman ...

npm install -g nodemon 
nodemon will watch the files in the directory in which nodemon was started, and if any files change, nodemon will automatically restart your node application.
cd mangoDB/

npm install

nodemon npm start


Open your browser to `http://localhost:3000` to see the application.

And here I tested with postman GET`http://localhost:3000/users`
							   GET`http://localhost:3000/users/userId`
							  POST`http://localhost:3000/users`
							  PUT `http://localhost:3000/users/userId`
							DELETE`http://localhost:3000/users/userId`
							  POST`http://localhost:3000/users`
							  PUT `http://localhost:3000/users/userId`
							DELETE`http://localhost:3000/users/userId`
This requests for the users and we have the same for photos
GET`http://localhost:3000/users
							   GET`http://localhost:3000/photos`
							  POST`http://localhost:3000/photos`
							  PUT `http://localhost:3000/photos/photoId`
							DELETE`http://localhost:3000/photos/photoId`
							
After that cd public/frontend 
And run also npm start 
```
Here you can navigate to test the frontend part
http://localhost:3001/users to see the react table used for getAllUsers you find here to link one for user details to see the deatils of user based on userId and you can also Edit user from here you will see a form in this page ...
...

