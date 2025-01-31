
import { createContext, useReducer } from "react";


export const loginContext = createContext({});


const LoginProvider = ({children})=>{
    
const initialState = {
    isLogin : false,
    isShow : false,
    username : ''
}

const reducer = (state, action)=>{
    switch (action.type) {
        case 'ISLOGIN_TRUE':
         return {
            ...state,
            isLogin : true,
            isShow : true,
            username : action.payload.username
        };
        case 'ISLOGIN_FALSE':
            return {
                ...state,
            isLogin : true,
            isShow : false,
            username : action.payload.username
        };
        case 'LOGOUT':
         return {
            ...state,
            isLogin : false,
            isShow : false,
            username: ''
        };
        default:
            return state;
}
};

    const[state , dispatch] = useReducer(reducer,initialState);
   
    return(
            <loginContext.Provider value={{state , dispatch}}>
               {children}
            </loginContext.Provider>
    )
}


export default LoginProvider;






  
   