import uri from "../config.js";
import { getAll, getOne, post, putOne, deleteOne} from "../controller/crud.js";
const endpoint = "/reserva/";
const atributos = {
    usuarioId: "number",
    libroId: "number",
    fechaReserva: "date",
    fechaResevaFin: "date",
    estado: "number",
};
// console.log(await getOne({id, uri, endpoint}));
// console.log(await deleteOne({id: 1, uri, endpoint}));

// FOR TEST POST
const obj = {usuarioId: 2,libroId: 5,fechaReserva: "2039-10-02",fechaResevaFin : "2039-11-02",estado: 1};
console.log(await post({obj, atributos, uri, endpoint}));

// FOR TEST PUT
// const obj = {id: 1,usuarioId: 21,libroId: 13,fechaReserva: "2032-10-02",fechaResevaFin : "2039-12-02",stado: 1}
// console.log(await putOne({obj, atributos, uri, endpoint}));


console.log(await getAll({uri, endpoint}))