import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Hero from '../../components/hero'
import heroImg from '../../public/assets/images/hero/wiadomosci-header.jpg'
import PostImage from '../../public/assets/images/post-image.png'
import PostImage_featured from '../../public/assets/images/wiadomosci-konkret-2.png'
import featuredPost from '../../public/assets/images/featured-post.png'

const Wiadomosci : NextPage = () => {
  return ( 
    <>
        <Hero imgSrc={heroImg} text={"Wiadomosci"} />
        <section className="header mb-[20px]">
            <div className="container">
                <div className="flex justify-between pt-5">
                    <div className="text-breadcrumbs p-2.5 mb-2.5">
                        <ul className="flex flex-wrap w-full">
                            <li><Link href={'/'}>Klaster</Link></li>
                            <li><a className="disabledd active" href="">Wiadomosci</a></li>
                        </ul>
                    </div>
                    
                        <form>   
                            <div className="search relative">
                                <input type="search" id="default-search" className="outline-none " placeholder="Znajdz wiadomość" required />
                                <button type="submit" ><svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="#302B3F" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                            </div>
                        </form>
                    
                </div>
               
                <div className="grid-custom grid-custom__gapped pt-2.5">
                    <div className="col-span-full lg:col-span-8">
                        <div className="flex items-center">
                            <div className="w-full">
                                <div className="text-h2">
                                    <h2 className="underline-custom inline-block">Najnowsze wiadomości</h2>
                                </div>
                            </div>
                            <div className="arrows flex space-x-5">
                                <a className="previous group cursor-pointer">
                                    <svg className="" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle className="group-hover:stroke-green transition group-hover:opacity-100" opacity=".3" cx="15" cy="15" r="13.5" stroke="#282828" strokeWidth="3"/><path className="transition group-hover:fill-green group-hover:opacity-100" opacity=".3" d="M9.493 14.293a1 1 0 0 0 0 1.414l6.364 6.364a1 1 0 0 0 1.414-1.414L11.614 15l5.657-5.657a1 1 0 0 0-1.414-1.414l-6.364 6.364ZM19.8 14h-9.6v2h9.6v-2Z" fill="#282828"/></svg>
                                </a>
                                <a className="next group cursor-pointer">
                                    <svg className="transform rotate-180" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle className="transition group-hover:stroke-green group-hover:opacity-100" opacity=".3" cx="15" cy="15" r="13.5" stroke="#282828" strokeWidth="3"/><path className="transition group-hover:fill-green group-hover:opacity-100" opacity=".3" d="M9.493 14.293a1 1 0 0 0 0 1.414l6.364 6.364a1 1 0 0 0 1.414-1.414L11.614 15l5.657-5.657a1 1 0 0 0-1.414-1.414l-6.364 6.364ZM19.8 14h-9.6v2h9.6v-2Z" fill="#282828"/></svg>
                                </a>
                            </div>
                        </div>
                        <div className="grid grid-cols-8 gap-x-[30px] mt-[50px]">
                            <div className="col-span-full lg:col-span-4">
                                <Image className="rounded-sm" src={PostImage_featured } alt="post image featured" />
                            </div>
                            <div className="col-span-full lg:col-span-4 flex flex-col">
                                
                                <ul className="filters text-single--filters flex flex-wrap pt-5">
                                    <li><a href="">Kategoria</a></li>
                                </ul>
                                <div className="text-h3 mt-4 mb-[30px]">
                                    <h3>Lorem ipsum dolor sit consectetur</h3>
                                </div>
                                <a href="" className="font-bold tracking-[0.1em] uppercase flex items-center py-[5px] group transition-[color] hover:text-green">Dowiedz się więcej <svg className="transition-[padding] group-hover:pl-1" width="29" height="30" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#a)" stroke="#302B3F" strokeWidth="1.785" strokeLinecap="round" strokeLinejoin="round"><path d="M5.95 14.976h16.656M17.847 19.735l4.759-4.76M17.847 10.217l4.759 4.759"/></g><defs><clipPath id="a"><path fill="#fff" transform="translate(0 .699)" d="M0 0h28.554v28.554H0z"/></clipPath></defs></svg></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-full lg:col-span-4 shadow-sm mt-[50px] py-2.5 px-5 rounded">
                        <div className="text-h3 mb-[30px]">
                            <h3>Wyróżnione</h3>
                        </div>
                        <div className="flex space-x-[30px] cursor-pointer mb-5">
                            <div className="flex shrink-0 img w-[100px] h-20 relative">
                                <Image src={featuredPost} className="rounded-sm object-cover object-center" alt="featured-post"/> 
                            </div>
                            <div className="text">
                                <div className="text-single--filters mb-2">
                                    <ul className="flex flex-wrap w-full">
                                        <li><a className="transition-[color] hover:text-green" href="">Kategoria</a></li>
                                        <li><a className="transition-[color] hover:text-green" href="">Kiedy dodany</a></li>
                                    </ul>
                                </div>
                                <div className="text-h4 title w-11/12">
                                    <p>Lorem ipsum dolor sit</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-[30px] cursor-pointer mb-5">
                            <div className="flex shrink-0 img w-[100px] h-20 relative">
                                <Image src={featuredPost} className="rounded-sm object-cover object-center" alt="featured-post"/> 
                            </div>
                            <div className="text">
                                <div className="text-single--filters mb-2">
                                    <ul className="flex flex-wrap w-full">
                                        <li><a className="transition-[color] hover:text-green" href="">Kategoria</a></li>
                                        <li><a className="transition-[color] hover:text-green" href="">Kiedy dodany</a></li>
                                    </ul>
                                </div>
                                <div className="text-h4 title w-11/12">
                                    <p>Lorem ipsum dolor sit</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-[30px] cursor-pointer">
                            <div className="flex shrink-0 img w-[100px] h-20 relative">
                                <Image src={featuredPost} className="rounded-sm object-cover object-center" alt="featured-post"/> 
                            </div>
                            <div className="text">
                                <div className="text-single--filters mb-2">
                                    <ul className="flex flex-wrap w-full">
                                        <li><a className="transition-[color] hover:text-green" href="">Kategoria</a></li>
                                        <li><a className="transition-[color] hover:text-green" href="">Kiedy dodany</a></li>
                                    </ul>
                                </div>
                                <div className="text-h4 title w-11/12">
                                    <p>Lorem ipsum dolor sit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="posts bg-grey-light pb-[36px]">
            <div className="container">
                <div className="posts-filters text-filters flex justify-between py-[50px]">
                    <ul className="hidden lg:flex flex-wrap categories">
                        <li className="px-5 first:pl-0 last:pr-0"><a href="" className="active">Wszystkie</a></li>
                        <li className="px-5 first:pl-0 last:pr-0"><a href="" className="">Kategoria 2</a></li>
                        <li className="px-5 first:pl-0 last:pr-0"><a href="" className="">Kategoria 3</a></li>
                        <li className="px-5 first:pl-0 last:pr-0"><a href="" className="">Kategoria 4</a></li>
                        <li className="px-5 first:pl-0 last:pr-0"><a href="" className="">Kategoria 5</a></li>
                    </ul>
                    <div className="lg:hidden sorting-posts text-base leading-[34px]">
                        <span className="font-light">Filtruj:</span>
                        <div className="pl-2 dropdown">
                            <label tabIndex={0} className="btn-link text-blue-dark font-semibold cursor-pointer flex items-center hover:no-underline">Wszystkie <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 10L12 15L17 10H7Z" fill="#302B3F"/>
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
                    </div>
                    <div className="sorting-posts text-base leading-[34px]">
                        <span className="font-light">Sortuj wg:</span>
                        <div className="pl-2 dropdown">
                            <label tabIndex={0} className="btn-link text-blue-dark font-semibold cursor-pointer flex items-center hover:no-underline">Najnowsze <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 10L12 15L17 10H7Z" fill="#302B3F"/>
                            </svg>
                            </label>
                            <ul tabIndex={0} className="dropdown-content menu menu-normal p-2 shadow-sm bg-white rounded w-52">
                                <li><a>Najnowsze</a></li>
                                <li><a>Najstarsze</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="posts-main grid-custom grid-custom__gapped mb-[55px]">
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

export default Wiadomosci