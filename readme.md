# generic-rest-api
Node JS generic rest api based on your models


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

Let's assume you have just one model named 'user'. This code will add your application the following routes:

GET /user
GET /user/:id
POST /user
PUT /user/:id
DELETE /user/:id


#### Obs

If you want to override any method, you just need to add your own custom route BEFORE the middleware.