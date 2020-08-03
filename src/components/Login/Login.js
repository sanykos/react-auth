import React, {Component} from 'react'
import {connect} from 'react-redux'
import Input from '../Input/Input'
import login from '../../store/actions/login'

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
    handleSubmit = (e) => {
        e.preventDefault()
       this.props.login(
            this.state.formControls.username.value,
            this.state.formControls.password.value,
            true
       )
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

function mapDispatchToProps(dispatch) {
    return  {
        login: (username, password, isLogin) => dispatch(login(username,password,isLogin) )
    }
}

export default connect(null, mapDispatchToProps)(Login)