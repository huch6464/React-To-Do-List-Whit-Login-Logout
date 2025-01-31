import { Link } from 'react-router-dom'
import './navbar.css'
import { useContext } from 'react'
import { loginContext } from '../context/loginContext'


export default function Navbar() {
    const{state,dispatch}= useContext(loginContext)
    return(
        <div className="navbar">
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/todos'>Todos</Link>
                </li>
                <li>
                    <Link to='/aboutus'>AboutUs</Link>
                </li>
            </ul>
            <div className='logout'>
                <button onClick={()=>{dispatch({type:'LOGOUT'})}}>Logout</button>
                <h5>
                    {state.isShow ?` سلام ${state.username} عزیز `:' کاربر مهمان'}
                </h5>
            </div>
        </div>
    )
};
