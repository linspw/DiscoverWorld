import { SHOW_MODAL } from '../constants/action_types';

export function showModal(data) {
    console.log("Data",data)
    return { type: SHOW_MODAL, newValue: data }
};