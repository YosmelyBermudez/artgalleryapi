import React from "react";
import {Button, Card, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";

function Paint({
  artist_display,
  image_id,
  artwork_type_title,
  category_titles,
  id
}
){
  if(image_id){
  return (
    <>
        <Col xs={12} sm={6} lg={4} xxl={3}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`} alt={image_id} />
        <Card.Body>
          <Card.Title>{artwork_type_title}</Card.Title>
          <Card.Text>
            Artist: {artist_display}
          </Card.Text>
          <Card.Text>
          Category: {category_titles}
          </Card.Text>
          <Button variant="info"><Link to={`/Detail/${id}`}>Detail</Link></Button>
        </Card.Body>
        </Card>
        </Col> 
    </>
  )}
}

export default Paint