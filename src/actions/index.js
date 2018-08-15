export const ADD_CHARACTER = "ADD_CHARACTER";

//Action creater
export function addCharacterById(id){
    const action = {
        type: ADD_CHARACTER,
        id: id
    }
    return action;
}