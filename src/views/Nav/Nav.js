import React from "react";
import './Nav.css'

import {
    Link, NavLink
} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                {/* <a href="/">Home</a>
                <a href="/todo">Todos</a>
                <a href="/about">About</a> */}

                {/* <Link to="/">Home</Link>
                <Link to="/todo">Todos</Link>
                <Link to="/about">About</Link> */}

                <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
                <NavLink to="/todo" activeClassName="active">Todo</NavLink>
                <NavLink to="/about" activeClassName="active">About</NavLink>
            </div>
        )
    }
}

export default Nav