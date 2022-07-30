import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({setCategorias}) => {

    const [inputValue, setInpuntValue] = useState('');

    const handleInputChange = ( e ) => {
        setInpuntValue( e.target.value );

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('Hecho');
        //setCategorias([...categorias, inputValue ]); // puede hacerse de esta manera no es necesario porque desde
        if (inputValue.trim().length > 2) {
            setCategorias(cats => [inputValue,...cats ]);
            setInpuntValue('');
        }                                             // el setCategorias puedo llamar el arreglo categorias 
        }

  return (    
    <form onSubmit={ handleSubmit }>
      <input
       type="text"
       value={ inputValue }
       onChange={ handleInputChange }       
       />
    </form>    
  )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}

export default AddCategory
