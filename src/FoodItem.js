import { useState } from 'react';
import './Food_item.css'
import Lianos_Pizza from './images/Lianos_pizza.webp';

  //       class FoodItem extends React. Component{
  //         Constructor(props){
  //           this.state=form[3];

  //         }
       
          
  //         render(){ 
            
  //           this.state.price
        
  //   return (
  //           <div className="Container">
  //               <img src={Lianos_Pizza} alt={this.props.name}></img>
  //               <div className="item">{this.props.name} </div>
  //               <div className="item">{this.props.category1} </div>
  //               <div className="item">{this.props.category2} </div>
  //               <div className="item">{this.props.price} </div>
  //               <div className="item">{this.props.img} </div>
  //               <button className="applyOffer" onClick={this.props.applyOffer}>Apply offer</button>
  //               </div>

  //  )}
          
  //       }
    
    

function FoodItem(props) {

    
    const [price, setPrice] = useState(props.price)
 
    const applyOffer = () => {

        setPrice(props.price / 2);
        alert('ok')

    }

    return (
        <div className="Container">
            <img src={Lianos_Pizza} alt={props.name}></img>
            <div className="item">{props.name} </div>
            <div className="item">{props.category1} </div>
            <div className="item">{props.category2} </div>
            <div className="item">Rs:{price} </div>
           
                
              
                <div className="item">{props.img} </div>
                <button className="applyOffer"onClick={applyOffer}>Applyoffer</button>


            </div>

)}
            export default FoodItem;