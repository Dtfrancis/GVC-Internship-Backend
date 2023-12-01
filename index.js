const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const tasksController = require('./controllers/tasksController');
const rbacMiddleware = require('./middleware/rbacMiddleware');
const tasksRoutes = require('./routes/tasks');


app.use('/auth', authRoutes);
app.use('/tasks', rbacMiddleware.checkPermission('user'), tasksRoutes);
app.post('/register', rbacMiddleware.registerUser);