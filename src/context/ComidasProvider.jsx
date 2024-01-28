import { createContext, useEffect, useState } from "react";
import clientAxios from "../config/clienteAxios";


const ComidasContext = createContext()

const ComidasProvider = ({children}) => {
    const [comidas, setComidas] = useState()
    const [selectorUno, setSelectorUno] = useState()
    const [categorias, setCategorias] = useState()
    const [menus, setMenus] = useState()
    const [pedidos, setPedidos] = useState()
    const [recargar, setRecargar] = useState(false)
    const [cargando, setCargando] = useState(false)
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

    useEffect(() => {
        const obtenerPedidos = async () => {
            try {
                const {data} = await clientAxios('/pedir-menu')
                setPedidos(data.data)

            } catch (error) {
                console.log(`Hubo un error al obtener los pedidos: {error.message}`)
            }
        }
        obtenerPedidos()
    }, [recargar])

    const fechaFormateada = (dato) => {
        const fecha = new Date(dato)
        const obtenerHora = fecha.toTimeString().split(' ')[0]
        return obtenerHora
    }

    const buscarCategoria = (nombre) => {
        const comidaSeleccionada = comidas.find( comida => comida.nombre === nombre)
        setCategorias(comidaSeleccionada.categoria)
    }

    const buscarMenus = async(tipoComida, categoria) => {
        try {
            const menus = await clientAxios(`/mostar-menu/?tipo_comida=${tipoComida}&categoria=${categoria}`)
            setMenus(menus.data.data)
        } catch (error) {
            console.log(`Error al intentar buscar los menus para Tipo de comida: ${tipoComida} y Categoria: ${categoria}`)
        } finally {
            setTimeout(() => {
                setCargando(false)
            }, 1500)
        }
    }

    const pedirMenu = async(id) => {
        try {
            const {data} = await clientAxios.post(`/pedir-menu`, {"menu_id": id})
            setOpenModal(true)
        } catch (error) {
            console.log(`Hubo un error al intentar pedir el menu: ${id} - ${error}`)
        } finally {
            setTimeout(() => {
                setRecargar(false)
            }, 2000)
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
                pedidos,
                recargar,
                cargando,
                setSelectorUno,
                buscarCategoria,
                buscarMenus,
                pedirMenu,
                setOpenModal,
                fechaFormateada,
                setRecargar,
                setCargando
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
