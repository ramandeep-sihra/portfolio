import React from 'react';
import styled from 'styled-components';

function About({ data }) {

   if (data) {
      // var name = data.name;
      var profilepic = "images/" + data.image;
      var bio = data.bio;
      // var contactMessage = data.contactmessage;
      // var street = data.address.street;
      // var city = data.address.city;
      // var state = data.address.state;
      // var zip = data.address.zip;
      // var phone = data.phone;
      // var email = data.email;
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
                  {/* <div className="columns contact-details">
                     <h2>Contact Details</h2>
                     <p className="address">
                        <span>{name}</span><br />
                        <span>{street}<br />
                           {city} {state}, {zip}
                        </span><br />
                        <span>{phone}</span><br />
                        <span>{email}</span>
                     </p>
                  </div> */}
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

