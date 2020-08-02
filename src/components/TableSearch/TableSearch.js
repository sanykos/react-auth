import React, {useState} from 'react'


export default props => {
    const [value, setvalue] = useState('')

    const valueChangeHandler = event => {
        setvalue(event.target.value)
    }

    return(
        <div className="input-group mb-3 mt-3">
            <div className="input-group-prepend">
              <button className="btn btn-outline-secondary" type="button"
                onClick={() => props.onSearch(value)}>Button</button>
            </div>
            <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"
                onChange={valueChangeHandler}
                value={value}
             />
        </div>
    )
}