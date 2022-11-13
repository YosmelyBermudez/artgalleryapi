import { useEffect, useState } from "react";
import { getAll } from "../Services/ArtServices";
import { useParams } from "react-router-dom";
import {Button} from 'react-bootstrap';
import firebase from "../Config/firebase"
import { Link } from "react-router-dom";


function Detail() {
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
            <div>
                    <img src={`https://www.artic.edu/iiif/2/${paint.image_id}/full/843,/0/default.jpg`} alt={paint.image_id} style={{width: '75%'}} />
                        <p>Title: {paint.title}</p>
                        <p> Credits: {paint.credit_line}</p>
                        <p> Date: {paint.date_display} USD</p>
                        <p> Place of Origin: {paint.place_of_origin}</p>
                        <Button variant="info"><Link to={`/Buy/${id}`}>Buy</Link></Button>
            </div>
            </>
        )
    }   
}
export default Detail