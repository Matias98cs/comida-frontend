import useComidas from "../../hooks/useComidas"
import SelectorCard from "../selectorCard/SelectorCard"

const Selectores = () => {
  const {comidas, buscarCategoria, categorias} = useComidas()
  const handleSelectorUno = (e) => {
    buscarCategoria(e.target.value)
  }
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
        <select name="categorias" id="categorias">
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
