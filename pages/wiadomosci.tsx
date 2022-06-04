import type { NextPage } from 'next'
import Image from 'next/image'
import FeaturedPost from '../components/featured-posts'
import Hero from '../components/hero'
import heroImg from '../public/assets/images/hero/wiadomosci-header.jpg'

const Wiadomosci : NextPage = () => {
  return ( 
    <>
        <Hero imgSrc={heroImg} text={"Wiadomosci"} />
        <section className="header mb-[15px]">
            <div className="container">
                <div className="text-breadcrumbs p-2.5 my-2.5">
                    <ul className="flex flex-wrap w-full">
                        <li><a className="" href="">Klaster</a></li>
                        <li><a className="disabled active" href="">Wiadomosci</a></li>
                    </ul>
                </div>
                <div className="grid-custom grid-custom__gapped">
                    <div className="col-span-full lg:col-span-8">
                        <div className="flex items-center">
                            <div className="w-full">
                                <div className="text-h2">
                                    <h2 className="underline-custom inline-block">Najnowsze wiadomości</h2>
                                </div>
                            </div>
                            <div className="arrows flex space-x-5">
                                <a className="previous group cursor-pointer">
                                    <svg className="" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle className="group-hover:stroke-green transition group-hover:opacity-100" opacity=".3" cx="15" cy="15" r="13.5" stroke="#282828" stroke-width="3"/><path className="transition group-hover:fill-green group-hover:opacity-100" opacity=".3" d="M9.493 14.293a1 1 0 0 0 0 1.414l6.364 6.364a1 1 0 0 0 1.414-1.414L11.614 15l5.657-5.657a1 1 0 0 0-1.414-1.414l-6.364 6.364ZM19.8 14h-9.6v2h9.6v-2Z" fill="#282828"/></svg>
                                </a>
                                <a className="next group cursor-pointer">
                                    <svg className="transform rotate-180" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle className="transition group-hover:stroke-green group-hover:opacity-100" opacity=".3" cx="15" cy="15" r="13.5" stroke="#282828" stroke-width="3"/><path className="transition group-hover:fill-green group-hover:opacity-100" opacity=".3" d="M9.493 14.293a1 1 0 0 0 0 1.414l6.364 6.364a1 1 0 0 0 1.414-1.414L11.614 15l5.657-5.657a1 1 0 0 0-1.414-1.414l-6.364 6.364ZM19.8 14h-9.6v2h9.6v-2Z" fill="#282828"/></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <FeaturedPost/>
    </>
  )
}

export default Wiadomosci