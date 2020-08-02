import React, {Component} from 'react'
import Input from '../Input/Input'
import axios from 'axios'

class Login extends Component {

    state = {
        username: '',
        password: '',
        errorMessage: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const {username, password} = this.state
       try {
        const response = await axios.post('http://emphasoft-test-assignment.herokuapp.com/api-token-auth/',
        {
            username: username,
            password: password
        })
        //console.log(response + 'dsadsad')
       }catch(error) {
           if(error) {
            this.setState({errorMessage: 'Неверный логин или пароль'})
           }
       }

    }

    handleChange = (e) => {
        const value = e.currentTarget.value
        const fieldName = e.currentTarget.dataset.fieldName
        this.setState(prev => ({
        ...prev,
        [fieldName]: value,
        }))
    }


    render() {
        console.log(this.state)
        const { username, password, errorMessage} = this.state
        return(
            
            <div>
                {errorMessage && <strong>{errorMessage}</strong>}
                <form onSubmit={this.handleSubmit}>
                    <Input 
                        label="username"
                        placeholder="Enter username"
                    />
                    <Input 
                        label="password"
                        placeholder="Enter password"
                    />
                {/* <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="text" className="form-control" name="username" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username"
                    data-field-name={'username'}
                    onChange={this.handleChange}
                    value={username}/>
                    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div> */}
                {/* <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="text" name="password" className="form-control"  placeholder="Password"
                    onChange={this.handleChange}
                    data-field-name={'password'}
                    value={password}/>
                </div> */}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        )
    }


}


export default Login