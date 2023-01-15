import "../card-list/card-list.styles.css";
import CardContainer from "../card-container/card-container.component";

const CardList = ({monsters}) => {
 return ( <div className="card-list">
  {monsters.map((monster) => {
    return <CardContainer monster={monster} key={monster.id} />;
  })}
 </div>);
};
export default CardList;