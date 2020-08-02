import React, {Component} from 'react'
import Input from '../Input/Input'
import axios from 'axios'

class Login extends Component {

    state = {
        formControls: {
            username: {
                value: '',
                type: 'username',
                label: 'username',
                placeholder: 'Enter username',
                errorMessage: 'Введети корректное имя пользователя',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 10
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'password',
                placeholder: 'Enter password',
                errorMessage: 'Введите корректный пароль',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    password: true
                }
            }
        }
    }

    loginHandler = () => {

    }

    submitHandler = async (e) => {
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

    onChangeHandler = (event, controlName) => {
        console.log(`${controlName}: `, event.target.value)
    }

    // handleChange = (e) => {
    //     const value = e.currentTarget.value
    //     const fieldName = e.currentTarget.dataset.fieldName
    //     this.setState(prev => ({
    //     ...prev,
    //     [fieldName]: value,
    //     }))
    // }

    renderInputs() {
        const inputs = Object.keys(this.state.formControls).map((controlName, index) => {
            //console.log(controlName)
            const  control = this.state.formControls[controlName]
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    onChange={event => this.onChangeHandler(event, controlName)}
                    label={control.label}
                    placeholder={control.placeholder}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                />
            )
        })
        return inputs
    }


    render() {
        console.log(this.state)
        const { username, password, errorMessage} = this.state
        return(
            
            <div>
                {errorMessage && <strong>{errorMessage}</strong>}
                <form onSubmit={this.handleSubmit}>
                    {this.renderInputs()}
                    {/* <Input 
                        label="username"
                        placeholder="Enter username"
                    />
                    <Input 
                        label="password"
                        placeholder="Enter password"
                        errorMessage="ASDASDA"
                    /> */}
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