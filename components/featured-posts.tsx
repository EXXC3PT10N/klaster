
import React from 'react'
import Image from 'next/image'
import featuredPost from '../public/assets/images/featured-post.png'

const FeaturedPost: React.FC = () => (
    <section className="featured-posts bg-grey-100 pb-20 pt-[74px]">
        <div className="container">
            <div className="grid-custom grid-custom__gapped">
                <div className="col-span-full md:col-span-4">
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
                <div className="col-span-full md:col-span-4 ">
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
                <div className="col-span-full md:col-span-4">
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
    
)
export default FeaturedPost