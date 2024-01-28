import { Modal } from 'react-responsive-modal';
import '../../style/modal.css'
import 'react-responsive-modal/styles.css';
import useComidas from '../../hooks/useComidas';

const ModalPedido = () => {
    const {openModal, setOpenModal} = useComidas()

    const onCloseModal = () => setOpenModal(!open);
  
    return (
      <>
        <Modal classNames={{
          modal: 'modal'
        }} open={openModal} onClose={onCloseModal} center>
          <div className='modal-container'>
            <h2>Pedido exitoso</h2>
            <p>
              Tu pedido fue realizado con éxito. Llegará en 30 minutos.
            </p>
            <button
              onClick={onCloseModal}
            >
            Continuar</button>
          </div>
        </Modal>
      </>
    )
}

export default ModalPedido
