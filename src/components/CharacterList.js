import React,{Component} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCharacterById} from '../actions';

class CharacterList extends Component{
    render(){
        console.log('character this.props',this.props);
        return(
            <div>
                <h3>CHARACTERS</h3>
                <ul className='list-group'>
                    {
                        this.props.characters.map(
                            character =>{
                                return (
                                    <li key={character.id} className='list-group-item'>
                                        <div className='list-item'>{character.name}</div>
                                        <div className='list-item right-button' onClick={() => this.props.addCharacterById(character.id)}>+</div>
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

//Maps value from store to component's props
function mapStateToProps(state){
    console.log('character state',state);
    return {
        characters: state.characters
    };
}

//call action creators, activate reducers, update store
function mapDispatchToProps(dispatch){
    return bindActionCreators({addCharacterById},dispatch);
}
//export default connect(mapStateToProps,{mapDispatchToProps})(CharacterList);
export default connect(mapStateToProps,{addCharacterById})(CharacterList);