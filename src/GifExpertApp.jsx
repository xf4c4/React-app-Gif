import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setcategories] = useState( [] );

    const onAddCategory = ( newCategory ) => {

        if( categories.includes(newCategory) ) return;
        
        setcategories( (prevCategories) => [newCategory, ...prevCategories] );
    }

    return (
        <>
            
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
            />

            { categories.map( (category) => (
                <GifGrid 
                    key={ category } 
                    category={ category }
                />
            ))}
            
        </>    
    )
}
