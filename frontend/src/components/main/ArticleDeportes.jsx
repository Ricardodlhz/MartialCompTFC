import React from 'react'
"use client";
import { cn } from "./../../lib/utils";

//Debe ser links los articles para que cuando los pulse me redireccione a la pagina oficial con su informacion
const ArticleDeportes = () => {
    return (
        <>

            <article className="flex-[1_1_300px] ">
                <div
                    className={cn(
                        "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                        "bg-[url(./src/assets/deportes/judo.avif)] bg-cover bg-center",
                        // Preload hover image by setting it in a pseudo-element
                        "before:bg-[url(./src/assets/deportes/judogif.webp)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                        "hover:bg-[url(./src/assets/deportes/judogif.webp)]",
                        "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                        "transition-all duration-500"
                    )}
                >
                    <div className="text relative z-50">
                        <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                            Background Overlays
                        </h1>
                        <p className="font-normal text-base text-gray-50 relative my-4">
                            This card is for some special elements, like displaying background
                            gifs on hover only.
                        </p>
                    </div>
                </div>
            </article>

            <article className="flex-[1_1_300px] ">
                <div
                    className={cn(
                        "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                        "bg-[url(./src/assets/deportes/bjj.jpg)] bg-cover",
                        // Preload hover image by setting it in a pseudo-element
                        "before:bg-[url(./src/assets/deportes/bjjgif.webp)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                        "hover:bg-[url(./src/assets/deportes/bjjgif.webp)]",
                        "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                        "transition-all duration-500"
                    )}
                >
                    <div className="text relative z-50">
                        <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                            Background Overlays
                        </h1>
                        <p className="font-normal text-base text-gray-50 relative my-4">
                            This card is for some special elements, like displaying background
                            gifs on hover only.
                        </p>
                    </div>
                </div>
            </article>
            <article className="flex-[1_1_300px] ">
                <div
                    className={cn(
                        "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                        "bg-[url(./src/assets/deportes/boxeo.avif)] bg-cover bg-center",
                        // Preload hover image by setting it in a pseudo-element
                        "before:bg-[url(./src/assets/deportes/boxeogif.webp)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                        "hover:bg-[url(./src/assets/deportes/boxeogif.webp)]",
                        "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                        "transition-all duration-500"
                    )}
                >
                    <div className="text relative z-50">
                        <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                            Background Overlays
                        </h1>
                        <p className="font-normal text-base text-gray-50 relative my-4">
                            This card is for some special elements, like displaying background
                            gifs on hover only.
                        </p>
                    </div>
                </div>
            </article>
            <article className="flex-[1_1_300px] ">
                <div
                    className={cn(
                        "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                        "bg-[url(./src/assets/deportes/karate.avif)] bg-cover bg-center",
                        // Preload hover image by setting it in a pseudo-element
                        "before:bg-[url(./src/assets/deportes/karategif.webp)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                        "hover:bg-[url(./src/assets/deportes/karategif.webp)]",
                        "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                        "transition-all duration-500"
                    )}
                >
                    <div className="text relative z-50">
                        <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                            Background Overlays
                        </h1>
                        <p className="font-normal text-base text-gray-50 relative my-4">
                            This card is for some special elements, like displaying background
                            gifs on hover only.
                        </p>
                    </div>
                </div>
            </article>

            <article className="flex-[1_1_300px] ">
                <div
                    className={cn(
                        "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                        "bg-[url(./src/assets/deportes/lucha.avif)] bg-cover bg-center",
                        // Preload hover image by setting it in a pseudo-element
                        "before:bg-[url(./src/assets/deportes/luchagif.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                        "hover:bg-[url(./src/assets/deportes/luchagif.gif)]",
                        "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                        "transition-all duration-500"
                    )}
                >
                    <div className="text relative z-50">
                        <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                            Background Overlays
                        </h1>
                        <p className="font-normal text-base text-gray-50 relative my-4">
                            This card is for some special elements, like displaying background
                            gifs on hover only.
                        </p>
                    </div>
                </div>
            </article>

            <article className="flex-[1_1_300px] ">
                <div
                    className={cn(
                        "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                        "bg-[url(./src/assets/deportes/sambo.webp)] bg-cover bg-center",
                        // Preload hover image by setting it in a pseudo-element
                        "before:bg-[url(./src/assets/deportes/sambogif.webp)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                        "hover:bg-[url(./src/assets/deportes/sambogif.webp)]",
                        "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                        "transition-all duration-500"
                    )}
                >
                    <div className="text relative z-50">
                        <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                            Background Overlays
                        </h1>
                        <p className="font-normal text-base text-gray-50 relative my-4">
                            This card is for some special elements, like displaying background
                            gifs on hover only.
                        </p>
                    </div>
                </div>
            </article>
            <article className="flex-[1_1_300px] ">
                <div
                    className={cn(
                        "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                        "bg-[url(./src/assets/deportes/thai.jpg)] bg-cover bg-center",
                        // Preload hover image by setting it in a pseudo-element
                        "before:bg-[url(./src/assets/deportes/thaigif.webp)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                        "hover:bg-[url(./src/assets/deportes/thaigif.webp)]",
                        "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                        "transition-all duration-500"
                    )}
                >
                    <div className="text relative z-50">
                        <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                            Background Overlays
                        </h1>
                        <p className="font-normal text-base text-gray-50 relative my-4">
                            This card is for some special elements, like displaying background
                            gifs on hover only.
                        </p>
                    </div>
                </div>
            </article>
            <article className="flex-[1_1_300px] ">
                <div
                    className={cn(
                        "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                        "bg-[url(./src/assets/deportes/taekwondo.avif)] bg-cover bg-center",
                        // Preload hover image by setting it in a pseudo-element
                        "before:bg-[url(./src/assets/deportes/taekgif.webp)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                        "hover:bg-[url(./src/assets/deportes/taekgif.webp)]",
                        "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                        "transition-all duration-500"
                    )}
                >
                    <div className="text relative z-50">
                        <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                            Background Overlays
                        </h1>
                        <p className="font-normal text-base text-gray-50 relative my-4">
                            This card is for some special elements, like displaying background
                            gifs on hover only.
                        </p>
                    </div>
                </div>
            </article>



        </>

    )
}

export default ArticleDeportes
