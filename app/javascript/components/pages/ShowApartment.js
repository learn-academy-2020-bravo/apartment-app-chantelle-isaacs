import React from "react"
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap'


class ShowApartment extends React.Component {
    constructor(props){
        super(props)
        this.state={
            apartment:[]
        }
        this.getApartment()

    }
    componentDidMount(){
        this.getApartment()
    }
    getApartment = (props) => {
        const {id} = this.props.match.params
        fetch(`/apartments/${id}`)
        .then((response)=>{
          if(response.status === 200){
            return(response.json())
          }
        })
        .then((aptInfo) => {
          this.setState({apartment: aptInfo})
        })
    }

  render () {
      let { apartment } = this.state
    return (
      <>
      <img src={apartment.picture_url}/>
        
      </>
    );
  }
}

export default ShowApartment