import React, {Component} from 'react'

class Login extends Component {
    state = {
        token: '',
        username: '',
        password: ''
    }


    componentDidMount() {

    }


    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }


    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" />
                    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="text" className="form-control"  placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }


}


export default Login