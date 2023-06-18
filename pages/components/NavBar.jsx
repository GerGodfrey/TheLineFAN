import React, { useState } from 'react';
import SearchBox from './SearchBox';
import Link from 'next/link';

const NavBar = () => {
  
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
      <Link href="/account" legacyBehavior>
        <a className="btn btn-ghost normal-case text-xl">Account</a>
      </Link>
      <SearchBox />
    </div>
  );
};

export default NavBar;

