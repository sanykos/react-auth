import React from 'react'


export default props => {
    return (
      
        <table className="table">
            <thead>
                <tr>
                    <th>first_name</th>
                    <th onClick={props.onSort.bind(null, 'id')}>id<sup>{props.sort}</sup></th>
                    <th>last_name</th>
                    <th>username</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map(user => (
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

    )
}