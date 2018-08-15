import characters from "./character";
import heroes from "./heroes";
import {combineReducers} from "redux"; 


const rootReducer=combineReducers({
    characters,
    heroes
})

export default rootReducer;