import { createContext, useEffect, useState } from "react";
import clientAxios from "../config/clienteAxios";


const ComidasContext = createContext()

const ComidasProvider = ({children}) => {
    const [comidas, setComidas] = useState()
    const [selectorUno, setSelectorUno] = useState()
    const [categorias, setCategorias] = useState()

    useEffect(() => {
        const obtenerComidas = async () => {
            try {
                const allComidas = await clientAxios('/tipo_de_comida')
                setComidas(allComidas.data)
            } catch (error) {
                console.log(`Error al obtener las comidas: ${error.message}`)
            }
        }
        obtenerComidas()
    }, [])

    const buscarCategoria = (id) => {
        const comidaSeleccionada = comidas.find( comida => parseInt(comida.id) === parseInt(id))
        setCategorias(comidaSeleccionada.categoria)
    }
    return (
        <ComidasContext.Provider
            value={{
                comidas,
                selectorUno,
                categorias,
                setSelectorUno,
                buscarCategoria
            }}
        >
            {children}
        </ComidasContext.Provider>
    )
}

export {
    ComidasProvider
}

export default ComidasContext
