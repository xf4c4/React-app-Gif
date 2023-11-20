import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    //Hook para guardar el estado de si esta colapsado el elemento o no
    const [collapsed, setcollapsed] = useState(false);

    //Funcion para actualizar el estado de colapso del elemento cuando hace click
    const handleCollapseGrid = () => {
        setcollapsed(!collapsed);
    }

    return (
    <>
        {//Esto sirve para que si esta cargando los datos que muestre ese mensaje sino nada
            isLoading && ( <h2>Cargando.....</h2> )
        }

        <div className="card-layout">
            <div className="card-grid-title" onClick={ handleCollapseGrid }>
                <h3>{ category }</h3>
            </div>
            <div className={`card-grid collapse-container${collapsed ? '-collapsed' : ''}`}>
                {
                    images.map( (data) => (
                        <GifItem 
                            key={ data.id }
                            { ...data }
                        />
                    ))
                }
            </div>
        </div>
    </>
    )
}
