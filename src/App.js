import { useModal } from './hooks/useModal'
import './App.css';
import Modal from './components/Modal';
import FormularioTarjeta from './components/FormularioTarjeta';
import TarjetaList from './components/TarjetaList';
import { useState } from 'react';

function App() {

  
  const [isOpenModal, openModal ,closeModal] = useModal(false)
  const [cardList, setCardList] = useState([])

  const addToCardList = (card) => {
    setCardList([...cardList,card])
  }

  const deleteCard = (index) => {
    const newCardList = cardList
    newCardList.splice(index,1)
    setCardList([...newCardList])
  } 



  return (
    <>
    <div className='header'>
      <div className="title">
        <h2>Mis tarjetas</h2><button type='button' className='add-button' onClick={openModal}>+</button>
      
      </div>
    </div>
    <Modal isOpen={isOpenModal} closeModal={closeModal}>
      <FormularioTarjeta addToCardList={addToCardList} closeModal={closeModal}/>

    </Modal>
    <hr />
    {cardList.length === 0 && <p className='header'>“No tienes tarjetas aún, agrega una para simplificar tus pagos”</p> }
    <TarjetaList cardList={cardList} deleteCard={deleteCard}/>

    
      
    </>
  );
}

export default App;
