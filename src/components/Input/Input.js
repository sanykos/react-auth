import React from 'react'
import classes from './input.module.css'


const Input = props => {
    const inputType = props.type || 'text'
    const cls = ['form-control']
    const htmlFor = `${inputType}-${Math.random()}`
    return (
        <div className="form-group">
            <label htmlFor={htmlFor}>{props.label}</label>
            <input 
                type={inputType}
                id={htmlFor} 
                className={cls.join('')} 
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
                />
            {props.errorMessage && <span className="">{props.errorMessage}</span>}
        </div>
    )
}

export default Input