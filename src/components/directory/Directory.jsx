import React from 'react'
import MenuItem from '../menu-item/MenuItem'

import './Directory.scss'

const Directory = () => {

    const itemList = [
      {
          title: 'hats',
          imageUrl:'https://s3.forcloudcdn.com/item/images/dmc/101acc74-b0d5-454d-8c92-4ea7b3253fc4-1440x1440.jpeg_min.jpg',
          id:1
      },
      {
          title:'jackets',
          imageUrl:'https://cdn.shopify.com/s/files/1/0095/4420/4367/products/starter_ls730517-dpt_01_fb5f4f6e-08af-4db0-9d06-c3c386307bba.jpg?v=1573289765',
          id:2
      },
      {
          title:'sneakers',
          imageUrl:'https://m.media-amazon.com/images/I/81v8Gn79fmL._UL1500_.jpg',
          id:3
      },
      {
          title:'mens clothing',
          imageUrl:'https://www.dmarge.com/wp-content/uploads/2020/12/mens-clothing-sale-feature.jpg',
          size:'large',
          id:4
      },
      {
        title:'womens clothing',
        imageUrl:'https://thestateofwomen.com/wp-content/uploads/2016/03/women-shopping.jpg',
        size:'large',
        id:5
      }

    ]

    return (
        <div className='directory-menu'> 
         {itemList.map((item) =>(
            
        <MenuItem key={item.id} title={item.title} image={item.imageUrl} size={item.size} />
        
         ))
         }
        </div>
    )
}

export default Directory
