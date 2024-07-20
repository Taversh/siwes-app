import React from 'react'
import '@/components/styles.css';
import NavBar from '@/components/NavBar';
import ProfileCard from '@/components/ProfileCard';

function LogEntry() {
  return (
    <div>
        <NavBar/>
        <div>
          <ProfileCard/>
        </div>
    </div>
  )
}

export default LogEntry