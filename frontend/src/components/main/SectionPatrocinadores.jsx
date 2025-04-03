import React from 'react'
import CardsMoving from './CardsMoving'
const SectionPatrocinadores = () => {
  return (
    <section className='mt-10 '>
        <h2 class=" text-xl  md:text-3xl lg:text-4xl font-bold font-[Roboto] text-white">Aqui tienes a nuestros patrocinadores  <i class="fa-solid fa-arrow-down text-xl bg-[black] rounded-xl p-2 animate-bounce"></i></h2>
        <h2></h2>
        <CardsMoving></CardsMoving>
    </section>
  )
}

export default SectionPatrocinadores
