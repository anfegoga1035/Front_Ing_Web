import { axiosConfiguration } from '../configuration/axiosConfiguration'

// Obtener todos los tipos
const obtenerTipos = () => {
    return axiosConfiguration.get('tipos/?estado=true', {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

// Crear un tipo
const crearTipo = (data) => {
    return axiosConfiguration.post('tipos', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

// Actualizar tipo
const editarTipo = (tipoId, data) => {
    return axiosConfiguration.put('tipos/' + tipoId, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

// Borrar tipo
const borrarTipo = (tipoId) => {
    return axiosConfiguration.delete('tipos/' + tipoId, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

// Obtener tipo por su ID
const obtenerTipoPorID = (tipoId) => {
    return axiosConfiguration.get('tipos/' + tipoId, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export {
    obtenerTipos,
    crearTipo,
    editarTipo,
    borrarTipo,
    obtenerTipoPorID
}
