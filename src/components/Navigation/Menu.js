import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'


class Menu extends Component {

    renderLinks(links) {
        return links.map((link, index) => {
            return(
                <li key={index} className="nav-item">
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    } 

    render() {

        const links = [
            {to: '/', label: 'Home', exact: true}
        ]

        if(this.props.isAuthenticated) {
            links.push({to: '/users', label: 'Users', exact: false})
            links.push({to: '/logout', label: 'Logout', exact: false})
        }else {
            links.push({to: '/login', label: 'Login', exact: false})
        }

        return (
            <React.Fragment>
                <nav>
                    <ul className="navbar-nav">
                        {this.renderLinks(links)}
                    </ul>
                </nav>
            </React.Fragment>
        )
    }
}

export default Menu