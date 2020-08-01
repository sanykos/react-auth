import React, {Component} from 'react'
import axios from 'axios'

class Login extends Component {


    state = {
        username: '',
        password: '',
        errorMessage: ''
    }


    componentDidMount() {
        axios.post('http://emphasoft-test-assignment.herokuapp.com/api-token-auth/',
        {
            username: 'test_super',
            password: 'Nf<U4f<rDbtDxAPn' 
        }).then(response => {
            const token = response.data.token;
           // this.setState({token})
            //console.log(response.data)
        }).catch(error => {
            //this.setState({errorMessage:error})
            if(error) {
                this.setState({errorMessage: 'Неверный логин или пароль'})
            }
        })
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
        console.log(response)
       }catch(e) {
           console.log(e)
       }

    }

    handleChange = (e) => {
        const value = e.currentTarget.value
        const fieldName = e.currentTarget.dataset.fieldName

        this.setState(prev => ({
        ...prev,
        [fieldName]: value,
        }))
        //console.log(this.state)
    }


    render() {
        console.log(this.state)
        const { username, password } = this.state
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="text" className="form-control" name="username" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username"
                    data-field-name={'username'}
                    onChange={this.handleChange}
                    value={username}/>
                    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="text" name="password" className="form-control"  placeholder="Password"
                    onChange={this.handleChange}
                    data-field-name={'password'}
                    value={password}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }


}


export default Login