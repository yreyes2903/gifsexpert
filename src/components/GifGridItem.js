import React from 'react'
import 'animate.css';

 export const GifGridItem = ({id, title, url}) => {

    console.log({id, title, url});
  return (
    <div className='card animate__animated animate__fadeIn animate__slower'>
       <img src={ url } alt={ title } />
       <p> { title } </p>
    </div>
  )
}

export default GifGridItem
