import './form.css';
import { useState } from "react";

function Form() {
    const [ changeDate, setDate ] = useState('')
    const [ changeName, setName ] = useState('')
    const [ changeAmount, setAmount ] = useState('')


    const dateHandler = (event) => {
        console.log(event.target.value);
        setDate(event.target.value);
    }
        const nameHandler = (event) => {
            console.log(event.target.value);
            setName(event.target.value);
        }
            const amountHandler = (event) => {
                console.log(event.target.value);
                setAmount(event.target.value);

            }
            const clickHandler = (event) => {
                event.preventDefault();
                console.log(changeDate,changeName,changeAmount);
            }

        
             return (
                <div className='Container'>
                    <div className='form-Wrapper'>
                <form onSubmit={clickHandler}>
                    <input type="text" placeholder="dd/mm/yyyy" value={changeDate} onChange={dateHandler}/>   
                    <input type="text" placeholder="Enter name" value={changeName} onChange={nameHandler}/>  
                    <input type="text" placeholder="Enter amount" value={changeAmount}onChange={amountHandler}/> 
                    <button type="submit">Submit</button>




                </form>
             </div>
             </div>
             )    
}

            export default Form;