const express=require('express');
const app= express();
const cors=require('cors');
app.use(cors());
const port=3000;
const router =require('./routes/tasks')
app.use(express.json());
app.use(express.static('../public'));
app.use('/api/v1/tasks',router);

app.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
});