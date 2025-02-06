import React, {useContext, useState} from 'react';
import './login.css';
import { loginContext } from '../context/loginContext';


export default function Login() {
    const[userName,setUserName]= useState('');
    const[password,setPassword]= useState('');
    const{dispatch} = useContext(loginContext);

 
    const handleLogin =(e)=>{
    e.preventDefault();
    if (!userName.trim()){
        alert('لطفا نام خود را وارد کنید')
        return
    }
    if (userName && password === '1234' ) {
        dispatch(
            {type:'ISLOGIN_TRUE',
              payload : {
                username : userName
              }
            })
    }
    if(userName && password !== '1234' ){
        dispatch(
            {type:'ISLOGIN_FALSE',
                payload : {
                username : userName
              }
            }
        )
    }
}

    return(
            <div className='container1'>
            <form className='login_form' onSubmit={handleLogin}>
                    <input type="text" placeholder='Username' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                    <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <button>LOGIN</button>
            </form>
        </div>
    )
};

