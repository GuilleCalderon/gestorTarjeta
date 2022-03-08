import React from 'react'
import "./ModalEliminar.css"

const ModalEliminar = ({children, isOpen, closeModal}) => {

  const handleModalContainerClick= e => e.stopPropagation()

  return (
    <article className= {`modal ${isOpen && "is-open"}`} >
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal}>X</button>
        {children}
      </div>
    </article>
  )
}

export default ModalEliminar