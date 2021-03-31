import React from 'react';
import TypeWriter from "react-typewriter";
import styled from 'styled-components';

function Header({ data }) {
   if (data) {
      var name = data.name;
      var occupation = data.occupation;
      var description1 = data.description1;
      var description2 = data.description2;
      // var city = data.address.city;
      var state = data.address.state;
      var networks = data.social.map(function (network) {
         return <SocialMediaListItem key={network.name}><a href={network.url}><i className={network.className}></i></a></SocialMediaListItem>;
      })
   }

   return (
      <HeaderMain id="home">
         <Navigation id="nav-wrap">
            {/* <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a> */}
            {/* <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a> */}
            <NavigationList>
               <NavigationListItem className="current">
                  <a className="smoothscroll" href="#home">Home</a>
               </NavigationListItem>
               <NavigationListItem>
                  <a className="smoothscroll" href="#about">About</a>
               </NavigationListItem>
               <NavigationListItem>
                  <a className="smoothscroll" href="#resume">Resume</a>
               </NavigationListItem>
               <NavigationListItem>
                  <a className="smoothscroll" href="#portfolio">Projects</a>
               </NavigationListItem>
               <NavigationListItem>
                  <a className="smoothscroll" href="#contact">Contact</a>
               </NavigationListItem>
            </NavigationList>
         </Navigation>

         <HeaderAnimation></HeaderAnimation>

         <HeaderImage className="row banner banner-text">
            <h1 className="responsive-headline">
               <TypeWriter typing={0.5}>{name ? `I'm ${name}.` : null}</TypeWriter>
            </h1>
            <h3>
               <TypeWriter typing={2}>{`I'm a ${state} based `}<span>{`${occupation}`}</span><br />{`${description1}`}<br />{`${description2}`}</TypeWriter>
            </h3>
            <hr />

            <SocialMediaList>
               {networks}
            </SocialMediaList>
         </HeaderImage>

         <ScrollDown>
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </ScrollDown>
      </HeaderMain>
   );
}

export default Header;

const HeaderMain = styled.header`
   position: relative;
   height: 800px;
   min-height: 500px;
   width: 100%;
   background: #161415 url(../images/header-background.jpg) no-repeat top center;
   // background-size: cover !important;
   // -webkit-background-size: cover !important;
   text-align: center;
   // overflow: hidden;
`

const Navigation = styled.nav`
`

const NavigationList = styled.ul`
   font: 12px 'opensans-bold', sans-serif;
   width: 100%;
   text-transform: uppercase;
   letter-spacing: 2.5px;
   margin: 0 auto;
   padding: 10px;
   z-index: 100;
   position: fixed;
   left: 0;
   top: 0;
   background-color: black;
`

const NavigationListItem = styled.li`
   margin: 7px 15px;
   display: inline-block;
   a {color: white;}
   a:focus, a:hover {color: white;}
   &.current a {color: #3996b8;}
   &:hover {transform: scale(1.05);}
`

const HeaderAnimation = styled.div`
   margin-left: 18%;
   margin-bottom: -3%;
   width: 65px;
   height: 65px;
   position: relative;
   animation: myfirst 10s linear 0s infinite alternate;
 
   @keyframes myfirst {
      0%   {background: url(../images/header-background.jpg) left top; left:0px; top:65px; opacity: 0.75;}
      40%  {background: url(../images/header-background.jpg) right center; left:715px; top:165px; opacity: 0.75;}
      50%  {background: url(../images/header-background.jpg) right top; left:715px; top:65px; opacity: 0.75;}
      90%  {background: url(../images/header-background.jpg) left center; left:0px; top:165px; opacity: 0.75;}
      100% {background: url(../images/header-background.jpg) left top; left:0px; top:65px; opacity: 0.75;}
   }
`

const HeaderImage = styled.div`
   padding-top: 200px;
   h1 {
      font: 90px/1.1em 'opensans-bold';
      color: white;
      text-shadow: 1px 1px 3px rgba(0, 255, 0, .75);
   }
   h3 {
      font: 18px/1.9em 'librebaskerville-regular';
      color: white;
   }
   hr {
      width: 65%;
      margin: 20px auto;
      border-color: rgba(150, 150, 150, .5);
   }
`

const SocialMediaList = styled.ul`
   // margin-top: -10px;
   font-size: 30px;
`

const SocialMediaListItem = styled.li`
   display: inline;
   margin: 0 15px;
   a { color: #dddddd; }
   a:hover { color: white; }
`

const ScrollDown = styled.p`
   a {
      position: absolute;
      bottom: 10px;
      left: 47.7%;
      color: white;
      display: block;
      height: 42px;
      width: 42px;
      font-size: 42px;
      line-height: 42px;
      color: #fff;
      border-radius: 100%;

      -webkit-transition: all .3s ease-in-out;
      -moz-transition: all .3s ease-in-out;
      -o-transition: all .3s ease-in-out;
      transition: all .3s ease-in-out;
   }
   a:hover { color: #11ABB0; }
`