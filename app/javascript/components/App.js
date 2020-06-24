import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap'
import NewApartment from "./pages/NewApartment"
import Home from "./pages/Home"



class App extends React.Component {
  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props

    return (
      <Router>
        <div>
        <h1>Apartments for Rent</h1>
        {/* <Nav className="nav-bar">
        {logged_in &&
          <NavItem>
            <NavLink href={sign_out_route} tag={ Link }>Sign Out</NavLink>
          </NavItem>
        }
        {logged_in &&
          <NavItem>
            <NavLink to="/apartments/new" tag={ Link }>Post a New Apartment</NavLink>
          </NavItem>
        }
        {logged_in &&
          <NavItem>
            <NavLink to="/apartments" tag={ Link }>See Your Postings</NavLink>
          </NavItem>
        } 
        {!logged_in &&
          <NavItem>
            <NavLink href={sign_in_route} tag={ Link }>Sign In</NavLink>
          </NavItem>
        }
        </Nav>
        <Route path="/apartments/new" exact component={ NewApartment }/>
        <Route path="/apartments/" exact component={ Home }/> */}
      </div>
      </Router>
    );
  }
}

export default App