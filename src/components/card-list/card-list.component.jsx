import { Component } from "react";

class CardList extends Component{

    render() {
        const { monsters } = this.props;
        return (
            <div>
                {
                    monsters.map((monster) => (
                        <div key={monster.id}>{ monster.name }</div>
                    ))
                }
             </div>
        )
    }
}
export default CardList;