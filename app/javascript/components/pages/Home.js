import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap'
import NewApartment from "./NewApartment"



class Home extends React.Component {
  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props

    return (
      <>
    
        <h1>YOUR APARTMENTS</h1>
        
      </>
    );
  }
}

export default Home