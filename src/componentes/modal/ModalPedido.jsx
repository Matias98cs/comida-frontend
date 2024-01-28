import { Modal } from 'react-responsive-modal';
import {useNavigate} from 'react-router-dom'
import '../../style/modal.css'
import 'react-responsive-modal/styles.css';
import useComidas from '../../hooks/useComidas';
import Spinner from '../spinner/Spinner';

const ModalPedido = () => {
    const {openModal, setOpenModal, recargar} = useComidas()
    const navigate = useNavigate()
    const onCloseModal = () => {
      setOpenModal(!openModal)
      navigate('/pedidos')
    };
    return (
      <>
        {
          recargar ? (
            <Spinner/>
          )
          :
          (
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
          )
        }
      </>
    )
}

export default ModalPedido
