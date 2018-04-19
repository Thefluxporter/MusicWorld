
import config from './config'

const api_key = config.apiKey
const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${api_key}&format=json`

export default function getArtists(country) {
    const url = URL.replace(':country', country) // antres de hacer el request, se actualiza con el country ya definido. donde diga :country lo reemplazamos por la variable que viene como parametro
    return fetch(url) // fetch, funcion del navegador. cuando utilizamos fetch nos devuelve un objet que tiene varios metodos, uno de ellos es JSON
        .then(res => res.json()) // una promesa que va a recibir una respuesta para retornar otra promesa. json nos devuelve otra promesa en la cual va a ir encargando los datos,  la respuesta, a medida que vayan llegando, a traves de un string
        .then(json => json.topartists.artist) // obetenemos un json. y lo que vamos a pedir que nos devuelva el array con todos los artistas  de la pagina lastfm/api
}