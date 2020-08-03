import React, {Component} from 'react'
import Input from '../Input/Input'
import axios from '../../axios/axios-swagger'

class Login extends Component {

    state = {
        isFormValid: false,
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
                    minLength: 1
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
                    minLength: 1
                }
            }
        }
    }

    // loginHandler = () => {

    // }

    handleSubmit = async (e) => {
        e.preventDefault()
       // const {username, password} = this.state
       try {
        const response = await axios.post('/api-token-auth/',
        {
            username: this.state.formControls.username.value,
            password: this.state.formControls.password.value
        })
        console.log(response.data.token)
       }catch(error) {
           if(error) {
            this.setState({errorMessage: 'Неверный логин или пароль'})
           }
       }

    }

    validateControl(value, validation) {
        if(!validation) {
            return true
        }
        let isValid = true
        if(validation.required) {
            isValid = value.trim() !== '' && isValid
        }
        if(validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }
        return isValid
    }

    onChangeHandler = (event, controlName) => {
       // console.log(`${controlName}: `, event.target.value)
        const formControls = {...this.state.formControls}
        const control = {...formControls[controlName]}
        
        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)
        formControls[controlName] = control

        let isFormValid = true
        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        })

        this.setState({
            formControls, isFormValid
        })
    }

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
                <button type="submit" className="btn btn-primary" disabled={!this.state.isFormValid}>Войти</button>
            </form>
            </div>
        )
    }


}


export default Login