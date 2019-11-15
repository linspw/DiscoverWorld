import { SHOW_MODAL } from '../constants/action_types';

const initialState = {
    modalIsActive: false
};

function rootReducer(state = initialState, action) {
    //console.log("Estado:",state, "Ação:", action)
    if (action.type === SHOW_MODAL){
        return Object.assign({}, state, {
            modalIsActive: action.newValue
        });
    }
    return state;
};
export default rootReducer;