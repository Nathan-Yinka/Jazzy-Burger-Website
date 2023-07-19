import React,{useContext} from 'react'
import Card from "./component/Card";
import background1 from "./assets/background/image 4.png";
import { NavLink } from "react-router-dom" 
import heroBanner from "./assets/header/hero-img.png"
import Header from './component/Header';
import Footer2 from './component/Footer2';
import { dataContextCreated } from './contextData/DataContext';
import FavouriteItems from './component/FavouriteItems';

const Home = () => {
  const { products,toCartButton , heart} = useContext(dataContextCreated)
  return (
    <div className=''>
      <Header/>
    <main className="container-fluid main-cont">
        <div className='hero-banner'>
            <img src={heroBanner} alt="...Banner" className='img-fluid' />
        </div>
    <section className="main-section">
    <div className="hero-section">
      <img
        src={background1}
        alt="backgroung-img"
        className="img-fluid background1"
      ></img>
    </div>
    <div className="card-con">
      {products.slice(0,6).map((product) => (
        <Card
          product={product}
          key={product.id}
          toCartButton={toCartButton}
        />
      ))}
    </div>
  </section>
    <div className='more-con'>
    <NavLink to={"/more"}>
    <button className='see-more-btn'>See more</button> 
    </NavLink> 
    </div>
  </main>
  { heart.length > 0 && <FavouriteItems/>}
  <Footer2/>
  </div>
  )
}

export default Home