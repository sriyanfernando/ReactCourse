let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyparser = require('body-parser');
let dbconfig = require('./database/db');
let path = require('path');

let fileUpload  = require('express-fileupload');

//Express route
const vehicleRoute = require('../backend/routes/vehicle.route')
const userRoute = require('../backend/routes/user.route');



//mngodb database connection
mongoose.Promise = global.Promise;
mongoose.connect(dbconfig.db,{
        useNewUrlParser : true
}).then(()=>{
    console.log('databse sucessfully connected')
},
error =>{
    console.log('Could not connect to the database' + error)
})

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
      extended: true
}));

app.use(cors());
app.use('/vehicles',vehicleRoute)

app.use('/users',userRoute);

//port
const port = process.env.port || 4000;
const server  = app.listen(port, ()=>{
    console.log('connected to the port ' + port)
})

//not found error
app.use((req,res,next)=>{
    next(createError(404));
})

app.use(function(err,req,res,next){
    console.error(err.message);
    if(!err.statusCode)err.statusCode = 500;   
    res.status(err.statusCode).send(err.message);
})


//file upload initializer
app.use(fileUpload());

app.post('/upload', (req,res) => {
    if(req.files === null){
        return res.status(400).json({msg: 'No file upload'})
    }

    const file = req.files.file;

    file.mv('${__dirname}/client/public/uploads/${file.name}',err=>{
        if(err){
            console.error(err);
            res.status(500).send(err);
        }
        res.json({fileName: file.name, filePath :'/uploads/${file.name}'});
    })

})

var corsOptions={
    origin:'*',
    optionsSuccessStatus:200
}
app.use(cors(corsOptions));


