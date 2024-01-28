import PedidosTable from "../componentes/pedidos/PedidosTable"
import '../style/pedidos.css'

const Pedidos = () => {
  return (
    <div className='pedido-container'>
      <h1>Últimos Pedidos Tomados</h1>
      <div className="pedido-table">
        <PedidosTable/>
      </div>
    </div>
  )
}

export default Pedidos
