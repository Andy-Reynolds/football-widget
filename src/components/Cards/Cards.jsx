import "./Cards.scss";

const Cards = ({ homeStat, awayStat }) => {
  return (
    <div className="cards">
      <div className="cards__container cards__container--home">
        <div className="cards__card-colour cards__card-colour--yellow"></div>
        <h5 className="cards__card-number cards__card-number--home">
          {homeStat}
        </h5>
        <div className="cards__card-colour cards__card-colour--red"></div>
        <h5 className="cards__card-number cards__card-number--home">0</h5>
      </div>
      <div className="cards__container cards__container--away">
        <div className="cards__card-colour cards__card-colour--yellow"></div>
        <h5 className="cards__card-number cards__card-number--away">
          {awayStat}
        </h5>
        <div className="cards__card-colour cards__card-colour--red"></div>
        <h5 className="cards__card-number cards__card-number--away">0</h5>
      </div>
    </div>
  );
};

export default Cards;
