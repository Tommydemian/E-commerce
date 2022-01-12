import React from 'react'
import './CustomButton.scss'

const CustomButton = ({children, isGoogleSignedIn, ...otherProps}) => {
    return (
        <button className={`${isGoogleSignedIn ? 'google-sign-in' : ""}  custom-button`}
         {...otherProps} >
            {children}
        </button>
    )
}


export default CustomButton
