import React from 'react'
import Header from '../../components/Header/Header'

const Home = () => {
  return (
    <section className='home__wrapper'>
        <Header />
        {/* <ImageSlider ImageData={ImageData} SlideInterValTime={5000}/> */}
        <div className='home__text'>
          <h1>NEW JOURNEY PRIMARY SCHOOLS</h1>
          <h2>Admissions Open</h2>
          <button>Enquire Now</button>
        </div>
    </section>
  )
}

export default Home
