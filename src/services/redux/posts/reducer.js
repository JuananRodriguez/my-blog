import * as TYPES from './types';

const initialState = {
    total: 0,
    list: ['ONE', 'TWO']
};

export default (state = initialState, { type, payload }) => {
    
    switch (type) {
        case TYPES.GET_POSTS_SUCCESS:
        console.log('get post success', payload)
        return { ...state, fetching:true, createSuccess: false };
        
        
        default:
        return state;
        
    }

}