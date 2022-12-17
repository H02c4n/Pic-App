import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'



const PictureContext = createContext();


const PicProvider = ({children}) => {

    const [allPics, setAllPics] = useState();
    const [cartItems, setCartItems] = useState([]);

    const API_KEY = process.env.REACT_APP_API_KEY;
    const BASE_URL = `https://pixabay.com/api/?key=${API_KEY}&per_page=20&colors=blue`;

    useEffect(() => {
        fetch(BASE_URL).then(res => res.json()).then(res =>setAllPics(res?.hits));
    }, [])


    const addToCart = (pic) =>{
        setCartItems(prevCartItems => [...prevCartItems, pic]);
    }
    

    const values = {
        allPics,
        cartItems,
        addToCart,
    }

  return (
    <PictureContext.Provider value={values}>
        {children}
    </PictureContext.Provider>
  )
}



export const usePictureContext =()=>{
    return useContext(PictureContext);
}

export default PicProvider