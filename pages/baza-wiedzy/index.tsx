import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import Hero from '../../components/hero'
import heroImg from '../../public/assets/images/hero/bazawiedzy-header.jpg'
import placeholderImg from '../../public/assets/images/wiadomosci-konkret.jpg'
import PostImage from '../../public/assets/images/post-image.png'
import PostImage_featured from '../../public/assets/images/wiadomosci-konkret-2.png'
import featuredPost from '../../public/assets/images/featured-post.png'
import arrowDropdown from '../../public/assets/images/icons/arrow-drop-down.svg'

const BazaWiedzy: NextPage = () => {
    return (
        <>
            <Hero imgSrc={heroImg} text={"Baza wiedzy"} />
            <section className="header mb-[20px]">
                <div className="container">
                    <div className="flex justify-between pt-5">
                        <div className="text-breadcrumbs p-2.5 mb-2.5">
                            <ul className="flex flex-wrap w-full">
                                <li><Link href={'/'}>Klaster</Link></li>
                                <li><a className="disabledd active" href="">Baza wiedzy</a></li>
                            </ul>
                        </div>

                        <form>
                            <div className="search relative">
                                <input type="search" id="default-search" className="outline-none " placeholder="Znajdz wiadomość" required />
                                <button type="submit" ><svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="#302B3F" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                            </div>
                        </form>

                    </div>
                    <div>
                        <div className="grid-custom grid-custom__gapped pt-2.5">
                            <div className="col-span-full lg:col-span-6 row-start-1">
                                <div className="flex items-center">
                                    <div className="w-full">
                                        <div className="text-h2">
                                            <h2 className="underline-custom inline-block">Najnowsze artykuły</h2>
                                        </div>
                                    </div>
                                    <div className="arrows flex space-x-5">
                                        <a className="previous group cursor-pointer">
                                            <svg className="" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle className="group-hover:stroke-green transition group-hover:opacity-100" opacity=".3" cx="15" cy="15" r="13.5" stroke="#282828" strokeWidth="3" /><path className="transition group-hover:fill-green group-hover:opacity-100" opacity=".3" d="M9.493 14.293a1 1 0 0 0 0 1.414l6.364 6.364a1 1 0 0 0 1.414-1.414L11.614 15l5.657-5.657a1 1 0 0 0-1.414-1.414l-6.364 6.364ZM19.8 14h-9.6v2h9.6v-2Z" fill="#282828" /></svg>
                                        </a>
                                        <a className="next group cursor-pointer">
                                            <svg className="transform rotate-180" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle className="transition group-hover:stroke-green group-hover:opacity-100" opacity=".3" cx="15" cy="15" r="13.5" stroke="#282828" strokeWidth="3" /><path className="transition group-hover:fill-green group-hover:opacity-100" opacity=".3" d="M9.493 14.293a1 1 0 0 0 0 1.414l6.364 6.364a1 1 0 0 0 1.414-1.414L11.614 15l5.657-5.657a1 1 0 0 0-1.414-1.414l-6.364 6.364ZM19.8 14h-9.6v2h9.6v-2Z" fill="#282828" /></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid-custom grid-custom__gapped pt-2.5">
                            <div className="col-span-full lg:col-span-6">
                                <div className="grid grid-cols-8 gap-x-[30px] mt-[50px]">
                                    <div className="col-span-full lg:col-span-4">
                                        <Image className="rounded-sm" src={PostImage_featured} alt="post image featured" />
                                    </div>
                                    <div className="col-span-full lg:col-span-4 flex flex-col">

                                        <ul className="filters text-single--filters flex flex-wrap">
                                            <li><a href="">Kategoria</a></li>
                                        </ul>
                                        <div className="text-h3 mt-4 mb-[30px]">
                                            <h3>Lorem ipsum dolor sit consectetur</h3>
                                        </div>
                                        <a href="" className="font-bold tracking-[0.1em] uppercase flex items-center py-[5px] group transition-[color] hover:text-green">Dowiedz się więcej <svg className="transition-[padding] group-hover:pl-1" width="29" height="30" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#a)" stroke="#302B3F" strokeWidth="1.785" strokeLinecap="round" strokeLinejoin="round"><path d="M5.95 14.976h16.656M17.847 19.735l4.759-4.76M17.847 10.217l4.759 4.759" /></g><defs><clipPath id="a"><path fill="#fff" transform="translate(0 .699)" d="M0 0h28.554v28.554H0z" /></clipPath></defs></svg></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-full lg:col-span-6">
                                <div className="grid grid-cols-8 gap-x-[30px] mt-[50px]">
                                    <div className="col-span-full lg:col-span-4">
                                        <Image className="rounded-sm" src={PostImage_featured} alt="post image featured" />
                                    </div>
                                    <div className="col-span-full lg:col-span-4 flex flex-col">

                                        <ul className="filters text-single--filters flex flex-wrap">
                                            <li><a href="">Kategoria</a></li>
                                        </ul>
                                        <div className="text-h3 mt-4 mb-[30px]">
                                            <h3>Lorem ipsum dolor sit consectetur</h3>
                                        </div>
                                        <a href="" className="font-bold tracking-[0.1em] uppercase flex items-center py-[5px] group transition-[color] hover:text-green">Dowiedz się więcej <svg className="transition-[padding] group-hover:pl-1" width="29" height="30" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#a)" stroke="#302B3F" strokeWidth="1.785" strokeLinecap="round" strokeLinejoin="round"><path d="M5.95 14.976h16.656M17.847 19.735l4.759-4.76M17.847 10.217l4.759 4.759" /></g><defs><clipPath id="a"><path fill="#fff" transform="translate(0 .699)" d="M0 0h28.554v28.554H0z" /></clipPath></defs></svg></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="posts bg-grey-light pt-[50px] pb-[36px]">
                <div className="container">
                    <div className="grid-custom grid-custom__gapped">
                        <div className="bg-white rounded col-span-full lg:col-span-4 flex flex-col h-fit p-2.5">
                            <div className="dropdown">
                                <label tabIndex={0} className="btn-link text-blue-dark font-semibold cursor-pointer flex items-center hover:no-underline">Wszystkie <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 10L12 15L17 10H7Z" fill="#302B3F" />
                                </svg>
                                </label>
                                <ul tabIndex={0} className="dropdown-content menu menu-normal p-2 shadow-sm bg-white rounded w-52">
                                    <li><a>Wszystkie</a></li>
                                    <li><a>Kategoria 1</a></li>
                                    <li><a>Kategoria 2</a></li>
                                    <li><a>Kategoria 3</a></li>
                                    <li><a>Kategoria 4</a></li>
                                    <li><a>Kategoria 5</a></li>
                                </ul>
                            </div>
                            <div>
                                <label className="btn-link text-blue-dark font-semibold cursor-pointer flex items-center hover:no-underline">Szukaj
                                </label>
                                <form>
                                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                                    <div className="relative">
                                        <div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        </div>
                                        <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Znajdź artykuł" required />
                                    </div>
                                </form>
                            </div>
                            <div>
                                <h1>Kategorie</h1>
                                <ul>
                                    <li>
                                        <div className="collapse">
                                            <input type="checkbox" className="peer" />
                                            <div className="collapse-title p-0  text-primary-content  peer-checked:text-secondary-content">
                                                <h1 className=''>Kategoria 1</h1>
                                                <div className='flex absolute p-0 top-4 right-0 items-center pointer-events-none'>
                                                    <Image src={arrowDropdown} className='' />
                                                </div>
                                            </div>
                                            <div className="collapse-content  text-primary-content peer-checked:text-secondary-content">
                                                <ul>
                                                    <li>
                                                        <h1 className=''>Podkategoria 1</h1>
                                                    </li>
                                                    <li>
                                                        <h1 className=''>Podkategoria 2</h1>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </li>
                                    <li>
                                        <div className="collapse">
                                            <input type="checkbox" className="peer" />
                                            <div className="collapse-title  text-primary-content  peer-checked:text-secondary-content">
                                                <h1 className=''>Kategoria 2</h1>
                                                <div className='flex absolute top-4 right-0 items-center pr-3 pointer-events-none'>
                                                    <Image src={arrowDropdown} className='' />
                                                </div>
                                            </div>
                                            <div className="collapse-content  text-primary-content peer-checked:text-secondary-content">
                                                <ul>
                                                    <li>
                                                        <h1 className=''>Podkategoria 1</h1>
                                                    </li>
                                                    <li>
                                                        <div className="collapse">
                                                            <input type="checkbox" className="peer" />
                                                            <div className="collapse-title  text-primary-content  peer-checked:text-secondary-content">
                                                                <h1 className=''>Podkategoria 2</h1>
                                                                <div className='flex absolute top-4 right-0 items-center pr-3 pointer-events-none'>
                                                                    <Image src={arrowDropdown} className='' />
                                                                </div>
                                                            </div>
                                                            <div className="collapse-content  text-primary-content peer-checked:text-secondary-content">
                                                                <ul>
                                                                    <li>
                                                                        <h1 className=''>PodPodkategoria 1</h1>
                                                                    </li>
                                                                    <li>
                                                                        <h1 className=''>PodPodkategoria 2</h1>
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className=" posts-main grid grid-cols-8 gap-[30px] mb-[55px] col-span-full lg:col-span-8">
                            <div className="col-span-full lg:col-span-4">
                                <div className="flex flex-col ">
                                    <a href="">
                                        <Image className="rounded-sm" src={PostImage} alt="post-image" />
                                    </a>
                                    <ul className="filters text-single--filters flex flex-wrap pt-5">
                                        <li><a href="">Kategoria</a></li>
                                    </ul>
                                    <div className="text-h3 pt-4">
                                        <a href="">
                                            <h3>Lorem ipsum dolor sit consectetur</h3>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-full lg:col-span-4">
                                <div className="flex flex-col">
                                    <a href="">
                                        <Image className="rounded-sm" src={PostImage} alt="post-image" />
                                    </a>
                                    <ul className="filters text-single--filters flex flex-wrap pt-5">
                                        <li><a href="">Kategoria</a></li>
                                    </ul>
                                    <div className="text-h3 pt-4">
                                        <a href="">
                                            <h3>Lorem ipsum dolor sit consectetur</h3>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-full lg:col-span-4">
                                <div className="flex flex-col">
                                    <a href="">
                                        <Image className="rounded-sm" src={PostImage} alt="post-image" />
                                    </a>
                                    <ul className="filters text-single--filters flex flex-wrap pt-5">
                                        <li><a href="">Kategoria</a></li>
                                    </ul>
                                    <div className="text-h3 pt-4">
                                        <a href="">
                                            <h3>Lorem ipsum dolor sit consectetur</h3>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-full lg:col-span-4">
                                <div className="flex flex-col">
                                    <a href="">
                                        <Image className="rounded-sm" src={PostImage} alt="post-image" />
                                    </a>
                                    <ul className="filters text-single--filters flex flex-wrap pt-5">
                                        <li><a href="">Kategoria</a></li>
                                    </ul>
                                    <div className="text-h3 pt-4">
                                        <a href="">
                                            <h3>Lorem ipsum dolor sit consectetur</h3>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-full lg:col-span-4">
                                <div className="flex flex-col">
                                    <a href="">
                                        <Image className="rounded-sm" src={PostImage} alt="post-image" />
                                    </a>
                                    <ul className="filters text-single--filters flex flex-wrap pt-5">
                                        <li><a href="">Kategoria</a></li>
                                    </ul>
                                    <div className="text-h3 pt-4">
                                        <a href="">
                                            <h3>Lorem ipsum dolor sit consectetur</h3>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pagination flex justify-center">
                        <div className="btn-group">
                            <button className="btn btn-primary">&lt;</button>
                            <button className="btn btn-primary">1</button>
                            <button className="btn btn-primary btn-active disabled">2</button>
                            <button className="btn btn-primary">3</button>
                            <button className="btn btn-primary">4</button>
                            <button className="btn btn-primary">5</button>
                            <button className="btn btn-primary">&gt;</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BazaWiedzy