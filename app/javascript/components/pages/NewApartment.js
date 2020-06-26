import React from "react"
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap'


class NewApartment extends React.Component {
  constructor(props){
    super(props)
    this.state={
        form:{
          street_num:"",
          city:"", 
          state:"", 
          zip:"",
          country:"", 
          mgr_name:"", 
          mgr_phone:"",
          contact_hours:"",
          user_id:"", 
          description:"",
          picture_url:""
        },
        success:false
    }

  }
  const handleChange = (e) => {
    e.preventDefault()
    this.setState
  }
  
  pushApartment = (newApt) => {
      fetch("/apartments", {
        body: JSON.stringify({this.setState(form:newApt)})
      })
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
    return (
      <>
      <Container>
        <Form>
          <FormGroup>
              <Label for="street_num">Street Address</Label>
              <Input type="text" name="street_num" id="street_num" placeholder="123 Main St" />
          </FormGroup>
          <FormGroup>
              <Label for="city">City</Label>
              <Input type="text" name="city" id="city" placeholder="Townsville" />
          </FormGroup>
          <FormGroup>
              <Label for="state">State</Label>
              <Input type="text" name="state" id="state" placeholder="NY" />
          </FormGroup>
          <FormGroup>
              <Label for="zip">Zip Code</Label>
              <Input type="text" name="zip" id="zip" placeholder="10101" />
          </FormGroup>
          <FormGroup>
              <Label for="country">Country</Label>
              <Input type="text" name="country" id="country" placeholder="USA" />
          </FormGroup>
          <FormGroup>
              <Label for="mgr_name">Manager Name</Label>
              <Input type="text" name="mgr_name" id="mgr_name" placeholder="John Smith" />
          </FormGroup>
          <FormGroup>
              <Label for="mgr_phone">Manager Phone Number</Label>
              <Input type="text" name="mgr_phone" id="mgr_phone" placeholder="555-555-5555" />
          </FormGroup>
          <FormGroup>
              <Label for="contact_hours">Contact Hours</Label>
              <Input type="text" name="contact_hours" id="contact_hours" placeholder="3pm-5pm EST" />
          </FormGroup>
          <FormGroup>
              <Label for="description">Description</Label>
              <Input type="textarea" name="description" id="description" placeholder="Tell us about the apartment" />
          </FormGroup>
          <FormGroup>
              <Label for="picture_url">Picture URL</Label>
              <Input type="url" name="picture_url" id="state" />
              <FormText>Please paste the url of an image of your apartment from an external source website such as Flickr or Imgur</FormText>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </Container>
      </>
    );
  }
}

export default NewApartment