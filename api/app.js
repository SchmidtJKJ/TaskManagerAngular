const express = require('express');
const app = express();
const mongoose= require('mongoose')
const bodyParser= require('body-parser');
// load in the models
const {Task} = require('../models/list-model');
const {Details}= require('../models/details-model');
// routes and handlers
app.use(bodyParser.json());
//GET /lists
app.get('/lists', (req, res)=>
{
    Task.find().then((tasks)=>{
        res.send(tasks);
    }).catch((e)=>{
        res.send(e);
    });
});

// POST /lists
app.post('/lists', (req, res)=>
{
    let title = req.body.title;
    let newTask= new Task({title});
    newTask.save().then((taskStuff)=>
    {
        res.send(taskStuff);
    })
});

// POST /lists update
app.patch('/lists/:id', (req, res)=>
{
    // to update the specific list
});

// DELETE /lists delet
app.delete('/lists/:id', (req, res)=>
{
    // to update the specific list
});




app.get('/', (req, res)=> {
    res.send("Hello World!");
});

app.listen(7878, ()=> {
    console.log("Server listening on port 7878");
});