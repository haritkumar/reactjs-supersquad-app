import React,{Component} from "react";
import { connect } from 'react-redux';
import { removeCharacterById} from '../actions';

class HeroList extends Component{
    render(){
        console.log('hero this.props',this.props);
        return(
            <div>
                <h3>MY SQUAD</h3>
                <ul className='list-group'>
                    {
                        this.props.heroes.map(
                            hero =>{
                                return (
                                    <li key={hero.id} className='list-group-item'>
                                        <div className='list-item'>{hero.name}</div>
                                        <div className='list-item right-button' onClick={() => this.props.removeCharacterById(hero.id)}>x</div>
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
            </div>    
        )
    }
}

function mapStateToProps(state){
    console.log('heroes statehero',state);
    return {
        heroes: state.heroes
    };
}

export default connect(mapStateToProps,{removeCharacterById})(HeroList);
