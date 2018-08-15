import React,{Component} from "react";
import { connect } from 'react-redux';

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

export default connect(mapStateToProps,null)(CharacterList);