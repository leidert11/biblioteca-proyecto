import uri from "../config.js";
import {editorialesDirrecion} from "../controller/querysSecundarias.js";

import { getAll, getOne, post, putOne, deleteOne} from "../controller/crud.js";
const endpoint = "/editoriales/";
const atributos = {
    nombre: "string",
    descricion: "string",
};
// console.log(await getOne({id, uri, endpoint}));
// console.log(await deleteOne({id: 1, uri, endpoint}));

// FOR TEST POST
// const obj = {nombre: "el tiempo",descricion: "esta editorial se fundo hace mas de 100 años"};
// console.log(await post({obj, atributos, uri, endpoint}));

// FOR TEST PUT
// const obj = {id: 1,autorId: 1,categoriaId: 1,editorialId: 1,fechaLanzamiento: "2040-10-02",titulo: "Celestina",isbn: "67890",numPaginacion: 250,estadoId: 1}
// console.log(await putOne({obj, atributos, uri, endpoint}));

// console.log(await getAll({uri, endpoint}))
console.log(await editorialesDirrecion());