import Tarjeta from "./Tarjeta";

const TarjetaList = ({ cardList, deleteCard, closeModal }) => {
  return (
    <section className="tarjeta-container">
      <ul>
        {cardList.map((card, i) => (
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
