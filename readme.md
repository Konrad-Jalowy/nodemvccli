# This project

Ok so working with node backend there is a problem - there is no MVC pattern like in Laravel. You must build your own.

I created such thing, that lets you:
- Create folder structure i think is needed
- Create controller, model, route file and views subfolder for a given name

Btw, if you need to use it you must use command:
```sh
npm install -g ./
```

Then you use it like this - setup:
```sh
mvc-node-setup
```
this will create:
- app.js
- server.js
- public (for static files)
- views (for templating engine)
- controllers
- models
- routes

Creating of controller, model, views subfolder and routes file:
```sh
mvc-node-make todo
```
this will create:
- todoController.js
- todoRoutes.js
- todoModel.js
- views/todo directory