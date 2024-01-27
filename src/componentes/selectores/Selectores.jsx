
const Selectores = () => {
  return (
    <div className="selectores-container">
      <div className="selector-tipo-comida">
        <label htmlFor="tipocomida">Tipo de comida</label>
        <select name="tipocomida" id="tipocomida">
            <option value="1">comida 1</option>
            <option value="2">comida 2</option>
            <option value="3">comida 3</option>
            <option value="4">comida 4</option>
        </select>
      </div>

      <div className="selector-categoria">
        <label htmlFor="categorias">Categorias</label>
        <select name="categorias" id="categorias">
            <option value="1">comida 1</option>
            <option value="2">comida 2</option>
            <option value="3">comida 3</option>
            <option value="4">comida 4</option>
        </select>
      </div>
    </div>
  )
}

export default Selectores
