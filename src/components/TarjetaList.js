import React from 'react'
import Tarjeta from './Tarjeta'

const TarjetaList = ({cardList,deleteCard}) => {

  return (
    <section className='tarjeta-container'>
      <ul>
        {cardList.map((card,i)=> <Tarjeta deleteCard={()=> deleteCard(i)} key={card.number.toString()} name={card.name} number={card.number} exp={card.exp} segurity={card.segurity} cardType={card.cardType}/>)}
      </ul>
    </section>
  )
}

export default TarjetaList