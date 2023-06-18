import React, {useRef,useState} from 'react';
import Link from 'next/link';

export default function Account(){
    const [isInVenue, setIsInVenue] = useState(false);

    const toggleInVenue = () => {
      console.log("jiajsosjdsdj")
        setIsInVenue(prevState => !prevState);
      
        const url = "your-api-endpoint"; // Replace with your actual API endpoint
      
        if (isInVenue) {
          // Perform a GET request
          fetch(url)
            .then(response => response.json())
            .then(data => {
              // Process the response data
              console.log(data);
            })
            .catch(error => {
              // Handle the error
              console.error(error);
            });
        } else {
          // Perform a POST request
          fetch(url, {
            method: "POST",
            body: JSON.stringify({}), // Replace with the request payload if needed
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then(response => response.json())
            .then(data => {
              // Process the response data
              console.log(data);
            })
            .catch(error => {
              // Handle the error
              console.error(error);
            });
        }
    };

    const toggleNoVenue = () => {
      console.log("jiajsosjdsdj")
        setIsInVenue(prevState => !prevState);
      
        const url = "your-api-endpoint"; // Replace with your actual API endpoint
      
        if (isInVenue) {
          // Perform a GET request
          fetch(url)
            .then(response => response.json())
            .then(data => {
              // Process the response data
              console.log(data);
            })
            .catch(error => {
              // Handle the error
              console.error(error);
            });
        } else {
          // Perform a POST request
          fetch(url, {
            method: "POST",
            body: JSON.stringify({}), // Replace with the request payload if needed
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then(response => response.json())
            .then(data => {
              // Process the response data
              console.log(data);
            })
            .catch(error => {
              // Handle the error
              console.error(error);
            });
        }
    };

    return(
        <div>
            <a className="btn" onClick={toggleInVenue}>In-venue function</a>
            <a className="btn" onClick={toggleNoVenue}>No-venue function</a>
        </div>
    )
}