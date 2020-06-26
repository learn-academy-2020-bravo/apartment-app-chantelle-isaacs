import React from "react"
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap'
import {Redirect} from 'react-router-dom'


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
  handleChange = (event) => {
    let {form} = this.state
    form[event.target.name]= event.target.value
    this.setState({form: form})
  }
  pushApartment = (newApt) => {
      fetch("/apartments", {
        body: JSON.stringify(newApt),
        headers:{
          "Content-Type": "application/json"
        },
        method: "POST"
      })
      .then((response)=>{
        if(response.status === 200){
          return(response.json())
        }
      })
      .then(() => {
        this.setState({success:true})
      })
  }
  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state.form)
    this.pushApartment(this.state.form)
  }
  render () {
    return (
      <>
      <Container>
        <Form>
          <FormGroup>
              <Label for="street_num">Street Address</Label>
              <Input type="text" name="street_num" id="street_num" placeholder="123 Main St" value={ this.state.form.street_num } onChange={ this.handleChange} />
          </FormGroup>
          <FormGroup>
              <Label for="city">City</Label>
              <Input type="text" name="city" id="city" placeholder="Townsville"value={ this.state.form.city } onChange={ this.handleChange}  />
          </FormGroup>
          <FormGroup>
              <Label for="state">State</Label>
              <Input type="text" name="state" id="state" placeholder="NY" value={ this.state.form.state } onChange={ this.handleChange} />
          </FormGroup>
          <FormGroup>
              <Label for="zip">Zip Code</Label>
              <Input type="text" name="zip" id="zip" placeholder="10101" value={ this.state.form.zip } onChange={ this.handleChange}  />
          </FormGroup>
          <FormGroup>
              <Label for="country">Country</Label>
              <Input type="text" name="country" id="country" placeholder="USA" value={ this.state.form.country } onChange={ this.handleChange} />
          </FormGroup>
          <FormGroup>
              <Label for="mgr_name">Manager Name</Label>
              <Input type="text" name="mgr_name" id="mgr_name" placeholder="John Smith" value={ this.state.form.mgr_name } onChange={ this.handleChange} />
          </FormGroup>
          <FormGroup>
              <Label for="mgr_phone">Manager Phone Number</Label>
              <Input type="text" name="mgr_phone" id="mgr_phone" placeholder="555-555-5555" value={ this.state.form.mgr_phone } onChange={ this.handleChange} />
          </FormGroup>
          <FormGroup>
              <Label for="contact_hours">Contact Hours</Label>
              <Input type="text" name="contact_hours" id="contact_hours" placeholder="3pm-5pm EST" value={ this.state.form.contact_hours } onChange={ this.handleChange} />
          </FormGroup>
          <FormGroup>
              <Label for="description">Description</Label>
              <Input type="textarea" name="description" id="description" placeholder="Tell us about the apartment" value={ this.state.form.description } onChange={ this.handleChange} />
          </FormGroup>
          <FormGroup>
              <Label for="picture_url">Picture URL</Label>
              <Input type="url" name="picture_url" id="state" value={ this.state.form.picture_url } onChange={ this.handleChange} />
              <FormText>Please paste the url of an image of your apartment from an external source website such as Flickr or Imgur</FormText>
          </FormGroup>
          <Button onClick={this.handleSubmit} type="submit">Submit</Button>
          {this.state.success &&
          <Redirect to="/" />
            }
        </Form>
      </Container>
      </>
    );
  }
}

export default NewApartment