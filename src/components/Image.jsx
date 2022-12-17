
import { useState } from "react";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai"
import {IoBagAddOutline,IoBagAddSharp} from "react-icons/io5"
import { usePictureContext } from "../context/PicProvider";

const Image = ({className, pic}) => {

  const {addToCart, cartItems} = usePictureContext();
  const [hovered, setHovered] = useState(false);
  const [favorite, setFavorite] = useState(false);

  console.log(cartItems);
  
  return (
    <div className={`${className} image-container`}
    onMouseEnter={()=> setHovered(true)}
    onMouseLeave={()=> setHovered(false)}
    >
      <img src={pic.largeImageURL} alt="" className="image-grid" />

      {hovered && 
      <div>
        {favorite && 
        <AiFillHeart className="favorite" onClick={() => setFavorite(false)}/>
        }
        {!favorite && 
        <AiOutlineHeart className="favorite" onClick={() => setFavorite(true)}/>
        }

        {cartItems.some(item => item.id === pic.id) &&
        <IoBagAddSharp className="cart" />
        }
        {!cartItems.some(item => item.id === pic.id) &&
        <IoBagAddOutline className="cart" onClick={()=> addToCart(pic)}/>
        }
      
      </div> }
      
      
    </div>
  )
}

export default Image