# NodeJsServerDemo
NodeJs demo server with basic CRUD implementation
In order to make this run, do following:
1. go to: https://nodejs.org and download LTS version of node or install it using package manager:
  for mac: brew install node
	for linux (depending on the distribution): apt install nodejs
2. check version: node --version
3. run 'npm init' to initialize the project, this will ask couple questions (give package name like, api, testapi, demoapi), leave other as default and create an project
4. Install express (Fast, minimalist web framework for node): npm install express
5. create app.js with some content
6. run server using: node app.js
7. go to browser and access it to defined port: localhost:3000
8. in order to use lint (not installed globally but in project), we need to add lint in scripts: in our package.json. This way we are telling node to
	check node_modules in our project first and not the global one.
9. install nodemon (nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.)
	npm install nodemon
10. to run app: npm start (before this, we have to define this command in package.json, adding this in script: "start": "nodemon app.js",
	and also define config for nodemon in same file.
11. download mongodb docker image - do search first: docker search mongo
12. docker pull mongo
13. download Robo3T GUI for MongoDb
14. run docker image: docker run --name mymongo -p 27017:27017 -d mongo
15. create connection from Robo3T (default one) and that's it.
* 15.1 create database named books
* 15.2 add collection named books
* 15.3 insert new document with data related to books (use TestData file)
16. in order to connect to mongo from Node JS, install mongoose dependency: npm install mongoose


Keywords:
---------
* Express - Small and fast web framework for Node
* Lint - Static code analysis tool
* Nodemon - Automatic app restart on file change
* MongoDb - Document Oriented Database
* Robo3T - GUI Tool for MongoDb
* Mongoose - MongoDb object modeling tool
* Mocha - unit tests framework 
* Sinon.js - Mock objects
* Supertest - Integration tests framework 
