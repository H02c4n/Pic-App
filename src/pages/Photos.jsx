import React from 'react'
import Image from '../components/Image';
import { getClass } from '../utils/getClass';
import {usePictureContext} from "../context/PicProvider";
const Photos = () => {


  const {allPics} = usePictureContext();

  const picElement = allPics?.map(pic =>(
    <Image key={pic.id} pic={pic} className={getClass(pic?.id)} />
  ))

  return (
    <main className='photos'>
     {picElement}
    </main>
  )
}

export default Photos