
import './list.css';
import { v4 as uuidv4 } from 'uuid';



export default function List({texts,handleDelet,handleEdit,handleComplete,textsIsComplete,completes,status,isDisabled}) {
     
      


    const completeList = completes.map((complete)=>(
        <div className="list" key={uuidv4()}>
              <div className='listli'>
                <li>{<s>{complete}</s>}</li>
              </div>
           </div>
    ))
    const lists = texts.map((text)=>(
            <div className="list" key={text.id}>
              <div className='listli'>
                <li>{textsIsComplete.includes(text.id)?<s>{text.text}</s>: text.text}</li>
              </div>
               {isDisabled ? <span className='disabled'>برای استفاده از امکان حذف و ویرایش باید login باشید (توسط دکمه logout در بالای صفحه خارج شوید و با رمز ورود  "1234"وارد شوید) </span>: ''}
              <div className='listbtn'>
                  <button disabled={isDisabled} onClick={()=>handleDelet(text.id)}>Delete</button>
                  <button disabled={isDisabled} onClick={()=>handleEdit(text.id)}>Edit</button>
                  <label className="custom-checkbox" >
                  <input type="checkbox" checked={textsIsComplete.includes(text.id)}  onChange={()=>handleComplete(text.id)}/>
                    <span className="checkmark"></span>
                    Complete
                  </label>
              </div>
           </div>
    ))
    
        return(
       
        <div className="listcontainer">
            {status === 'filterComplete' ? completeList : lists}
        </div>
    )
};
