import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onImputChange = ( {target} ) =>{
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();

        if ( inputValue.trim().length <=1) return;//para que se pueda escribir solo de dos caracteres en adelante

        //setCategories( categories => [ inputValue, ...categories ] );//para que guarde arriba del elemento anterior lo escrito
        onNewCategory( inputValue.trim() );//el trim es para que no tenga espacio ni adelante ni atras
        setInputValue ('');
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange = { onImputChange }
            />
        </form>
    )
}