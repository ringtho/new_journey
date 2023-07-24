import React from 'react'
import Header from './components/Header/Header'
import ImageSlider from './components/ImageSlider/ImageSlider'
import { ImageData } from './components/ImageSlider/imageData'

function App () {
  return (
    <div className="App">
      <Header />
      <ImageSlider ImageData={ImageData} SlideInterValTime={5000}/>
    </div>
  )
}

export default App
