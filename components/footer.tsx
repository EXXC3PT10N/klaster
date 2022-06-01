
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import footerLogo from '../public/assets/images/icons/footer-logo.svg'
import locationIcon from '../public/assets/images/icons/Location.svg'
import phoneIcon from '../public/assets/images/icons/Phone.svg'
import emailIcon from '../public/assets/images/icons/Email.svg'
import facebookIcon from '../public/assets/images/icons/facebook.svg'
import linkedInIcon from '../public/assets/images/icons/linkedin.svg'
import twitterIcon from '../public/assets/images/icons/twitter.svg'

const Footer: React.FC = () => (
    <footer className="bg-blue-dark text-white pt-[72px] pb-[120px]">
        <div className="container">
            <div className="grid-custom grid-custom__gapped">
                <div className="col-span-full md:col-span-5 flex">
                    <div className="shrink-0">
                        <Link href='/'>
                            <a>
                                <Image src={footerLogo} layout="intrinsic" alt=""></Image>
                            </a>
                        </Link>
                    </div>
                    <div className="ml-10 text">
                        <div className="text-h5">
                            <p>O firmie</p>
                        </div>
                        <div className="text-base">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet dui quis risus semper, vulputate rutrum quam molestie. </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-full md:col-span-3">
                    <div className="text-h5">
                        <p>Kontakt</p>
                    </div>
                    <div className="text-base">
                        <div className="element flex space-x-1">
                            <Image className="shrink-0" src={locationIcon} width={24} height={24} alt=""></Image>
                            <a href="">ul. Wybrana 3/5, 00-000 Miasto</a>
                        </div>
                        <div className="element flex space-x-1">
                            <Image className="shrink-0" src={phoneIcon} width={24} height={24} alt=""></Image>
                            <a href="tel:+48 123 456 789">+48 123 456 789</a>
                        </div>
                        <div className="element flex space-x-1">
                            <Image className="shrink-0" src={emailIcon} width={24} height={24} alt=""></Image>
                            <a href="mailto:kontakt@firma.com">kontakt@firma.com</a>
                        </div>
                    </div>
                </div>
                <div className="col-span-full | md:col-start-10 md:col-span-3">
                    <div className="text-h5 mb-[30px]">
                        <p>Znajdź Nas<br />
                            na social media</p>
                    </div>
                    <div className="flex space-x-5">
                        <div className="block">
                            <a href="https://www.facebook.com/" target={'_blank'} rel="noreferrer">
                                <Image className="shrink-0" src={facebookIcon} width={36} height={36} alt=""></Image>
                            </a>
                        </div>
                        <div className="block">
                            <a href="https://www.linkedin.com/" target={'_blank'} rel="noreferrer">
                                <Image className="shrink-0" src={linkedInIcon} width={36} height={36} alt=""></Image>
                            </a>
                        </div>
                        <div className="block">
                            <a href="https://twitter.com/" target={'_blank'} rel="noreferrer">
                                <Image className="shrink-0" src={twitterIcon} width={36} height={36} alt=""></Image>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
)
export default Footer