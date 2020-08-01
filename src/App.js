import React, {Component} from 'react';
import _ from 'lodash'
import axios from 'axios'




class App extends Component {

  state = {
    isLoading: false,
    data : [],
    search: '',
    sort: 'asc',
    sortField: 'id'
  }


  componentDidMount() {
    axios.get('http://emphasoft-test-assignment.herokuapp.com/api/v1/users/', {
      headers: {
        'Content-Type': "application/json",
        Authorization: "Token 781bd9f1de084f4daa7ba2aa8a71a2eab855354e"
      }
    }).then(response => {
      const {data} = response
     // console.log(users)
        this.setState({
          data
        })
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    const {data} = this.state;
    //console.log(users);
    data.map(user => {
      console.log(user)
    })
    return(
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>first_name</th>
              <th>id</th>
              <th>last_name</th>
              <th>username</th>
            </tr>
            </thead>
            <tbody>
              {
                data.map(user => (
                  <tr key={user.id}>
                    <td>{user.first_name}</td>
                    <td>{user.id}</td>
                    <td>{user.last_name}</td>
                    <td>{user.username}</td>
                  </tr>
                ))
              }
            </tbody>  
        </table>
      </div>
    )
  }

}

export default App


