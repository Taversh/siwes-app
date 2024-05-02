import React from 'react'
import { FaCircle } from 'react-icons/fa'
import '@/components/styles.css';

const Person = {
    Surname: "Apel",
    FirstName: "Tavershima",
    MiddleName: "Joseph",
    MatricNum: "20/1795",
    Course: "Computer Science"
};

function ProfileCard() {
  return (
    <div>
        <div className="profile-container">
            <div style={{
                marginRight: 10 + "px",
                marginLeft: 30 + "px"
            }}>
                <span>
                    <FaCircle/>
                </span>
            </div>
            <div className="name-and-details">
                <div className='name'>
                    <p>{Person.Surname}, {Person.FirstName} {Person.MiddleName}</p>
                </div>
                <div className='details'>
                    <p>{Person.MatricNum}, {Person.Course}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard