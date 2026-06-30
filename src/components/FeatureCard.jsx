import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import HoverText from './HoverText';
import useViewTransition from "../hooks/useViewTransition";
import gsap from '../libs/gsap';


const FeatureCard = ({ data, id, activeCard, setActiveCard }) => {
  const { navigateTo } = useViewTransition();
  const imgRef = useRef(null)
  const cardRef = useRef(null)

  const isActive = activeCard === id;

  const isInactive =
    activeCard !== null &&
    activeCard !== id;

  const HandelEnter = () => {
    setActiveCard(id)
    gsap.to(imgRef.current, {
      scale: 1,
      duration: 0.9,
      ease: "power2.out"
    })

    gsap.to(cardRef.current, {
      scale: 1.12,
      duration: 0.9,
      boxShadow: "0 25px 60px rgba(0,0,0,.35)"
    })

  }

  const HandelLeave = () => {
    setActiveCard(null)
    gsap.to(imgRef.current, {
      scale: 1.12,
      duration: 0.9,
      ease: "power2.Out"
    })

    gsap.to(cardRef.current, {
      scale: 1,
      duration: 0.9,
      boxShadow: "0 0 0 rgba(0,0,0,0)"
    })

  }

  return (
    <div
      ref={cardRef}
      onMouseEnter={HandelEnter} onMouseLeave={HandelLeave} onClick={() => {
        navigateTo(data.route)

      }} className={`relative h-40 w-128 flex items-center justify-center overflow-hidden cursor-pointer ${isInactive ? "scale-95 opacity-90 blur-[1.5px] z-10" : "z-0"}`}>
      <img
        ref={imgRef}

        className={`absolute inset-0 w-full h-full object-cover scale-125 ${isInactive ? "blur-[1.5px]" : ""}`}
        src={data.img}
        alt={data.name}
      />

      <div className='absolute inset-0 bg-black/40'></div>

      <h1 className='relative z-10 text-white text-3xl font-semibold'>
        <HoverText text={data.name} />
      </h1>
    </div>
  )
}

export default FeatureCard