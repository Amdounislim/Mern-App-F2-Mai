import { GET_CONTACTS } from "../constants/actionTypes";

const intialState = {
    contacts: []
}


const reducerContact = (state = intialState, action) => {
    switch (action.type) {
        case GET_CONTACTS:
            return { ...state, contacts: action.payload }

        default:
            return state;
    }
}

export default reducerContact