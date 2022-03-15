//leerá el json de la dirección http 
const jokeURL = "https://api.chucknorris.io/jokes/random";
//fetch(jokeURL).then( resp =>{
 //  resp.json().then( data => {

//    console.log(data.id);
//    console.log(data.value);
//   });
//});



//aquí se centralizará las peticiones 
const  obtenerChiste = async() => 
{
    const resp = await fetch( jokeURL);

    if(!resp.ok) throw alert('No se pudo realizar la petición');
    
    const chiste = await resp.json();

    return chiste;
   
}



export{
    obtenerChiste
}