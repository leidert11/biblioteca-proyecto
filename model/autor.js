import uri from "../config.js";

import { getAll, getOne, post, putOne, deleteOne} from "../controller/crud.js";
const endpoint = "/autor/";
const atributos = {
    nombre: "string",
    apellido: "string",
    nacionalidad: "string",
};

// FOR TEST POST
// const obj = {id:1 , nombre: "gabriel",apellido: "garcia",nacionalidad:"canada"};
// console.log(await post({obj, atributos, uri, endpoint}));

// FOR TEST PUT
// const obj = {id:1 , nombre: "gabriel",apellido: "garcia",nacionalidad:"canada"};
// console.log(await putOne({obj, atributos, uri, endpoint}));

// console.log(await getOne({id:1, uri, endpoint}));
// console.log(await deleteOne({id: 2, uri, endpoint}));

// console.log(await getAll({uri, endpoint}))
