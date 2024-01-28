import useComidas from "../../hooks/useComidas"
import MenusCard from "../menusTable/MenusTable"

const Menus = () => {
    const {menus} = useComidas()
  return (
    <>
    <table className="menus">
        <tr>
            <th>#</th>
            <th>Plato</th>
            <th>Precio</th>
            <th></th>
        </tr>
        <tr>
          <td>1</td>
          <td>Comida</td>
          <td>Categoria</td>
          <td>Pedio menu</td>
        </tr>
    </table>
      {/* {menus?.map( menu => (
        <MenusCard data={menu} key={menu.id} />
      ))}    */}
    </>
  )
}

export default Menus
