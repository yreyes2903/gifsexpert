import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categorias, setCategorias] =  useState(['One Punch']);

    // const handleAdd = () => {
    //     //setCategorias( (categ) => categ.push('SuperMan'));
    //     setCategorias( [...categorias, 'SuperMan'] );

    // };

    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategorias={ setCategorias } /> 
        <hr/>
        {/*<button onClick={ handleAdd }>Agregar</button>*/}
        <ol>
            {
                categorias.map( category => (
                    <GifGrid  
                    key={ category }
                    category = { category }
                />
                ))
            }
        </ol>
        </>
    );

}

export default GifExpertApp;