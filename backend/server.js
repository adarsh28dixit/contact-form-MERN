import express  from 'express'
import  Mongoose  from 'mongoose';
import formRouter from './routers/formRouter.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

Mongoose.connect('mongodb://localhost/New',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.use('/api', formRouter);


app.get('/', (req, res) => {
    res.send('your server is ready')
});

app.listen(5000, () =>{
    console.log('http://localhost:5000')
});