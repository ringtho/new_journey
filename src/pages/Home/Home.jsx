import React from 'react'
import Header from '../../components/Header/Header'
import './Home.scss'

const Home = () => {
  return (
    <section className='home__wrapper container'>
        <Header />
        <div className='home__text'>
          <h1>NEW JOURNEY PRIMARY SCHOOLS</h1>
          <h2>Admissions Open</h2>
          <button>Enquire Now</button>
        </div>
    </section>
  )
}

export default Home
