import useComidas from "../../hooks/useComidas"

const PedidosTable = () => {
  const {pedidos, fechaFormateada} = useComidas()
    return (
        <>
        <table>
          <thead>
            <tr>  
              <th>#</th>
              <th>Plato</th>
              <th>Precio</th>
              <th>Hora</th>
            </tr>
          </thead>
          <tbody>
    
          {
            pedidos?.map((menu, index) => (
              <tr key={menu.id}>
                <td>{index + 1}</td>
                <td>{menu.nombre}</td>
                <td>${menu.precio}</td>
                <td>{fechaFormateada(menu.hora_pedido)}</td>
              </tr>
            ))
          }
          </tbody>
        </table>
        </>
      )
}

export default PedidosTable
