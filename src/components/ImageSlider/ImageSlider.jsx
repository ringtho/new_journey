import React, { useEffect, useState } from 'react'
import './ImageSlider.scss'
import PropTypes from 'prop-types'

const ImageSlider = ({ ImageData, SlideInterValTime }) => {
  const SliderProperty = {
    ImageNo: '',
    ImageName: '',
    ImageSrc: ''
  }

  const [sliderProperty, setSliderProperty] = useState(SliderProperty)
  const { ImageNo, ImageName, ImageSrc } = sliderProperty
  const [count, setCount] = useState(0)
  const [animationCls, setAnimationCls] = useState('displayBlock fade')

  const NextClick = () => {
    setAnimationCls(() => ('displayNone fade'))
    const myTimeout = setTimeout(() => {
      setAnimationCls('displayBlock fade')
    }, 100)

    if (count <= ImageData.length - 1) {
      setCount(count + 1)
    }

    if (count === ImageData.length - 1) {
      setCount(0)
    }
  }

  useEffect(() => {
    setSliderProperty((previous) => (
      {
        ...previous,
        ImageNo: ImageData[count].ImageNo,
        ImageName: ImageData[count].ImageName,
        ImageSrc: ImageData[count].ImageSrc
      }))
  }, [count])

  useEffect(() => {
    const interval = setInterval(() => {
      NextClick()
    }, SlideInterValTime)
    return () => clearInterval(interval)
  }, [count])

  return (
    <>
        <div className='slideshow-container '>
            <div className={animationCls}>
                <div className="numbertext">{ImageNo}</div>
                <img src={ImageSrc} className='imageStyle' alt="Img" />
            </div>
            <div className="text">{ImageName}</div>
        </div>
    </>
  )
}

export default ImageSlider

ImageSlider.propTypes = {
  ImageData: PropTypes.array,
  SlideInterValTime: PropTypes.number
}
