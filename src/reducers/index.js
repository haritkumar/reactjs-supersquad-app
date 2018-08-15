import character_json from "../data/characters.json";

function characters(state = character_json, action){
    switch(action.type){
        default:
            return state;
    }
}

export default characters;