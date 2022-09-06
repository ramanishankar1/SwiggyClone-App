import './form.css';
import { useState } from "react";

function Form(props) {
    const [ addedFoodItem, setFoodItem ] = useState({
        name:'',
        category1:'',
        category2:'',
        price:''
      
    });
    // const { changename, setName } = useState('')
    // const { changeamount, setAmount } = useState('')


    const foodHandler = (event) => {
        // console.log(event.target.value);
        setFoodItem((previousState) => {
            return { ...previousState, name: event.target.value}
        });
       // setFoodItem({food:event.target.value});
    }
        const category1Handler = (event) => {
            // console.log(event.target.value);
            //setFoodItem({category1:event.target.value});
            setFoodItem((previousState) => {
                return { ...previousState, category1: event.target.value}

            });
           
        }

        const category2Handler = (event) => {
            // console.log(event.target.value);
             // setFoodItem({category2:event.target.value});
             setFoodItem((previousState) => {
                return { ...previousState, category2: event.target.value}
            });

        }
            const priceHandler = (event) => {
                // console.log(event.target.value);
               // setFoodItem({price:event.target.value});
               setFoodItem((previousState) => {
                return { ...previousState, price: event.target.value}
            });

            }
            const clickHandler = (event) => {

                event.preventDefault();
                const newItem={...addedFoodItem,id:Math.random().toString()}
                props.onFoodHandler(newItem);
                setFoodItem({ name: '',
        category1: '',
        category2: '',
        price: ''
    
    });
                //console.log(addedFoodItem);
            
                
            }

        
             return (
                <div className='formContainer'> 
                       

                    <input type="text"  placeholder="Enter Food" value={addedFoodItem.name} onChange={foodHandler}/>
                    <input type="text"  placeholder="Enter Category1" value={addedFoodItem.category1} onChange={category1Handler}/> 
                    <input type="text"  placeholder="Enter Category2" value={addedFoodItem.category2} onChange={category2Handler}/>  
                    <input type="text" placeholder="Enter Price" value={addedFoodItem.price} onChange={priceHandler}/> 
                    <button onClick={clickHandler}>Submit</button>



                </div>
            );
             }

            export default Form;