
const SelectorCard = ({data}) => {
  return (
    <>
    <option value={data.id}>{data.nombre}</option> 
    </>
  )
}

export default SelectorCard
