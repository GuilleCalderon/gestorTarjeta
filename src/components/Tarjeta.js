import React from 'react'
import logoEliminar from "../img/eliminar.png"

const Tarjeta = ({name, number, exp , segurity, cardType, cardList, deleteCard}) => {

  
  
  return (
    <>
      <li className="tarjeta">
        <div className="logo-eliminar">
          <img src="" alt="logo" /> <div className='tachito' onClick={deleteCard}><img src={logoEliminar} height={25} width={25} alt="" /></div>
        </div>
        <div className="number">
          <button type='button'>ojo</button><p>{number}</p>
        </div>
        <p className='nombre'>{name}</p>
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