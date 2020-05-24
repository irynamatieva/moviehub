import React from 'react';
import blueLogo from '../blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg';

function About() {
  return (
    <div className='about'>
      <div className='about-text'>
        <h1>About Us</h1>
        <p>
          Movie Hub is a platform that allows our users to find movie info and
          watch trailers of a wide variety of movies and documentaries. At Movie
          Hub, you can browse ad-free. There's always something new to discover,
          and movies are added every week!
        </p>

        <div className='att'>
          <img src={blueLogo} alt='' />
          <p>
            This product uses the TMDb API but is not endorsed or certified by
            TMDb.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
