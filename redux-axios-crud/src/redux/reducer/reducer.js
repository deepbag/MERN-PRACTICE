import { GET_DETAILS } from "../type";

// const initialState = {
//     details: [
//         {
//             id:1,
//             name: 'Deep Bag',
//             email: 'deepbag92@gmail.com',
//             phone: '+91-9893993028',
//             country: 'Indian'
//         },
//         {
//             id:2,
//             name: 'Aman',
//             email: 'aman@gmail.com',
//             phone: '+91-9893993039',
//             country: 'Indian'
//         },
//         {
//             id:3,
//             name: 'Prakash',
//             email: 'prakash@gmail.com',
//             phone: '+91-9893993049',
//             country: 'Indian'
//         },
//         {
//             id:4,
//             name: 'Prakash Sir',
//             email: 'prakashsir@gmail.com',
//             phone: '+91-9893993089',
//             country: 'Indian'
//         }
//     ]
// }

const initialState = {
    details: [],
}
const Reducer = (state=initialState, action)=>{
    switch(action.type){
        case GET_DETAILS:
            return{
                details: action.payload,
            }
        default:
            return state;
    }
};

export default Reducer;