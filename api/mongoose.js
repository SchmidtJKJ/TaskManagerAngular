// thsi file is to handle database stuff from mongo db

const mongoose= require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TaskManager', {useNewUrlParser: true}).then(()=>{
    console.log('connected to the mongoDB successfully!');
}).catch((e)=> {
    console.log('Error while connecting to the mongoDB !');
    console.log(e);
});

// to prevent depreacation and warning from mongo db
mongoose.set('userCreateIndex', true);
mongoose.set('userFindAndModify', false);

module.exports={mongoose};