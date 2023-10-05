import uri from "../config.js";
import { getAll, getOne, post, putOne, deleteOne} from "../controllers/crud.js";
const endpoint = "/usuarios/";
const atributos = {
    nombre: "string",
    apellido: "string",
    direccion: "string",
    telefono: "string",
    email: "string"
};
// console.log(await getOne({id:1, uri, endpoint}));
// console.log(await deleteOne({id: 2, uri, endpoint}));

// FOR TEST POST
// const obj = {nombre: "leider",apellido: "tami",direccion:"avenida siempre viva",telefono: "+3 1232134343",email: "sanjuan@gmail.com"};
// console.log(await post({obj, atributos, uri, endpoint}));

// FOR TEST PUT
const obj = {id:1 , nombre: "audrey",apellido: "torres",telefono: "+3 1232134343"};
console.log(await putOne({obj, atributos, uri, endpoint}));

console.log(await getAll({uri, endpoint}))
