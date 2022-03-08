import React from 'react'
import logoEliminar from "../img/eliminar.png"
import ModalEliminar from './ModalEliminar'
import { useState } from 'react';


const Tarjeta = ({children,name, number, exp , segurity, cardType ,openModal}) => {

  const [cardList, setCardList] = useState([])
     

  
  return (
    <>
      
      <li className="tarjeta">
      
      {children}
      
        <div className="logo-eliminar">
          <img src="" alt="logo" /> <div className='tachito' onClick={ openModal /* deleteCard */ }><img src={logoEliminar} height={25} width={25} alt="" /></div>
        </div>
        <div className="number">
          <button type='button'>ojo</button><p>{number}</p>
        </div>
        <p className='nombre'>{name.toUpperCase()}</p>
        <div className="venc-clav">
          <div>
            <span>vence</span><span>{exp}</span>  
          </div>
          <div>
            {segurity}
          </div>
        </div>
        
      </li>
      
    </>
  )
}

export default Tarjeta