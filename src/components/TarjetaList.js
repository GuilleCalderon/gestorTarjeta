import { useSelector } from "react-redux";
import Tarjeta from "./Tarjeta";

const TarjetaList = ({ /* cardList, */ deleteCard }) => {
  const card = useSelector((state) => state.cards.card);
  return (
    <section className="tarjeta-container">
      <ul>
        {card?.map((card, i) => (
          <Tarjeta
            deleteCard={() => deleteCard(i)}
            indice={i}
            key={card.number.toString()}
            name={card.name}
            number={card.number}
            exp={card.exp}
            segurity={card.segurity}
            cardType={card.cardType}
          ></Tarjeta>
        ))}
      </ul>
    </section>
  );
};

export default TarjetaList;
