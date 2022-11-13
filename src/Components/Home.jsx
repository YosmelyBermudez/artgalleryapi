import { useEffect, useState } from "react";
import { getAll } from "../Services/ArtServices";
import Paint from "./Paint";
import {Row} from 'react-bootstrap';
import firebase from "../Config/firebase"

function Home() {
    console.log(firebase)
    const [paints, setPaints] = useState([])
    const [isLoading,setIsloading] = useState(true)
    useEffect(
        ()=>{
            const result = async ()=>{
                try{
                    const responseData = await getAll()
                    console.log(responseData.data)
                    setPaints(responseData.data)
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
            <div>
                <h1>Art Gallery</h1>
                <Row>
                {paints.length && paints.map(paint => <Paint key = {paint.id} id={paint.id} artist_display={paint.artist_display} image_id ={paint.image_id} artwork_type_title={paint.artwork_type_title} category_titles={paint.category_titles} />)}
                </Row> 
            </div>
        )
    }   
}
export default Home