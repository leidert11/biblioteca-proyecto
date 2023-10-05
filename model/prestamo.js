import uri from "../config.js";
import { getAll, getOne, post, putOne, deleteOne} from "../controllers/request.js";
const endpoint = "/prestamo/";
const atributos = {
    usuarioId: "number",
    libroId: "number",
    fechaPrestamo: "date",
    fechaDevolucion: "date",
    estado: "number",
};
// console.log(await getOne({id, uri, endpoint}));
// console.log(await deleteOne({id: 1, uri, endpoint}));

// FOR TEST POST
const obj = {usuarioId: 3,libroId: 1,fechaPrestamo: "2029-10-02",fechaDevolucion : "2032-11-02",estado: 1};
console.log(await post({obj, atributos, uri, endpoint}));

// FOR TEST PUT
// const obj = {id: 1,usuarioId: 21,libroId: 13,fechaPrestamo: "2032-10-02",fechaDevolucion : "2039-12-02",stado: 1}
// console.log(await putOne({obj, atributos, uri, endpoint}));


console.log(await getAll({uri, endpoint}))