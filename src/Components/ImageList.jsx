import React from 'react'
import ImageShow from './ImageShow'
import './ImageList.css'

const ImageList = ({images}) => {

  const renderedImages = images.map((image) => {
    return <ImageShow image={image} />
  });

  return (
    <div className='images'>
      {renderedImages}
    </div>
  )
}

export default ImageList