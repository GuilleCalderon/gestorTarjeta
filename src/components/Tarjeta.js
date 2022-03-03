import React from 'react'
import logoEliminar from "../img/eliminar.png"

const Tarjeta = () => {

 

  
  return (
    <>
      <li className="tarjeta">
        <div className="logo-eliminar">
          <img src="" alt="logo" /> <div ><img src={logoEliminar} height={25} width={25} alt="" /></div>
        </div>
        <div className="number">
          <button type='button'>ojo</button><p>xxxx-xxxx-xxxx-xxxx</p>
        </div>
        <p className='nombre'>Nombre completo</p>
        <div className="venc-clav">
          <div>
            <span>hasta</span><span>xx/xx</span>  
          </div>
          <div>
            XXX
          </div>
        </div>
      </li>
    </>
  )
}

export default Tarjeta