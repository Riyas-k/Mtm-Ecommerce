import express from 'express';
const app = express();
import cors from 'cors';
import connectDB from './models/connection.js';

app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());

connectDB()

app.get('/',(req,res)=>{
    res.send('hello')
});

app.listen(3000,()=>{
    console.log('server started');
})