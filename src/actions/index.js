export const ADD_CHARACTER = "ADD_CHARACTER";

//Action creator
export function addCharacterById(id){
    const action = {
        type: ADD_CHARACTER,
        id: id
    }
    return action;
}