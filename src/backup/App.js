import logo from './logo.svg';
import './App.css';
import Food from './Components/food';
import ChineseNoodle from '../src/images/ChineseNoodle.jpg';
import Chicken_Fried_rice from '../src/images/Chicken_Fried_rice.webp';
import Lianos_pizza  from '../src/images/Lianos_pizza.webp';
import MacDonalds from '../src/images/MacDonalds.webp'
import BorderParotta  from '../src/images/Border Parotta.webp';
import KulfiIcecream  from '../src/images/Kulfi.webp';
import Rating from '../src/images/star.png';
import Forms from './Components/form';



function App() { 


  
  const foods = [
    {
      name: "ChineseNoodle",
      category1: "Noodle" ,
      category2:"Vegetarian",
      price: 250,
      rating: Rating,
      img: ChineseNoodle

    },
    {
      name: "Chicken_Fried_rice",
      category1: "Friedrice",
      category2:"Non-Vegetarian",
      price: 250,
      rating: Rating,
      img: Chicken_Fried_rice

    },
    {
      name: "Lianos_pizza",
      category1: "Pizza",
      category2:"Veg",
      price: 500,
      rating: Rating,
      img: Lianos_pizza

    },
    {
      name: "MacDonalds",
      category1: "Burgars",
      category2:"Vegetarian",
      price: 730,
      rating: Rating,
      img: MacDonalds

    },
    {
      name: "Border Parotta",
      category1: "Coutrallam Parotta",
      category2:"South-Indian",
      price: 140,
      rating: Rating,
      img: BorderParotta

    },
    {
      name: "Kulfi ",
      category1: "Ice Cream",
      category2:"Desserts",
      price: 100,
      rating: Rating,
      img: KulfiIcecream

    },
  ]
 
return (
    
    <div className='App'>
      <div className='header'>
        <div className='Container'>
          <div className='header-Wrapper'>

            <h1 className='logo'> 
           
              <img src='G:\fabevy\react-training\src\images\Swiggy.png ' ></img>
              Swiggy</h1>
            <nav>
              <a href='#'>Login</a>
              <button><a href='#' id='btn'>Sign Up</a></button>
              
            </nav>



          </div>
        </div>
      </div>

      <div className='body'>
        <div className='Container'>
          <div className='Food-Wrappper'>
          
            <Food name={foods[0].name}
              price={foods[0].price}
              category1={foods[0].category1}
              category2={foods[0].category2}
              rating={foods[0].rating}
              img={foods[0].img}>
            </Food>
            <Food name={foods[1].name}
              price={foods[1].price}
              category1={foods[1].category1}
              category2={foods[1].category2}
              rating={foods[1].rating}
              img={foods[1].img}>
            </Food>
            <Food name={foods[2].name}
              price={foods[2].price}
              category1={foods[2].category1}
              category2={foods[2].category2}
              rating={foods[2].rating}
              img={foods[2].img}>
            </Food>
            <Food name={foods[3].name}
              price={foods[3].price}
              category1={foods[3].category1}
              category2={foods[3].category2}
              rating={foods[3].rating}
              img={foods[3].img}>
            </Food>
            <Food name={foods[4].name}
              price={foods[4].price}
              category1={foods[4].category1}
              category2={foods[4].category2}
              rating={foods[4].rating}
              img={foods[4].img}>
            </Food>
            <Food name={foods[5].name}
              price={foods[5].price}
              category1={foods[5].category1}
              category2={foods[5].category2}
              rating={foods[5].rating}
              img={foods[5].img}>
            </Food>
            <Forms></Forms>


          </div>
        </div>
      </div>
    </div>

  );


}



export default App;
