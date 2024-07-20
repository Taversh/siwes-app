import React from 'react';
import '@/components/styles.css';
import NavBar from '@/components/NavBar';
import ProfileCard from '@/components/ProfileCard';

function Dashboard() {
  return (
    <div>
        <NavBar/>
        <div>
          <ProfileCard/>
        </div>
        <div className='display'>
          <h1>Dashboard</h1>
          <p>Welcome to the Babcock University SIWES Log Entry System!</p>
          <br />
          <p>
            We are delighted to have you as part of our community dedicated to academic excellence and professional growth. This platform is designed to help you effortlessly log your daily activities, track your progress, and stay organized throughout the school year.
          </p>
          <br />
          <p>
            Your consistent updates not only help you stay on top of your responsibilities but also enable us to support your journey more effectively.
          </p>
          <br />
          <p>
            Thank you for your commitment to excellence and for being an integral part of our school's success.
          </p>
        </div>
    </div>
  )
}

export default Dashboard