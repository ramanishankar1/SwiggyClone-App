import logo from './images/Swiggy.png';
import './App.css';
import Food from './Components/food'
 import ChineseNoodle from './images/ChineseNoodle.jpg';
import Chicken_Fried_rice from './images/Chicken_Fried_rice.webp';
import Lianos_pizza  from './images/Lianos_pizza.webp';
import MacDonalds  from '../src/images/MacDonalds.webp';
import BorderParotta  from '../src/images/Border Parotta.webp';
import KulfiIcecream  from '../src/images/Kulfi.webp';
import Rating from '../src/images/star.png';
import { useState, useEffect } from 'react';
import Form from './Components/form';
import Foodlist from './FoodList';
import Login from './login';
function App() { 
 

   const foods = [
    // {
    //   id:'it1',
    //   name: "ChineseNoodle",
    //   category1: "Noodle" ,
    //   category2:"Vegetarian",
    //   price: 250,
    //   rating: Rating,
    //   img: ChineseNoodle

    // },
    // {
    //   id:'it2',
    //   name: "Chicken_Fried_rice",
    //   category1: "Friedrice",
    //   category2:"Non-Vegetarian",
    //   price: 200,
    //   rating: Rating,
    //   img: Chicken_Fried_rice

    // },
    // {
    //   id:'it3',
    //   name: "Lianos_pizza",
    //   category1: "Pizza",
    //   category2:"Veg",
    //   price: 500,
    //   rating: Rating,
    //   mg: Lianos_pizza

    // }
  ]
  const [islogin,setlogin] = useState(false);
  const [items,setItem]=useState([...foods]);
  const addFoodHandler = (foodItem)=> {
    // console.log(event.target.value);
    if(islogin){
      setItem((previousState)=>{
        return [foodItem ,...previousState]
        
      })
    }
    else{
    alert("Please Login")
    }
    //  console.log(foodItem)
   // setFoodItem({food:event.target.value});
  }
  useEffect(()=>{
    setlogin(localStorage.getItem('isLoggedIn'))
  },[islogin]
  
  )

  
useEffect(()=>{
  fetch('https://63159abb5b85ba9b11e2bac3.mockapi.io/foods').then((response)=>{
    if(response.ok){
      console.log(response.ok);
    return  response.json()
    }
    return false;
  }).then((data)=>{
    setItem([... data])
  })
  },[])

  const login = () =>{
    localStorage.setItem('isLoggedIn' , true)
    setlogin(localStorage.getItem('isLoggedIn') );
  }

  const logout = ()=>{
    localStorage.setItem('isLoggedIn' , "")
    setlogin(localStorage.getItem('isLoggedIn') );
  }
  return (
    
    <div className='App'>
      <div className='header'>
        <div className='Container'>
          <div className='header-Wrapper'>

            <h1 className='logo'> 
            <img src={logo} ></img>
              
              </h1>
            <nav>
    
              <button><a href='#' id='btn'>Sign Up</a></button>
            </nav>



        </div>
      </div> 

      <div className='body'>
        <div className='Container'>
          <div className='Food-Wrappper'>

            
      {/* {
        foods.map((food)=>{
          return <Food key = {Math.random()}
          name={food.name}
          category1={food.category1}
          category2={food.category2}
          price={food.price}
          rating={food.rating}
          img={food.img}/>
          
          
          })} */}


        
     
    
  
          <Form onFoodHandler={addFoodHandler} ></Form>
          <Foodlist items={items}/>
          <Login login={login} logout={logout}></Login>
      
        </div>
        </div>
      </div>
</div>

  </div>
  );}





export default App;
