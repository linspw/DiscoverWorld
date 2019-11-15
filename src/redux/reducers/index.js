import { CREATE_MODAL } from '../constants/action_types';

const initialState = {
    modalIsActive: false
};
function rootReducer(state = initialState, action) {
    if (action.type === CREATE_MODAL){
        return Object.assign({}, state, {
            modalIsActive: state.data
        });
    }
    return state;
};
export default rootReducer;