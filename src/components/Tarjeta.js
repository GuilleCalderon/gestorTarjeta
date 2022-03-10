import React, { useState } from "react";
import { useModal } from "../hooks/useModal";
import logoEliminar from "../img/eliminar.png";
import ModalEliminar from "./ModalEliminar";
import visaLogo from "../img/visa-logo-1.png";
import mastercardLogo from "../img/master.svg";
import amexLogo from "../img/american.svg";
import ojoOn from "../img/eye-outline.svg";
import ojoOff from "../img/eye-off-outline.svg";

const Tarjeta = ({
  deleteCard,
  children,
  name,
  number,
  exp,
  segurity,
  cardType,
}) => {
  const [isOpenModalEliminar, openModalEliminar, closeModalEliminar] =
    useModal(false);

  const [abierto, setAbierto] = useState(false);

  const [ojo, setOjo] = useState(false);

  const numberString = number.toString();

  const ultimosCuatro = numberString.slice(-4, 16);

  const numberQ1 = numberString.slice(0, 4);
  const numberQ2 = numberString.slice(4, 8);
  const numberQ3 = numberString.slice(8, 12);

  const numeroVisible =
    numberQ1 + " " + numberQ2 + " " + numberQ3 + " " + ultimosCuatro;

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
              Seguro que desea eliminar la tarjeta terminada en {ultimosCuatro}?
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
              {number[0] === "4" && (
                <img src={visaLogo} width={60} alt="logo" />
              )}
              {number[0] === "5" && (
                <img src={mastercardLogo} width={50} alt="logo" />
              )}
              {number[0] === "3" && (
                <img src={amexLogo} width={60} alt="logo" />
              )}
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
              <div onClick={() => setOjo(!ojo)}>
                <img
                  src={ojo ? ojoOn : ojoOff}
                  alt=""
                  width={30}
                  className="ojo"
                />
              </div>
              {ojo ? (
                <p> {numeroVisible}</p>
              ) : (
                <p> **** **** **** {ultimosCuatro} </p>
              )}
            </div>
            <p className="nombre">{name.toUpperCase()}</p>
            <div className="venc-clav">
              <div>
                <span className="hasta">HASTA</span>
                <span>{exp}</span>
              </div>
              {ojo ? (
                <div className="security">{segurity}</div>
              ) : (
                <div className="security">* * *</div>
              )}
            </div>
          </div>
        )}
      </li>
    </>
  );
};

export default Tarjeta;
