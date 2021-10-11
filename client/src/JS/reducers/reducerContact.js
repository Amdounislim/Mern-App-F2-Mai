import { GET_CONTACT, GET_CONTACTS, TOGGLE_FALSE, TOGGLE_TRUE } from "../constants/actionTypes";

const intialState = {
    contacts: [],
    contactId: {},
    isEdit: false
}


const reducerContact = (state = intialState, action) => {
    switch (action.type) {
        case GET_CONTACTS:
            return { ...state, contacts: action.payload }

        case GET_CONTACT:
            return { ...state, contactId: action.payload[0] }

        case TOGGLE_TRUE:
            return { ...state, isEdit: true }

        case TOGGLE_FALSE:
            return { ...state, isEdit: false }

        default:
            return state;
    }
}

export default reducerContact