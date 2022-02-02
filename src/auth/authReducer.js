import { types } from "../types/types";

const state = {
    name: "Guido",
    logged: true,
};

// const loginAction = {
//     type: types.login,
//     payload: {
//         name: "Guido",
//         email: "asd@asd.com",
//     };
// };

export const authReducer = (state, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true,
            };
        
        case types.logout:
            return {
                logged: false,
            };
    
        default:
            return state;
    };
};