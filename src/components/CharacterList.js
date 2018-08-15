import React,{Component} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCharacterById} from '../actions';

class CharacterList extends Component{
    render(){
        console.log('this.props',this.props);
        return(
            <div>
                <h2>Characters</h2>
                <ul>
                    {
                        this.props.characters.map(
                            character =>{
                                return (
                                    <li key={character.id}>
                                        {character.name}
                                        <div onClick={() => this.props.addCharacterById(character.id)}>+</div>
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
    console.log('state',state);
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