import { validacionDato, validacionObj,validacionIds } from "./validations.js";

const method = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE"
}

const config = { headers: { "content-type": "application/json" } };

export const getAll = async ({uri, endpoint} = {}) => {
    if (!uri) return { status: 400, message: 'Envía la URI por favor.'}
    if (!endpoint) return { status: 400, message: 'Envía el Endpoint por favor.'}
    return await (await fetch(`${uri}${endpoint}`)).json();
} 
export const getOne = async ({id, uri, endpoint} = {}) => {
    if (!id) return { status: 400, message: 'Envía el Id por favor.'}
    if (typeof id !== 'number') return { status: 400, message: 'El Id tiene un formato inválido.'}
    if (!uri) return { status: 400, message: 'Envía la URI por favor.'}
    if (!endpoint) return { status: 400, message: 'Envía el Endpoint por favor.'}
    let res = await fetch(`${uri}${endpoint}${id}`)
    if (res.status === 404) return { status: res.status, message: res.statusText}
    return await res.json()
} 
export const post = async ({obj = {}, atributos = {}, uri, endpoint} = {}) => {
    if (!uri) return { status: 400, message: 'Envía la URI por favor.'}
    if (!endpoint) return { status: 400, message: 'Envía el Endpoint por favor.'}
    let body = {};
    try {
        validacionObj(obj)
        validacionObj(atributos)
        await validacionIds({obj, uri})
        Object.entries(atributos).forEach((e) => Object.assign(body,validacionDato({nombreCampo: e[0], valor: obj[e[0]], tipoEsperado: e[1]})));
    } catch (error) { return { status: 400, message: error.message }; }
    config.method = method.POST;
    config.body = JSON.stringify(body);
    let res = await fetch(`${uri}${endpoint}`, config);
    if (res.status === 200 || res.status === 201 || res.status === 404) return { status: res.status, message: res.statusText}
}
export const putOne = async ({obj = {}, atributos = {}, uri, endpoint} = {}) => {
    if (!uri) return { status: 400, message: 'Envía la URI por favor.'}
    if (!endpoint) return { status: 400, message: 'Envía el Endpoint por favor.'}
    let body = {};
    try {
        validacionObj(obj)
        validacionObj(atributos)
        validacionDato({nombreCampo: "id", valor: obj.id, tipoEsperado: "number"});
        let data = await getOne({id: obj.id, uri, endpoint})
        obj = {...data, ...obj}
        await validacionIds({obj, uri})
        Object.entries(atributos).forEach((e) => Object.assign(body,validacionDato({nombreCampo: e[0], valor: obj[e[0]], tipoEsperado: e[1]})));
    } catch (error) { return { status: 400, message: error.message }; }
    config.method = method.PUT;
    config.body = JSON.stringify(body);
    let res = await fetch(`${uri}${endpoint}${obj.id}`, config);
    if (res.status === 200 || res.status === 201 || res.status === 404) return { status: res.status, message: res.statusText}
}
export const deleteOne = async ({id, uri, endpoint} = {}) => {
    if (!id) return { status: 400, message: 'Envía el Id por favor.'}
    if (typeof id !== 'number') return { status: 400, message: 'El Id tiene un formato inválido.'}
    if (!uri) return { status: 400, message: 'Envía la URI por favor.'}
    if (!endpoint) return { status: 400, message: 'Envía el Endpoint por favor.'}
    config.method = method.DELETE;
    let res = await fetch(`${uri}${endpoint}${id}`, config);
    if (res.status === 200 || res.status === 404) return { status: res.status, message: res.statusText}
}