
import express from 'express';
import rootRoutes from './src/routes/rootRoutes.js';
import cors from 'cors';

const app = express();
const port = 8080;



app.use(express.json());
app.use(cors()); // cho tất cả các request từ bên ngoài vào( front end) để trước rootroutes để bypass (backend chạy từ trên xuống)
app.use(rootRoutes);


app.get("/",(req,res)=>{
    res.send("Hello node38  food");
})



app.listen(port,()=> {
    console.log(`BE starting with port ${port}`)
})