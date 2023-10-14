import React from 'react';
import './About.css';
import ProfileCard from './components/ProfileCard.js';

function About() {
  return (
    <div className='about'>
        <div className='about-devs'>
            <h1 className='devs-head'><em>Meet the Developers!</em></h1>
            <div className='about-devs-con'>
                <ProfileCard 
                    pfp="https://media.licdn.com/dms/image/D4D03AQGzV5wA3UI3Rg/profile-displayphoto-shrink_800_800/0/1669476406186?e=1697068800&v=beta&t=sQt4tlksqWGSzqyI4B6y6PdAu62e9MpYj3QYjsLT6HA"
                    name="Siddhant"
                    regNo="21BCE10511"
                    github="https://github.com/siddhantt10"
                    linkedin="https://www.linkedin.com/in/siddhantt10"
                />
                <ProfileCard 
                    pfp="https://media.licdn.com/dms/image/C4D03AQFFWrjZ-QkQNg/profile-displayphoto-shrink_800_800/0/1632843770529?e=1697068800&v=beta&t=BUtWM4Lw9hr7lcfray_ksIdd53eHsHnVApjzlK1mJPQ"
                    name="Kunal"
                    regNo="21BCE10799"
                    github="https://github.com/KunalVatsKV"
                    linkedin="https://www.linkedin.com/in/kunal-vats2003"
                />
                <ProfileCard 
                    pfp="https://media.licdn.com/dms/image/D4D03AQGM1tnU_sJiBQ/profile-displayphoto-shrink_800_800/0/1663163821307?e=1697068800&v=beta&t=5owh90jkXQG9Wz_M_Q5aQDu6Ex5j6SxsFVZ_lVPXoxE"
                    name="Abhilash"
                    regNo="21BCE10436"
                    github="https://github.com/Abhilash020"
                    linkedin="https://www.linkedin.com/in/abhilash-mohapatra2004"
                />
            </div>
        </div>
    </div>
  )
}

export default About