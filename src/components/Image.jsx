
import PropTypes from "prop-types"
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai"
import {IoBagAddOutline,IoBagAddSharp} from "react-icons/io5"
import { useAppContext } from '../context/ContextProvider';

const Image = ({className, pic}) => {
  const{isFavorite, id, largeImageURL} = pic;
    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useAppContext();
    //console.log(pic.id);
  return (
    <div className={`${className} image-container`}
    >
        <img src={largeImageURL} className="image-grid" alt={id} />
        {isFavorite && <AiFillHeart className='favorite' onClick={()=> toggleFavorite(id)}/>}
        {!isFavorite && <AiOutlineHeart className='favorite' onClick={()=> toggleFavorite(id)}/>}

        {cartItems.includes(id) && <IoBagAddSharp className="cart" onClick={() => removeFromCart(id)}/>}
        {!cartItems.includes(id) && <IoBagAddOutline className="cart" onClick={()=>addToCart(pic.id)}/>}
        
    </div>
  )
}

Image.prototype ={
  className: PropTypes.string,
  img: PropTypes.shape({
    id:PropTypes.string.isRequired,
    url:PropTypes.string.isRequired,
    isFavorite:PropTypes.bool
  })
}

export default Image