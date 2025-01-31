
import { useEffect, useRef } from 'react';
import './input.css';



export default function Input({handleText,handleBtnAdd,text,status,edittext,handleFilterComplete}) {
    const handleKeyPress = (event)=>{
        if(event.key === 'Enter'){
            handleBtnAdd();
        }
    }
    const inputRef = useRef(null)
    useEffect(()=>{
        inputRef.current.focus();
    },[])
    return(
        <>
        <h3>My Todo List</h3>
        <div className="input">
            <input type="text" ref={inputRef} value={(status === 'edit')?edittext:text} onChange={handleText} onKeyDown={handleKeyPress} />
            <button onClick={handleBtnAdd}>{(status === 'edit') ?<span>edit</span> : <span>+</span>}</button>
            <button onClick={handleFilterComplete}>{status === 'filterComplete'? 'Show All' : 'Show Complete'}</button>
        </div>
        </>
    )
};
