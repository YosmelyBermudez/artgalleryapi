import { useEffect, useState } from "react";
import { getAll } from "../Services/ArtServices";
import { useParams } from "react-router-dom";
import {Card, ListGroup} from 'react-bootstrap';
import firebase from "../Config/firebase"
import Asistance from "./Asistance";


function Buy() {
    console.log(firebase)
    const [paint, setPaint] = useState([])
    const [isLoading,setIsloading] = useState(true)
    const { id } = useParams()
    console.log(id)
    useEffect(
        ()=>{
            const result = async ()=>{
                try{
                    const responseData = await getAll()
                    const one_paint = responseData.data.filter(paints => paints.id == id)
                    console.log(one_paint)
                    console.log(responseData.data)
                    setPaint(one_paint[0]) 
                    setIsloading(false)
                }catch(e){
                    console.log(e)
                }
                
            }
            result()
            
        },
        []
    
    )
    if(isLoading){
        return(
            <div>
                Cargando...
            </div>
        )
    }
    else{
        
        return(
            <>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://www.artic.edu/iiif/2/${paint.image_id}/full/843,/0/default.jpg`} alt={paint.image_id} />
            <Card.Body>
            <Card.Title>{paint.title}</Card.Title>
            <Card.Text>
                !You must attend the auction to purchase the piece!
            </Card.Text>
            </Card.Body>
            <ListGroup className="data">
                <ListGroup.Item>Credits: {paint.credit_line}</ListGroup.Item>
                <ListGroup.Item>Date: {paint.date_display}</ListGroup.Item>
                <ListGroup.Item>Place of Origin: {paint.place_of_origin}</ListGroup.Item>
            </ListGroup>
            </Card>
            <Asistance />
            
            </>
        )
    }   
}
export default Buy