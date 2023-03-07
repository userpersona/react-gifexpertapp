import { useState } from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {

    
    if (categories.includes(newCategory)) return;

    // setCategories( cat => [ ...cat, 'Valorant']); esta es otra manera de usar el setCategories, desestructurandolo
    setCategories([newCategory, ...categories])

  }


  return (
    <>
    
      <h1>GifExpertApp</h1>
   
      <AddCategory
        onNewCategory={(event) => onAddCategory(event)}
        />
      
      {/* <button onClick={onAddCategory}> Agregar </button> */}


      {
        categories.map((category) => (
          <GifGrid 
          key={category}
          category={ category } />
        ))
      }
    </>
  )
}

