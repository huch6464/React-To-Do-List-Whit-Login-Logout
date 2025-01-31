import Navbar from "./Navbar";
import Input from './Input';
import List from './List';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useContext } from "react";
import { loginContext } from "../context/loginContext";

function Todos(){

    const[text,setText] = useState('');
    const[texts,setTexts] = useState([]);
    const[status,setStatus] = useState('idle');
    const[edittext,setEdittext] = useState('');
    const[editId,setEditId] = useState(null);
    const[textsIsComplete,setTextsIsComplete] = useState([]);
    const[completes,setCompletes] = useState([]);

    const {state} = useContext(loginContext);
    const[isDisabled,setIsDisabled] = useState(false);

    const handleText = (e)=>{
        if(status === 'edit'){
            setEdittext(e.target.value)
        }else{
            setText(e.target.value)
        }
    };
    
    const handleBtnAdd = ()=>{
        if(!text && !edittext){return}
        if(status === 'edit'){
            const newTexts = texts.map((t)=> t.id === editId ? {...t,text:edittext} : t);
            setTexts(newTexts);
            setEdittext('');
            setStatus('idle');
        }else{
            setTexts(prevTexts=>[...prevTexts,{id:uuidv4(),text:text}]);
            setText('');
        }
        setIsDisabled(!state.isShow);
    };
    const handleDelet = (id)=>{
       const newTexts = texts.filter((t) => t.id !== id);
       setTexts(newTexts);
    //    setTextsIsComplete(textsIsComplete.filter(i => i !== id));
    };
    const handleEdit =(id)=>{
        setStatus('edit');
        const textToEdit = texts.find(t=>t.id === id)
        if(textToEdit){
            setEdittext(textToEdit.text);
            setEditId(id);
        }
    };
    const handleComplete =(id)=>{
        if(textsIsComplete.includes(id)){
         const newTextsIsComplete =  textsIsComplete.filter((i) => i !== id);
         setTextsIsComplete(newTextsIsComplete);
        }else{
        setTextsIsComplete((prevides) =>[...prevides,id]);
        }
        };
    const handleFilterComplete =()=>{
            if(status !== 'filterComplete'){
                setStatus('filterComplete');
                const newTexts = texts.filter(t => textsIsComplete.includes(t.id)).map(t => t.text);
                setCompletes(newTexts);
            
            }else{
                setStatus('idle');
                setCompletes([]);
            }
        }
    
    return(
        <>
        <Navbar/>
        <Input handleText={(e)=>handleText(e)} handleBtnAdd={handleBtnAdd} text={text} status={status} edittext={edittext} handleFilterComplete={handleFilterComplete} />
        <List texts={texts} status={status} handleDelet={handleDelet} handleEdit={handleEdit} handleComplete={handleComplete} textsIsComplete={textsIsComplete} completes={completes} isDisabled={isDisabled} />
        </>
    )
}
export default Todos;