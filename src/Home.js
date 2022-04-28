import { useModal } from "./hooks/useModal";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import "./App.css";
import Modal from "./components/Modal";
import FormularioTarjeta from "./components/FormularioTarjeta";
import TarjetaList from "./components/TarjetaList";
import { useState } from "react";
import Login from "./components/Login";
import { getAuth, signOut } from "firebase/auth";
import firebaseApp from "./utils/firebaseConfig";
import { logOut } from "./redux/actions/actions";

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

  const dispatch = useDispatch();

  const login = useSelector((state) => state.login, shallowEqual);

  return (
    <>
      {login ? (
        <>
          <div className="header">
            <button
              type="button"
              onClick={() => {
                signOut(auth);
                dispatch(logOut());
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
