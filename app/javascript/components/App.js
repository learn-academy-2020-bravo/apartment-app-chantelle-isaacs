import React from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Nav, NavItem, NavLink, Navbar, NavbarBrand, Button } from 'reactstrap'
import NewApartment from "./pages/NewApartment"
import AllApartments from "./pages/AllApartments"
import ShowApartment from "./pages/ShowApartment"



class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      allApts:[]
    }
    this.getApartments()
  }

  componentWillMount(){
    this.getApartments()
  }

  getApartments = () => {
    fetch("/apartments")
    .then((response)=>{
      if(response.status ===200){
        return(response.json())
      }
    })
    .then((aptArray) => {
      this.setState({allApts: aptArray})
    })
  }
  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <Router>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Apartments For Rent</NavbarBrand>
          <Nav className="nav-bar">
            <NavItem>
              <NavLink to="/" tag={ Link }>See All Postings</NavLink>
            </NavItem>
          
          {logged_in &&
            <NavItem>
              <NavLink to="/newapartment" tag={ Link }>Post a New Apartment</NavLink>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={sign_in_route} tag={ Link } className="btn btn-primary float-right">Sign In</a>
            </NavItem>
          }
          {logged_in &&
            <NavItem>
                <a href={sign_out_route} tag={ Link } className="btn btn-primary float-right">Sign Out</a>
            </NavItem>
          }
          </Nav>
        </Navbar>
        <Route exact path="/newapartment/" component={ NewApartment }/>
        <Route exact path="/" render={ props => <AllApartments allApts={this.state.allApts}/> } />   
        <Route exact path="/apartmentview/:id" render={ (props) => <ShowApartment {...props} getApartments={this.getApartments}/> } />  
      </Router>
    );
  }
}

export default App