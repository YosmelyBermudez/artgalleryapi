export function getAll(){
    return fetch("https://api.artic.edu/api/v1/artworks?page=2&limit=50").then((res)=>res.json())
}
