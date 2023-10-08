import React from 'react'
import Img from '../../assets/school2.jpg'
import './Welcome.scss'

const Welcome = () => {
  return (
    <section id="about" className="container">
      <div className="welcome__wrapper">
        <div className="welcome__text">
          <h2>Welcome to New Journey Primary School</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eros
            nisl, commodo vel risus et, cursus convallis tellus. Quisque varius
            augue eu ligula faucibus, nec porta mauris pretium. Nullam dictum
            non erat eu dignissim. Phasellus efficitur erat eget lacus
            venenatis, eget ultrices orci accumsan. Suspendisse auctor neque a
            ante blandit ultrices. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Mauris sed
            ullamcorper massa. Maecenas bibendum, ante in aliquam finibus, velit
            risus tristique arcu, at malesuada ipsum metus et risus. Nulla
            venenatis, urna quis varius porta, tortor ex feugiat dui,
            condimentum varius tortor nunc a metus. Nam a ullamcorper nisl.
            Aliquam lobortis nulla eget libero ullamcorper tincidunt. Nunc in
            varius odio. Aliquam ultrices dolor neque, at aliquam ligula blandit
            eget. Quisque malesuada laoreet justo, at elementum urna feugiat et.
            Suspendisse finibus, sem vel tristique semper, odio magna malesuada
            urna, at imperdiet odio nulla ac sapien. Duis hendrerit turpis eu
            quam consequat ullamcorper. Aenean at ligula nunc. Suspendisse
            rutrum malesuada ex.
          </p>
        </div>
        <div className="welcome__image">
          <img src={Img} alt="New Journey Primary School" />
        </div>
      </div>
    </section>
  )
}

export default Welcome
