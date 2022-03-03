import { useModal } from './hooks/useModal'
import './App.css';
import Modal from './components/Modal';

import FormularioTarjeta from './components/FormularioTarjeta';
import TarjetaList from './components/TarjetaList';

function App() {


  const [isOpenModal, openModal ,closeModal] = useModal(false)

  return (
    <>
    <div className='header'>
      <div className="title">
        <h2>Mis tarjetas</h2><button type='button' className='add-button' onClick={openModal}>+</button>
      
      </div>
    </div>
    <Modal isOpen={isOpenModal} closeModal={closeModal}>
      <FormularioTarjeta />

    </Modal>
    <hr />
    <TarjetaList />

    
      
    </>
  );
}

export default App;
