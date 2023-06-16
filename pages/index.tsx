import React, {useRef} from 'react';

type CarouselItem = {
  src: string;
  alt: string;
};

export default function Home(){

  return (
    <div className='w-full'>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li tabIndex={0}>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center mt-40 text-center'>
        <h1 className='text-6xl'>The Line Fan</h1>
        <div className="flex carousel rounded-box">
          <div className="flex carousel-item">
            <img className="object-contain h-48 w-96" src="https://ipfs.io/ipfs/bafybeidpt4tmwmo2agcvodmlzivzb7373nlsdawejkkdyq4ubxynen2tva" alt="Burger" />
          </div> 
          <div className="flex carousel-item">
            <img className="object-contain h-48 w-96" src="https://ipfs.io/ipfs/bafybeiffgty56qwljy6263t676akq45nqguwewopy5a6xjg6f7equ7dmm4" alt="Burger" />
          </div> 
          <div className="flex carousel-item">
            <img className="object-contain h-48 w-96" src="https://ipfs.io/ipfs/bafybeiaxmp2r3sj5hkopduuwxxdxmno6fgjwdnvmhsrzd4qvzpffqgwfoi" alt="Burger" />
          </div> 
          <div className="flex carousel-item">
            <img className="object-contain h-48 w-96" src="https://ipfs.io/ipfs/bafybeiegb25w3rhoqcfdttvyitwv5xgglfnj5p4uwqqh7fz4fswrh52sha" alt="Burger" />
          </div> 
        </div>
      </div>
    </div>

  )
}
