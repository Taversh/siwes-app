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
        <div>
          
        </div>
    </div>
  )
}

export default Dashboard