import React from "react";
import "./ModalEliminar.css";

const ModalEliminar = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <article className={`modal-eliminar ${isOpen && "is-open-eliminar"}`}>
      <div
        className="modal-container-eliminar"
        onClick={handleModalContainerClick}
      >
        {children}
        <button type="button" className="btn-no" onClick={closeModal}>
          No
        </button>
      </div>
    </article>
  );
};

export default ModalEliminar;
