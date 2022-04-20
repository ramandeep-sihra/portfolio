import React from 'react';
import styled from 'styled-components';

function About({ data }) {

   if (data) {
      var profilepic = "images/" + data.image;
      var bio = data.bio;
      var resumeDownload = data.resumedownload;
   }

   return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <ProfileImage className="profile-pic" src={profilepic} alt="Ramandeep Sihra Profile Pic" />
            </div>
            <div className="nine columns main-col">
               <h2>About Me</h2>

               <p>{bio}</p>
               {/* {contactMessage} */}
               <div className="row">
                  <div className="columns download">
                     <p>
                        <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                     </p>
                  </div>
               </div>
            </div>
         </div>

      </section>
   );
}

export default About;

const ProfileImage = styled.img`
   width: 75% !important;
   height: 75% !important;
   border-radius: 15% !important;
   transition: 1s !important;
   &:hover {
      transform: scale(1.1) !important;
   } 
`