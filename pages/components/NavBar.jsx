import React, { useState } from 'react';
import SearchBox from './SearchBox';
import Link from 'next/link';

const NavBar = () => {
  const [isInVenue, setIsInVenue] = useState(false);

  const toggleInVenue = () => {
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


  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        {/* Dropdown menu code */}
      </div>
      <Link href="/" legacyBehavior>
        <a className="btn btn-ghost normal-case text-xl">Fan Lane</a>
      </Link>
      <div className="navbar-center hidden lg:flex">
        {/* Menu code */}
      </div>
      <div className="navbar-end">
        <a className="btn" onClick={toggleInVenue}>In-venue function</a>
      </div>
      <SearchBox />
      <div>
        {isInVenue ? <p>You are in the venue!</p> : null}
      </div>
    </div>
  );
};

export default NavBar;

