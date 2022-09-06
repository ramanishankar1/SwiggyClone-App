
import { useState } from 'react';
import FoodItem from './FoodItem'
function Items(props){
  
    const [price,setPrice]=useState(props.price)
    
    setPrice(price=props.price/2);

          

    

    return(
        <>


        {
            props.items.length===0 && props.items.length>2 &&
            <p>Please add items</p>
            
}
            {/* <FoodItem name={props.items[0].name} category1={props.items[0].category1} category2={props.items[0].category2}price={props.items[0].price}/>
            <FoodItem name={props.items[1].name} category1={props.items[1].category1} category2={props.items[1].category2}price={props.items[1].price}/> */}
{
        
         props.items.length > 0 ? props.items.map((foodItem)=> {
            return <FoodItem key={foodItem.id} name = {foodItem.name} category1={foodItem.category1}  category2={foodItem.category2} price={foodItem.price} img ={foodItem.img}/>
        })

        : <p>Please Add Items</p>

    
    }    
      
       </>
    )    

  
}


export default Items;
