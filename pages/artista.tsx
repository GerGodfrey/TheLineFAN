import React, {useRef} from 'react';
import Link from 'next/link';

export default function Artista(){
    const CLIENT_ID="1ee64a060989476a823be1c469a1f507"
    const SECRET_ID = "7369b2e324394dca9d1d205b3ba849cb"
    const SPOTIFY_AUTH_ENDPOINT="https://accounts.spotify.com/authorize"
    const REDIRECT_URL2="https://the-fan-lane-ebon.vercel.app/artista"
    const REDIRECT_URL="http://localhost:3000/artista"
    const TOKEN="https://accounts.spotify.com/api/token"

    const [clientID, setclientID] = React.useState<string>("")
    const [clientSecret, setclientSecret] = React.useState<string>("")
    const [loginSuccess, setloginSuccess] = React.useState<boolean>(false)
    const [userCode, setuserCode] = React.useState<string>("")
    const [userTop100, setuserTop100] = React.useState<boolean>(true)
    let inputElement = ""

    const handleLogin = () => {
        
      
    //   try {
    //     let inputElement = document.getElementById("clientID")
    //     if (inputElement.value !== undefined){
    //         setclientID(inputElement.value)
    //     }
    //     inputElement = document.getElementById("passID");
    //     if (inputElement.value !== undefined){
    //         setclientSecret(inputElement.value)
    //     }
    //   } catch (error) {
    //     console.log(error)
    //   }
      let url = SPOTIFY_AUTH_ENDPOINT
      url += "?client_id=" + CLIENT_ID
      url += "&response_type=code"
      url += "&redirect_uri=" + REDIRECT_URL2
      url += "&show_dialog=true"
      url += "&scope=user-read-currently-playing user-read-playback-state"
  
      window.location.href = url
    }

    const getCode = () => {
        let code = null
        const queryString = window.location.search
        if ( queryString.length > 0 ) {
            const params = new URLSearchParams(queryString)
            code = params.get("code")
        }
        return code 
    }

    async function callAuthAPI2(body: string) {
        const res = await fetch("https://accounts.spotify.com/api/token", {
            // mode: 'no-cors',
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'Basic'+ btoa(CLIENT_ID + ':' + SECRET_ID)
              // 'Authorization': 'Basic ' + (new Buffer(CLIENT_ID + ':' + SECRET_ID).toString('base64')) // 'Authorization': 'Basic'+ btoa(CLIENT_ID + ':' + SECRET_ID)
            },
            body: body
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response
            
        })
        .catch(error => {
            // Handle errors
            console.error('Error:', error);
        });
    }

    const fetchAccessToken = (code: string | null) => {
        let body = ""
        body += "&grant_type=authorization_code"
        body += "&code=" + code
        body += "&redirect_uri=" + REDIRECT_URL2
        //body += "&client_id=" + CLIENT_ID
        // body += "&code_verifier=" + SECRET_ID
        //callAuthAPI2(body)
        setloginSuccess(true)
    }

    const handleRedirect = () => {
        const code = getCode()
        fetchAccessToken(code)
    }

    const onPageLoad = () =>{
        if(window.location.search.length> 0){
            handleRedirect()
        }
    }

    React.useEffect(() => {
        onPageLoad()
    }, [onPageLoad])

    return(
        <div className='px-8 py-8 '>
            
            {(loginSuccess) ? ( (userTop100) ? (
                <div>
                <h2>Felicidades . . .</h2>
                
                Fuiste seleccionada sigue en <a href="https://complete-order.vercel.app/" className='bg-secondary'>Compra</a>

                </div>

                
            ) : (
                <div>
                    <h2>Lo lamentamos ...</h2>
                    <a> Para esta ocasión no puedes participar para la preventa de este artista</a>
                </div>
            )
                
            ):(
                <div>
                    <h1 className='text-4xl font-bold text-blue-500'>Info del artista</h1>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Concierto en vivo</h2>
                        <p className="text-gray-700">Fecha: 12 de julio, 2023</p>
                        <p className="text-gray-700">Hora: 19:00</p>
                        <p className="text-gray-700">Lugar: Estadio XYZ</p>
                        <p className="text-gray-700">Precio: $50</p>
                    </div>
                    <div className="container place-content-center flex justify-center items-center">
                        <h2>Conectate para saber si eres compatible </h2>
                        <div className='flex-auto grid-rows-2'>
                            <a> Cliente ID </a>
                            <input id="clientID" type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                        </div>
                        <div className='flex-auto grid-rows-2 px-1	'>
                            <a> Cliente password</a>
                            <input id="passID" type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                        </div>
                        <button className='btn btn-primary' onClick={handleLogin}>Login</button>
                    </div>
                </div>
            )}

        </div>
        
    )
}

function handle(this: XMLHttpRequest, ev: ProgressEvent<EventTarget>) {
    throw new Error('Function not implemented.');
}



