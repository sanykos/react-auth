import React, {Component} from 'react';
import Table from './components/Table/Table'
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
        <h1>Users</h1>
              <Table 
                data={data}
              />
      </div>
    )
  }

}

export default App


