import React from 'react'


export default props => {
    return (
        <table className="table">
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
        </table>
    )
}