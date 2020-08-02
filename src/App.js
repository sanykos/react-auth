import React, {Component, Fragment} from 'react';
import Table from './components/Table/Table'
import TableSearch from './components/TableSearch/TableSearch'
import Login from './components/Login/Login'
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
        this.setState({
          data
        })
    }).catch(error => {
      console.log(error)
    })
  }

  onSort  = sortField =>  {
    const clonedData = this.state.data.concat()
    const sort = this.state.sort === 'asc' ? 'desc' : 'asc'
    const data = _.orderBy(clonedData, sortField, sort)
    this.setState({
      data: data,
      sort: sort,
      sortField: sortField
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
    const filteredData = this.getFilteredData()
    return(
      <div className="container">
        <h1>Users</h1>
        <Fragment>
           <Login/>
        </Fragment>
        <Fragment>
          <TableSearch 
            onSearch={this.searchHandler}
          />
          <Table 
              data={filteredData}
              onSort={this.onSort}
              sort={this.state.sort}
              sortField={this.state.sortField}
            />
        </Fragment>
      </div>
    )
  }

}

export default App


