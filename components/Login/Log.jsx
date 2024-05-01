import React from 'react'
import Link from 'next/link';
import '@/components/Register/reg.css'
import {FaUser, FaBookOpen, FaKey} from 'react-icons/fa';


function Log() {
  return (
    <div className='flex justify-center h-screen w-screen items-center'>
        <div className='bg-blue-500 p-10 text-white animated-background'
         style={{
            height: 80 + "vh",
            width: 35 + "%"
         }}
         >
            <form action="">
                <div className='my-5 animated-input'>
                    <h1 className='text-4xl'>Login</h1>
                    <p>Sign into your Account</p>
                </div>
                <div className='input-fields animated-input'>
                    <span><FaUser/></span>
                    <input type="text" placeholder='Enter Matric Number "**/****"' />
                </div>
                <div className='input-fields animated-input'>
                    <span><FaKey/></span>
                    <input type="password" placeholder='Enter Password' />
                </div>
            </form>
                <div className='reg-button animated-input'>
                    <button>Log In</button>
                </div>
        </div>
        <div className='bg-blue-800 p-10 text-center text-white animated-background log-in-container'
            style={{
                height: 80 + "vh",
                width: 20 + "%"
            }}
        >
            <div className="login-hint animated-input">
                <p>No Account?</p>
                <p style={{fontSize: 0.7 + "rem"}}>Register with Administration</p>
            </div>
            <div className='log-in-link animated-input'>
                <Link href={'/'}><span>Register</span></Link>
            </div> 
        </div>
    </div>
  )
}

export default Log