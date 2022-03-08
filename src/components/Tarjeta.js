import React, { useState } from "react";
import { useModal } from "../hooks/useModal";
import logoEliminar from "../img/eliminar.png";
import ModalEliminar from "./ModalEliminar";

const Tarjeta = ({
  deleteCard,
  children,
  name,
  number,
  exp,
  segurity,
  cardType,

  indice,
}) => {
  const [isOpenModalEliminar, openModalEliminar, closeModalEliminar] =
    useModal(false);

  const [abierto, setAbierto] = useState(false);

  return (
    <>
      <li className="tarjeta">
        {children}
        {abierto ? (
          <ModalEliminar
            isOpen={isOpenModalEliminar}
            closeModal={() => {
              closeModalEliminar();
              setAbierto(!abierto);
            }}
          >
            <p className="msg-seguro">
              Seguro que desea eliminar la tarjeta terminada en {number} ?
            </p>
            <button
              type="button"
              className="btn-si"
              onClick={() => deleteCard()}
            >
              Si
            </button>
          </ModalEliminar>
        ) : (
          <div className="datos">
            <div className="logo-eliminar">
              <img src="" alt="logo" />
              <div
                className="tachito"
                onClick={() => {
                  openModalEliminar();
                  setAbierto(!abierto);
                }}
              >
                <img src={logoEliminar} height={20} width={20} alt="" />
              </div>
            </div>
            <div className="number">
              <button type="button">ojo</button>
              <p>{number}</p>
            </div>
            <p className="nombre">{name.toUpperCase()}</p>
            <div className="venc-clav">
              <div>
                <span className="hasta">HASTA</span>
                <span>{exp}</span>
              </div>
              <div className="security">{segurity}</div>
            </div>
          </div>
        )}
      </li>
    </>
  );
};

export default Tarjeta;
