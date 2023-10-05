import uri from "../config.js";
import { getAll, getOne, post, putOne, deleteOne} from "../controller/crud.js";
const endpoint = "/categorias/";
const atributos = {
    nombre: "string"
};
// console.log(await getAll({uri, endpoint}))
// console.log(await getOne({id:1, uri, endpoint}));
// console.log(await deleteOne({id: 2, uri, endpoint}));

// FOR TEST POST
// const obj = {nombre: "drama"};
// console.log(await post({obj, atributos, uri, endpoint}));

// FOR TEST PUT
// const obj = {id: 1, nombre: "horror"}
// console.log(await putOne({obj, atributos, uri, endpoint}));