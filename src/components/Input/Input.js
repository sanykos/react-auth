import React from 'react'
import './input.css'


function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched
}

const Input = props => {
    const inputType = props.type || 'text'
    const cls = ['form-group']
    const htmlFor = `${inputType}-${Math.random()}`
    if(isInvalid(props)) {
        cls.push('invalid')
    }
    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input 
                type={inputType}
                id={htmlFor} 
                className="form-control" 
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
                />
            {isInvalid(props) && <span className="">{props.errorMessage || 'Введите верное значение'}</span>}
        </div>
    )
}

export default Input