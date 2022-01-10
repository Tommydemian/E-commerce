import React, {useState} from 'react'
import PreviewCollection from '../../components/preview-collection/PreviewCollection'
import SHOP_DATA from './ShopData';

import './ShopPage.scss'

const ShopPage = () => {

  const [collection, setCollection] = useState({
    collection: SHOP_DATA
  })

  return (
    
        <div className="shop-page">
          {collection.collection.map((collection) =>{
            return <PreviewCollection key={collection.id} title={collection.title} items={collection.items}/>
          })
      
          }
                    
        </div>
  )}

export default ShopPage
