import React from 'react';
import './ProfileCard.css';

function ProfileCard ({
    pfp,
    name,
    regNo,
    github,
    linkedin
}){
  return (
    <div className='profile-card'>
        <img className='pfp' src={pfp} alt={name} />
        <h2 className='name'>{name}</h2>
        <p>{regNo}</p>

        <div className='socials'>
        <button className="button-4" ><a href={github}>Github</a></button>
        <button className="button-4" ><a href={linkedin}>linkedin</a></button>
        </div>
    </div>
  )
}

export default ProfileCard