import { useModal } from "./hooks/useModal";
import { useSelector } from "react-redux";
import "./App.css";
import Modal from "./components/Modal";
import FormularioTarjeta from "./components/FormularioTarjeta";
import TarjetaList from "./components/TarjetaList";
import { useState } from "react";
import Login from "./components/Login";
import { getAuth, signOut } from "firebase/auth";
import firebaseApp from "./utils/firebaseConfig";

const auth = getAuth(firebaseApp);

function App() {
  const [isOpenModal, openModal, closeModal] = useModal(false);

  const [cardList, setCardList] = useState([]);

  const addToCardList = (card) => {
    setCardList([...cardList, card]);
  };

  const deleteCard = (indice) => {
    const newCardList = cardList;
    newCardList.splice(indice, 1);
    setCardList([...newCardList]);
  };

  const user = useSelector((state) => state.user);
  console.log(user);

  return (
    <>
      {user ? (
        <>
          <div className="header">
            <button
              type="button"
              onClick={() => {
                signOut(auth);
              }}
            >
              Log Out
            </button>
            <div className="title">
              <h2>Mis tarjetas</h2>
              <button type="button" className="add-button" onClick={openModal}>
                +
              </button>
            </div>
          </div>
          <Modal isOpen={isOpenModal} closeModal={closeModal}>
            <FormularioTarjeta
              addToCardList={addToCardList}
              closeModal={closeModal}
            />
          </Modal>
          <hr />

          {cardList.length === 0 && (
            <p className="header">
              “No tienes tarjetas aún, agrega una para simplificar tus pagos”
            </p>
          )}
          <TarjetaList
            setCardList={setCardList}
            cardList={cardList}
            deleteCard={deleteCard}
          />
        </>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
