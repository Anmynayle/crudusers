const uuid = require('uuid')

const crudDB = [{
    id: '6500fa13-1465-4f3f-8400-9f515984b66b',
    first_name: 'Anmy',
    last_name: 'Moreno',
    email : 'nayle2701@gmail.com',
    password:'12345',
    birthday: '1991/01/27'
},{
    id: '6500fa13-1465-4f3f-8400-9f515984b66b',
    first_name: 'Ambar',
    last_name: 'Aguilar',
    email : 'ambar27@gmail.com',
    password:'12345',
    birthday: '2020/12/04'
}];

const getAllCrud = () =>{
    return crudDB
}

const getCrudById = (id) =>{
    const data = crudDB.find(crud=>crud.id ===id)
    return data
}

 const createCrud = (first_name,last_name,email,password,birthday) => {
    const newCrud = {
        id: uuid.v4(),
        first_name,
        last_name,
        email,
        password,
        birthday,
    }
    crudDB.push(newCrud)
    return (newCrud)
 }

 module.exports = {
    getAllCrud,
    getCrudById,
    createCrud
 }
//  console.log(createCrud('anmy','nayle','nayle2701@gmail.com','1234','1991/01/27'))