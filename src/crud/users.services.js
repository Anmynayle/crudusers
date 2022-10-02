const {getAllCrud,getCrudById,createCrud} = require('./users.controllers')

const getCrud = (req,res) =>{
    const data = getAllCrud()
    res.status(200).json(data)
}

const getOneUsers = (req,res)=>{
    const id = req.params.id
    const data = getCrudById(id)
    if(data){
        res.status(200).json(data)
    }else{
        res.status(404).json({id: id, message: 'Invalid id'})
    }
}

const createNewUser = (req,res) => {
    const {first_name,last_name,email,password,birthday} = req.body

    if (first_name &&  email && password){
     
        const data = createCrud(first_name,last_name,email,password,birthday)
        res.status(201).json(data)
    }
    // if (!first_name){
    //     res.status(400).json({message: 'First Name Vacio'})
    //     if (!email){
    //     res.status(400).json({message: 'email Vacio'})
    //     }
    //     if (!password){
    //     res.status(400).json({message: 'password Vacio'})
    //     }
    
    else{
        res.status(400).json({message: 'Missing Data'})
    }
}
module.exports = {
    getCrud,
    getOneUsers,
    createNewUser
}