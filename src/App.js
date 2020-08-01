import React, {Component, Fragment} from 'react';
import Table from './components/Table/Table'
import TableSearch from './components/TableSearch/TableSearch'
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

  searchHandler = (search) => {
    this.setState({search})
  }

  getFilteredData() {
    const {data, search} = this.state
    if(!search) {
      return data
    }
    return data.filter(user => {
      return user['username'].toLowerCase().includes(search.toLowerCase())
    })

  }

  render() {
    //const {data} = this.state;
    const filteredData = this.getFilteredData()
    //console.log(users);
    // data.map(user => {
    //   console.log(user)
    // })
    return(
      <div className="container">
        <h1>Users</h1>
        <Fragment>
          <TableSearch 
            onSearch={this.searchHandler}
          />
          <Table 
              data={filteredData}
            />
        </Fragment>
      </div>
    )
  }

}

export default App


