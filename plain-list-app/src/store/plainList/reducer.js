import * as actionTypes from './actions';


export const plainListReducer = function reducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.GET_PLAIN_LIST_SUCCESS:
            let data = action?.data?.electricity ?? [];
            return {
                ...state,
                data: [...data]
            };
        case actionTypes.GET_PLAIN_LIST_FAILED:
            return {
                ...state,
                message: action.data
            }
        default:
            return state;
    }
}