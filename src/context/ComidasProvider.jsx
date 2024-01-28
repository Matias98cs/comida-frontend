import { createContext, useEffect, useState } from "react";
import clientAxios from "../config/clienteAxios";


const ComidasContext = createContext()

const ComidasProvider = ({children}) => {
    const [comidas, setComidas] = useState()
    const [selectorUno, setSelectorUno] = useState()
    const [categorias, setCategorias] = useState()
    const [menus, setMenus] = useState()

    const [openModal, setOpenModal] = useState(false)

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

    const buscarCategoria = (nombre) => {
        const comidaSeleccionada = comidas.find( comida => comida.nombre === nombre)
        setCategorias(comidaSeleccionada.categoria)
        // setSelectorComida('')
    }

    const buscarMenus = async(tipoComida, categoria) => {
        console.log(`Tipo Comida: ${tipoComida} - Categoria: ${categoria}`)
        try {
            const menus = await clientAxios(`/mostar-menu/?tipo_comida=${tipoComida}&categoria=${categoria}`)
            setMenus(menus.data.data)
        } catch (error) {
            console.log(`Error al intentar buscar los menus para Tipo de comida: ${tipoComida} y Categoria: ${categoria}`)
        }
    }

    const pedirMenu = async(id) => {
        try {
            const {data} = await clientAxios.post(`/pedir-menu`, {"menu_id": id})
            console.log(data)
            setOpenModal(true)
        } catch (error) {
            console.log(`Hubo un error al intentar pedir el menu: ${id} - ${error}`)
        }
    }

    return (
        <ComidasContext.Provider
            value={{
                comidas,
                selectorUno,
                categorias,
                menus,
                openModal,
                setSelectorUno,
                buscarCategoria,
                buscarMenus,
                pedirMenu,
                setOpenModal
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
