import './card-list.styles.css'
import MonsterCard from "../monster-card/monster-card.component";

const CardList = ({ monsters }) => (
    <div className="card-list">
        {monsters.map((monster) => {
            return <MonsterCard monster={monster} />
        })}
    </div>
)
export default CardList;