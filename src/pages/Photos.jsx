import React from 'react'
import { useAppContext } from '../context/ContextProvider'
import Image from '../components/Image';
import { getClass } from '../utils/getClass';
const Photos = () => {



  const {allPics} = useAppContext();
  

  return (
    <main className='photos'>
      {allPics?.map((pic, i) =>{
        return(
          <Image key={i} pic={pic} className={getClass(i)} />
        )
      })}
    </main>
  )
}

export default Photos