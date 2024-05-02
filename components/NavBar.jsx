import React from 'react'
import './nav.css';
import Link from 'next/link';
import { FaCircle, FaAnchor } from 'react-icons/fa';

function NavBar() {
  return (
    <div>
        <nav>
            <div className='nav-logo-container'>
                <Link href={'/dashboard'} className='nav-logo'>
                    <span><FaAnchor/></span>
                    <p>SIWES Digital Log</p>
                </Link>
            </div>
            <div className='nav-links'>
                <ul>
                    <Link href={'/dashboard'}><li>Dashboard</li></Link>
                    <Link href={'/log-entry'}><li>Log Entry</li></Link>
                    <Link href={'/contact'}><li>Contact</li></Link>
                </ul>
            </div>
            <div className='log-out'>
                <button>Log Out</button>
            </div>
        </nav>
    </div>
  )
}

export default NavBar