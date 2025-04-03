import React, { useEffect, useState } from "react";
import venum from './../../assets/marcas/venum.jpeg'
import everlast from './../../assets/marcas/everlast.png'
import koral from './../../assets/marcas/koral.png'
import nkl from './../../assets/marcas/nkl.jpg'
import yokao from './../../assets/marcas/yokao.png'
import shollo from './../../assets/marcas/shollo.jpeg'
const CardsMoving = () => {

    return (
        
        <article class="scrolling-container  ">
            <div class="scrolling-content   ">
                <img src={venum} alt="" className=" w-[70px]  "/>
                <img src={everlast} alt="" className=" w-[70px] "/>
                <img src={koral} alt="" className=" w-[70px] "/>
                <img src={nkl} alt="" className=" w-[70px] "/>
                <img src={yokao} alt="" className=" w-[70px]  "/>
                <img src={shollo} alt="" className=" w-[70px] "/>
              
            </div>
        </article>
    );
}

export default CardsMoving






