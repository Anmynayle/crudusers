// import & Using generator key -> UUID

const uuid = require('uuid')


// DATABASE USERS object like JSON
const crudDB = [{
    id: '6500fa13-1465-4f3f-8400-9f515984b66b',
    first_name: 'Anmy',
    last_name: 'Moreno',
    email : 'nayle2701@gmail.com',
    password:'12345',
    birthday: '1991/01/27',
    url: `http://127.0.0.1:9000/crud/6500fa13-1465-4f3f-8400-9f515984b66b`

},{
    id: '2fd57fdd-5a68-4efe-b751-f72c540c0094',
    first_name: 'Ambar',
    last_name: 'Aguilar',
    email : 'ambar27@gmail.com',
    password:'12345',
    birthday: '2020/12/04',
    url: `http://127.0.0.1:9000/crud/2fd57fdd-5a68-4efe-b751-f72c540c0094`
}];

// Getting All DB users
const getAllCrud = () =>{
    return crudDB
}

// Getting users for ID
const getCrudById = (id) =>{
    const data = crudDB.find(crud=>crud.id ===id)
    return data
}

/************* POST - CREATE ***************/

 const createCrud = (first_name,last_name,email,password,birthday) => {
    
    let uuidGenerate = uuid.v4()

    const newCrud = {
        id:uuidGenerate,
        first_name,
        last_name,
        email,
        password,
        birthday,
        url: `http://127.0.0.1:9000/crud/${uuidGenerate}`
    }
    crudDB.push(newCrud)
    return (newCrud)
 }
// Exporting the functions across of a require 
 module.exports = {
    getAllCrud,
    getCrudById,
    createCrud
 }

/************** TEST ******************/
    //Geting all crud
//console.log(getAllCrud())

    //Generate UUID
// console.log(uuid.v4())

    //New User
//console.log(createCrud("anmy","moreno","anmy@gmail.com","am1234","1990/15/15"))
// console.log(getAllCrud())

    //Find a User existent
//console.log(getCrudById("c0f6a7c2-e462-47a5-b62b-901ad7c467f"))




















//  console.log(createCrud('anmy','nayle','nayle2701@gmail.com','1234','1991/01/27'))