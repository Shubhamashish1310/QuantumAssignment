import express from 'express';
import serverConfig from './config/server.js';
import connectDB from './config/db.js';
import router from './routes/routes.js';
import cors from 'cors';

const PORT = serverConfig.PORT;
const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // Update this to your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // Allow cookies to be sent with requests
}));
app.get('/',(req,res)=>{
    res.json({
        message:'working',
        status:200 
    })
})
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/user',router) 


app.listen(PORT,()=>{
    connectDB();
    console.log('Connected to MongoDB');
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
}) 