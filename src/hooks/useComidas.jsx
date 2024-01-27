import {useContext} from "react"
import ComidasContext from "../context/ComidasProvider"

const useComidas = () => {
    return useContext(ComidasContext)
}

export default useComidas