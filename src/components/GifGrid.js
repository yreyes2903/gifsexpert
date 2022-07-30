import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';
import 'animate.css'

const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );
    

  // useEffect( () => {
  //   getGifs( category )
  //       .then( setImages );
  // }, [ category ])

  

  return (
    <>
          <h3 className='animate__animated animate__fadeIn'> { category }</h3>
          { loading && <p className='animate__animated animate__flash animate__slower'>Cargando... </p>}
        <div className='card-grid'>
          
             {/* otra forma
              images.map( img => (
                <li key={img.id}> {img.title} </li> 
                ))
                images.map( ({id, title}) => (
                  <li key={id}> {title} </li> 
                  )) */}
               {
                images.map( img => (
                  <GifGridItem 
                      key={ img.id }
                      { ...img }
                  /> 
                  ))        
              } 
            
          

        </div>
    </>
  )
}

export default GifGrid
