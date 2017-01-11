# generic-rest-api
Express JS generic rest api based on your sequelize models

**Note** this lib is in development. I'm trying to publish only stable versions, but you may find some kind of issue.  
Please make this world more beautiful and **report** this [**issue**](https://github.com/luizguilhermesj/generic-rest-api/issues) so I can correct it.  
And, of course, if you want you can always make a [**pull request**](https://github.com/luizguilhermesj/generic-rest-api/pulls).  

The goal is to make something that we can use to build APIs really fast, instead of using a full framework like [sailsjs](http://sailsjs.com/) or [loopback](http://loopback.io/)


#### Requirements

* expressjs
* sequelize

#### Getting Started

First you add generic-rest-api to your project:

```shell
npm install --save generic-rest-api
```

Then you add it as a middleware to your express app, passing the express app instance and the path where your sequelize models are:

```javascript
var genericRestApi = require('generic-rest-api');
...
app.use(genericRestApi(app, __dirname+'/models'));
```

Let's assume you have just one model named `user`. This code will add your application the following routes:

GET /user  
GET /user/:id  
GET /user/:id/:relation  
POST /user  
PUT /user/:id  
DELETE /user/:id  

#### Authentication

There is no authentication in this module.  
I know I'm forcing your hand here, but you can use a middleware for authentication and hooks on models for authorization.


#### Obs

If you want to override any method, you just need to add your own custom route BEFORE the middleware.  

#### Next Steps

* support Restify
* support other ORMs 
