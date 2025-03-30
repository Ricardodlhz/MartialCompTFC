import React from 'react'


const ArticleDeportes = () => {
    return (
        <>
            <article className='flex-[1_1_300px] h-[300px] bg-[url(./src/assets/deportes/judo.avif)] bg-cover bg-center'>
             <p className="text">Judo</p>
            </article>

            <article className='flex-[1_1_300px] h-[300px]  bg-[url(./src/assets/deportes/bjj.jpg)] bg-cover bg-center '>
             <p className="text">BJJ</p>  
            </article>
            <article className='flex-[1_1_300px] h-[300px]  bg-[url(./src/assets/deportes/boxeo.avif)] bg-cover bg-center '>
             <p className="text">Boxeo</p>
            </article>

            <article className='flex-[1_1_300px] h-[300px]  bg-[url(./src/assets/deportes/karate.avif)] bg-cover bg-center '>
             <p className="text">Karate</p>  
            </article>
            <article className='flex-[1_1_300px] h-[300px]  bg-[url(./src/assets/deportes/lucha.avif)] bg-cover bg-center '>
             <p className="text">Wrestling</p> 
            </article>

            <article className='flex-[1_1_300px] h-[300px]  bg-[url(./src/assets/deportes/sambo.webp)] bg-cover bg-center '>
             <p className="text">Sambo</p> 
            </article>
            <article className='flex-[1_1_300px] h-[300px]  bg-[url(./src/assets/deportes/thai.jpg)] bg-cover bg-center '>
             <p className="text">Muay Thai</p> 
            </article>

            <article className='flex-[1_1_300px] h-[300px]  bg-[url(./src/assets/deportes/taekwondo.avif)] bg-cover bg-center '>
             <p className="text">Taekwondo</p>   
            </article>
          
        </>

    )
}

export default ArticleDeportes
