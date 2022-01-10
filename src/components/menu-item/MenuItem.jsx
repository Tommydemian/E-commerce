import React from "react";
import './MenuItem.scss'
import { useNavigate, useParams } from "react-router-dom";

const MenuItem = ({title, image, size}) => {

  
  const navigate = useNavigate()
  
  const handleSelect = () =>{
    navigate(`/products/${title}`)
  }
  

  return (
      <div style={{
        backgroundImage: `url(${image})`

      }}  className={`${size} menu-item `}>
      <div className="content">
       <span onClick={handleSelect}> <h1>{title.toUpperCase()}</h1> </span>
        <span>SHOP NOW</span>
      </div>
      </div>
  );
};

export default MenuItem;
