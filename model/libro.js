import uri from "../config.js";
import { getAll, getOne, post, putOne, deleteOne} from "../controller/crud.js";
const endpoint = "/libro/";
const atributos = {
    autorId: "number",
    categoriaId: "number",
    editorialId: "number",
    fechaLanzamiento: "date",
    titulo: "string",
    isbn: "string",
    numPaginacion: "number",
    estadoId: "number",
};
// console.log(await getOne({id, uri, endpoint}));
// console.log(await deleteOne({id: 1, uri, endpoint}));

// FOR TEST POST
// const obj = {autorId: 2,categoriaId: 5,editorialId: 2,fechaLanzamiento: "2039-10-02",titulo: "La maquina del tiempo",isbn: "63796",numPaginacion: 100,estadoId: 1};
// console.log(await post({obj, atributos, uri, endpoint}));

// FOR TEST PUT
// const obj = {id: 1,autorId: 21,categoriaId: 13,editorialId: 11,fechaLanzamiento: "2032-10-02",titulo: "Celestinas",isbn: "6780",numPaginacion: 250,estadoId: 1}
// console.log(await putOne({obj, atributos, uri, endpoint}));


console.log(await getAll({uri, endpoint}))