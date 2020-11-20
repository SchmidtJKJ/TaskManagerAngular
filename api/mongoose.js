// thsi file is to handle database stuff from mongo db

const mongoose= require('mongoose');
mongoose.Promise = global.Promise;
const mongodb = 'mongodb+srv://Joe:Joe1234@cluster0.vt3ec.mongodb.net/TaskManagement?retryWrites=true&w=majority';
mongoose.connect(mongodb).then(()=> console.log("Connection Established")).catch(error =>console.log(error) );

// to prevent depreacation and warning from mongo db
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports={mongoose};