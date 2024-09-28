import './monster-card.styles.css';

const MonsterCard = (monster)=> {
        const { id, name, email } = monster;
        return (
            <div className="monster-card" key={id}>
                <img
                    src={`https://robohash.org/${id}?set=set2&size=180x180`}
                    alt="monster"
                />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
}

export default MonsterCard;  