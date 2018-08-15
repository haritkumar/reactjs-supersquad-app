import React,{Component} from "react";
import { connect } from 'react-redux';
import { addCharacterById} from '../actions';

class HeroList extends Component{
    render(){
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
                                        <div className='list-item right-button'>-</div>
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
    console.log('statehero',state);
    return {
        heroes: state.heroes
    };
}

export default connect(mapStateToProps,null)(HeroList);
