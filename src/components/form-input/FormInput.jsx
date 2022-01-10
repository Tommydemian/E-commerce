import React from 'react'

import './FormInput.scss' 


const FormInput = ({handleChange, label, ...otherInputProps}) => {
    return (
        <div className='group'>
            <input className='form-input' {...otherInputProps} />
            {
                label?
                (<label className='form-input-label' >
                {label}
                </label>)
                :null
            }
        </div>
    )
}

export default FormInput
