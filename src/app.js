const express = require('express');

const app = express();

const crudRouter = require('./crud/users.router')

app.use(express.json());

app.get('/', (req,res)=>{
    res.status(200).json({message:'Server Ok'});
})


app.use("/", crudRouter)
app.listen(8000, ()=>{
    console.log('Server started at puerto 8000');
});