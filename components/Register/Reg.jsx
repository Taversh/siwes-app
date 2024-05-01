import Link from 'next/link'
import React from 'react'
import './reg.css';
import {FaUser, FaBookOpen, FaKey} from 'react-icons/fa';

function Reg() {
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
                    <h1 className='text-4xl'>Register</h1>
                </div>
                <div className='input-fields animated-input'>
                    <span><FaUser/></span>
                    <input type="text" placeholder='Enter Matric Number "**/****"' />
                </div>
                <div className='input-fields animated-input'>
                    <span><FaBookOpen/></span>
                    <select name="" id="">
                        <option value="__">Select a Course</option>
                        <option value="1">Computer Science</option>
                        <option value="2">Computer Information Systems</option>
                        <option value="3">Computer Technology</option>
                        <option value="4">Software Engineering</option>
                        <option value="5">Information Technology</option>
                    </select>
                </div>
                <div className='input-fields animated-input'>
                    <span><FaKey/></span>
                    <input type="password" placeholder='Enter Password' />
                </div>
                <div className='input-fields animated-input'>
                    <span><FaKey/></span>
                    <input type="password" placeholder='Confirm Password' />
                </div>
            </form>
                <div className='reg-button animated-input'>
                    <button>Register</button>
                </div>
        </div>
        <div className='bg-blue-800 p-10 text-center text-white animated-background log-in-container'
            style={{
                height: 80 + "vh",
                width: 20 + "%"
            }}
        >
            <div className="login-hint animated-input">
                <p>Already Registered?</p>
                <p style={{fontSize: 0.7 + "rem"}}>Log into your account</p>
            </div>
            <div className='log-in-link animated-input'>
                <Link href={'/login'}><span>Log in</span></Link>
            </div> 
        </div>
    </div>
  )
}

export default Reg