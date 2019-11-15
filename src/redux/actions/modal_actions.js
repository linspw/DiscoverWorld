import { CREATE_MODAL } from '../constants/action_types';

export function createModal(data) {
    return { type: CREATE_MODAL, data }
};