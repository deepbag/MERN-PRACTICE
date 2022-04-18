export const GET_DETAILS = 'GET_DETAILS';

const initialState = {
    details: [
        {
            id:1,
            name: 'Deep Bag',
            email: 'deepbag92@gmail.com',
            phone: '+91-9893993028',
            country: 'Indian'
        },
        {
            id:2,
            name: 'Aman',
            email: 'aman@gmail.com',
            phone: '+91-9893993039',
            country: 'Indian'
        },
        {
            id:3,
            name: 'Prakash',
            email: 'prakash@gmail.com',
            phone: '+91-9893993049',
            country: 'Indian'
        }
    ]
}

const Reducer = (state=initialState, action)=>{
    switch(action.type){
        case GET_DETAILS:
            return state;
        default:
            return state;
    }
};

export default Reducer;