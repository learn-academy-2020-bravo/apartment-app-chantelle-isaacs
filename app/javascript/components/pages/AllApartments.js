import React from "react"
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap'



const AllApartments = (props) => {
  

  return (
    <>
      { props.allApts.map((apt, index) => {
          return(
            <div>
            <Card key= { index }>
              <CardImg src={apt.picture_url} alt="Card image cap" className="card-img" />
              <CardBody>
                <CardTitle>{ apt.city }, { apt.state }</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>{ apt.description }</CardText>
                <Button href={`/apartmentview/${apt.id}`}>View More Info</Button>
              </CardBody>
            </Card>
            </div>
          )
      })}
    </>
  );
}


export default AllApartments