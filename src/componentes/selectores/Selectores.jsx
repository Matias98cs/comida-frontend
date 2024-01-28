import { useEffect, useState } from "react"
import useComidas from "../../hooks/useComidas"
import SelectorCard from "../selectorCard/SelectorCard"

const Selectores = () => {
  const [selectComida, setSelectComida] = useState()
  const [selectCategoria, setSelectCategoria] = useState()
  const {comidas, buscarCategoria, categorias, buscarMenus, setCargando} = useComidas()


  const handleSelectorUno = (e) => {
    let selectorUno = e.target.value
    buscarCategoria(selectorUno)
    setSelectComida(selectorUno)
  }
  const handleSelectorDos = (e) => {
    let selectorDos = e.target.value
    setSelectCategoria(selectorDos)
    setCargando(true)
  }

  useEffect(() => {
    if (selectComida, selectCategoria) {
      buscarMenus(selectComida, selectCategoria)
    }
  }, [selectComida, selectCategoria])
  return (
    <div className="selectores-container">
      <div className="selector-tipo-comida">
        <label htmlFor="tipocomida">Tipo de comida</label> 
        <select name="tipocomida" id="tipocomida" onChange={handleSelectorUno}>
          <option>Seleccioná un tipo</option>

          {comidas?.map((comida) => (
            <SelectorCard data={comida} key={comida.id} />
          ))}       
        </select>
      </div>

      <div className="selector-categoria">
        <label htmlFor="categorias">Categorias</label>
        <select name="categorias" id="categorias" onChange={handleSelectorDos}>
            <option value="0">Seleccioná una categoría</option>
            {categorias?.map( (cate) => (
              <SelectorCard data={cate} key={cate.id}/>
            ))}
        </select>
      </div>
    </div>
  )
}

export default Selectores
