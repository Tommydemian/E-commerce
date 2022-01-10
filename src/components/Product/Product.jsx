import React from 'react'
import {useParams} from 'react-router-dom'

const Product = () => {

    const {prodName} = useParams()
    console.log(prodName)

    return (
        <>
            <h1>{prodName}</h1>
        </>
    )
}

export default Product
