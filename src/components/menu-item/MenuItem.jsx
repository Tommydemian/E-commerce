import React from "react";
import './MenuItem.scss'

import {withRouter} from 'react-router-dom'

const MenuItem = ({title, image, size}) => {
  return (
      <div style={{
        backgroundImage: `url(${image})`

      }}  className={`${size} menu-item `}>
      <div className="content">
        <h1>{title.toUpperCase()}</h1>
        <span>SHOP NOW</span>
      </div>
      </div>
  );
};

export default MenuItem;
