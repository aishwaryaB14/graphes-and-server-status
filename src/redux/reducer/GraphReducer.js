import { GET_STATUS } from '../actions/type';

const INITITIAL_STATE = {
    graphs: [],

};

export default (state = INITITIAL_STATE, action) => {
    switch (action.type) {

        case GET_STATUS:
            return {
                ...state,
                graphs: action.payload
            };
          
        default:
            return state;
    }
};
