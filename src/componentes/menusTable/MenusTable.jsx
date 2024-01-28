import useComidas from "../../hooks/useComidas"
import send from "../../assets/prime_send.png"

const MenusTable = () => {

  const {menus, pedirMenu, setRecargar} = useComidas()

  return (
    <>
    <table>
      <thead>
        <tr>  
          <th>#</th>
          <th>Plato</th>
          <th>Precio</th>
          <th></th>
        </tr>
      </thead>
      <tbody>

      {
        menus?.map((menu, index) => (
          <tr key={menu.id}>
            <td>{index + 1}</td>
            <td>{menu.nombre}</td>
            <td>${menu.precio}</td>
            <td className="btn-pedir">
              <button onClick={() => {
                setRecargar(true)
                
                pedirMenu(menu.id)
                }}>
                <img src={send}/>
                Pedir
              </button>
            </td>
          </tr>
        ))
      }
      </tbody>
    </table>
    </>
  )
}

export default MenusTable
