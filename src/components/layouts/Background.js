import React from 'react'
import BackgroundTexture from '../../materials/Texture.png'
import BackgroundPattern from '../../materials/bg-pattern-cell-svg.svg'


function Background(props) {
  return (
    <div className='relative h-full w-auto'>
      <div className='absolute w-full h-full top-0 bg-repeat bg-center mix-blend-overlay opacity-10'
        style={{ backgroundImage: `url(${BackgroundTexture})`, backgroundSize: "134px" }}></div>
      <div className='relative w-auto h-full mx-4'>
        <div className='absolute w-full top-24 bottom-4  box-border bg-repeat bg-top opacity-20'
          style={{ backgroundImage: `url(${BackgroundPattern})`, backgroundSize: "16px" }}></div>
      </div>
    </div >
  )
}

export default Background