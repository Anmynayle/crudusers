
// Import & destructuring function created in todos.controllers

const {getAllCrud,getCrudById,createCrud} = require('./users.controllers')


/*********************** GETTING - info ************************/

// service for getting all users exists

const getCrud = (req,res) =>{
    const data = getAllCrud()
    res.status(200).json({
        pag_initial:"http://127.0.0.1:9000/",
        data})
}



//service for getting only or exclusive ID of a user
const getOneUsers = (req,res)=>{
    const id = req.params.id
    const data = getCrudById(id)
    if(data){
        res.status(200).json({
            pageMenuUsers: "http://127.0.0.1:9000/crud",
            data
        })
    }else{
        res.status(404).json({id: id, message: 'Invalid id'})
    }
}


/*********************** POSTING - INFO-CREATE ********************/
const createNewUser = (req,res) => {
    const {first_name,last_name,email,password,birthday} = req.body

    if (first_name &&  email && password && birthday){
     
        const data = createCrud(
            first_name,
            last_name,
            email,
            password,
            birthday
        );
        res.status(201).json(data)
    }
    else{
        res.status(400).json({message: 'Missing Data'})
    }
}



// REGULAR EXPORT
module.exports = {
    getCrud,
    getOneUsers,
    createNewUser
}