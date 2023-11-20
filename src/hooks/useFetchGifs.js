import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs"


export const useFetchGifs = ( category ) => { 

    //Hook para mantener el estado la funcion getgifs
    const [datagifs, setdatagifs] = useState( [] );
    const [isLoading, setIsLoading] = useState( true )

    //Hook de react 
    useEffect( () => {
        getGifs(category).then( (data) => {
            setdatagifs(data);
            setIsLoading( false );
        })
    }, []);


    return {
        images: datagifs,
        isLoading
    }

}
