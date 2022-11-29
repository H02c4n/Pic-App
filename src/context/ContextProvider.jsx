import { createContext, useContext, useEffect, useState } from "react";


const AppContext = createContext();

const ContextProvider = ({children}) => {

  const[allPics, setAllPics] = useState([]);
  const[cartItems, setCartItems] = useState([]);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = `https://pixabay.com/api/?key=${API_KEY}&per_page=5&colors=blue`;

  useEffect(() => {
    fetch(BASE_URL).then(res => res.json()).then(res => setAllPics(res?.hits));
  }, [])



  const toggleFavorite =(id)=>{
    const updatedPics = allPics?.map(pic =>{
      if (pic.id === id) {
        return{...pic, isFavorite:!pic.isFavorite}
      }
      return pic;
    })
  
    setAllPics(updatedPics);
  }


  const addToCart =(id)=>{
    if (!cartItems.includes(id)) {
      setCartItems(prevCartItem => [...prevCartItem, id]);
    }
  }

  const removeFromCart = (id) =>{
    if (cartItems.includes(id)) {
     const filteredItems =  cartItems.filter(item => item !== id )
     setCartItems(filteredItems);
    }
  }


  const values = {
    allPics,
    toggleFavorite,
    addToCart,
    cartItems,
    removeFromCart
  }

  console.log(cartItems);

  return (
    <AppContext.Provider value={values}>
        {children}
    </AppContext.Provider>
  )
}




export const useAppContext =()=>{
    return useContext(AppContext);
}


export default ContextProvider; 