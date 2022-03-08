import React from 'react'

import Tarjeta from './Tarjeta'

const TarjetaList = ({cardList,deleteCard,openModal,isOpen,closeModal}) => {

  

  return (
    <section className='tarjeta-container'>
      <ul>
        {cardList.map((card,i)=> <Tarjeta isOpen={isOpen} closeModal={closeModal} openModal={openModal} deleteCard={()=> deleteCard(i)} id={i} key={card.number.toString()} name={card.name} number={card.number} exp={card.exp} segurity={card.segurity} cardType={card.cardType}>
        
        
        </Tarjeta>)}
      </ul>
    </section>
  )
}

export default TarjetaList