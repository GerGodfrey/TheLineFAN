import React, {useRef} from 'react';

export default function Compra(){
    const CLIENT_ID="1ee64a060989476a823be1c469a1f507"
    const secret_ID = "7369b2e324394dca9d1d205b3ba849cb"
    const SPOTIFY_AUTH_ENDPOINT="https://accounts.spotify.com/authorize"
    const REDIRECT_URL="http://localhost:3000/compra"
    
    const [clientID, setclientID] = React.useState<string>("")
    const [clientSecret, setclientSecret] = React.useState<string>("")
  
    const handleLogin = () => {
      let inputElement = document.getElementById("clientID");
      setclientID(inputElement.value)
      inputElement = document.getElementById("passID");
      setclientSecret(inputElement.value)
  
      let url = SPOTIFY_AUTH_ENDPOINT
      url += "?client_id=" + CLIENT_ID
      url += "&response_type=code"
      url += "&redirect_uri=" + REDIRECT_URL
      url += "&show_dialog=true"
      url += "&scope=user-read-currently-playing user-read-playback-state"
  
      window.location.href = url
    }

    return(
        <div>
            <h1>Info del artista</h1>

            <h2>Conectate para saber si eres compatible </h2>
            <h2>¡Hola! Soy un diálogo de prueba, buenas noches</h2>

            <div>
                <input id="clientID" type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                <input id="passID" type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                <button className='btn btn-primary' onClick={handleLogin}>Login</button>
            </div>
        </div>
        
    )
}