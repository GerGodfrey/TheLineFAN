import {useState} from 'react';
import SearchBox from './SearchBox';
import Link from 'next/link';

const NavBar =  () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Nosotros</a></li>
                <li>
                    <a>Proximamente</a>
                    <ul className="p-2">
                    <li><a>Español MX</a></li>
                    <li><a>English US</a></li>
                    </ul>
                </li>
                <li><a>Eventos</a></li>
                </ul>
            </div>
            <Link href="/" legacyBehavior>
                <a className="btn btn-ghost normal-case text-xl">Fan Lane</a>
            </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li><a>Nosotros</a></li>
                <li tabIndex={0}>
                <details>
                    <summary>Proximamente</summary>
                    <ul className="p-2">
                    <li><a>Español</a></li>
                    <li><a>English</a></li>
                    </ul>
                </details>
                </li>
                <li><a>Eventos</a></li>
            </ul>
            </div>
            <div className="navbar-end">
            <a className="btn">Button</a>
            </div>
            <SearchBox />
      </div>
    )
}

export default NavBar;