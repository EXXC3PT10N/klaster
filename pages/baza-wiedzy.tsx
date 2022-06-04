import type { NextPage } from 'next'
import Image from 'next/image'
import FeaturedPost from '../components/featured-posts'
import Hero from '../components/hero'
import heroImg from '../public/assets/images/hero/bazawiedzy-header.jpg'

const BazaWiedzy_single : NextPage = () => {
  return ( 
    <>
        <Hero imgSrc={heroImg} text={"Baza wiedzy"} />
        <section className="header mb-[15px]">
            <div className="container">
                <div className="text-breadcrumbs p-2.5 my-2.5">
                    <ul className="flex flex-wrap w-full">
                        <li><a className="" href="">Klaster</a></li>
                        <li><a className="disabled active" href="">Baza wiedzy</a></li>
                    </ul>
                </div>
                <div className="flex">
                    <div className="w-full">
                        <div className="text-h2 underline-custom">
                            <h2>Tytuł artykułu</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <FeaturedPost/> 
        
    </>
  )
}

export default BazaWiedzy_single