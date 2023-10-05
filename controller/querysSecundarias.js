import { getAll, getOne } from "../controller/crud.js";
import { tablas} from "../model/index.js";    
import uri from "../config.js";

//obtener los autores y su nacinalidad
export const autoresNacionalidad = async () => {
    const endpoint = tablas.autor;
    try {
        const autores = await getAll({uri,endpoint});
        return autores.map( autor => ({
            nombre: autor.nombre,
            nacionalidad: autor.nacionalidad
        }))
    } catch (e) {
        console.log(e);
    }
}

//listar todas las catgorias
export const listarCategorias = async () => {
    const endpoint = tablas.categorias;
    try {
        const categorias = await getAll({uri,endpoint});
        return categorias.map(categoria => categoria.nombre);
    } catch (e) {
        console.log(e);
    }
}

//mostrar todas las editoriales y su descriciones
export const editorialesDirrecion = async ()=>{
    const endpoint = tablas.editoriales;
    try {
        const editoriales = await getAll({uri,endpoint});
        return editoriales.map(editorial => ({
            nombre: nombre.editorial,descripcion : descripcion.descripcion
        }))
    } catch (e) {
        console.log();
    }
}