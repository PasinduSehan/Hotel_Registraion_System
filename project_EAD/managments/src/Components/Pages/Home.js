
import React from 'react';
import Hero from '../HomeSection/Hero';
import HomeAbout from '../HomeSection/HomeAbout'
import DestinationHome from '../HomeSection/Destina/DestinationHome';
import MostPopular from '../HomeSection/popular/MostPopular';
import Download from '../HomeSection/Download/Download';
import Works from '../HomeSection/Work/Works';
import Gallery from '../HomeSection/gallery/Gallery';


const Home = () => {
  return (
    <>
     <Hero />
     <HomeAbout />
     <MostPopular />
     <DestinationHome />
     <Download />
     <Works />
     <Gallery />

    </>
  );
}

export default Home;


