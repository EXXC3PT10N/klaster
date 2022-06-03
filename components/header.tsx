import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import logo from '../public/assets/images/icons/main-logo.svg'
import headerText from '../public/assets/images/icons/header-text.svg'
import navbarBirds from '../public/assets/images/icons/navbar-birds.svg'
import Button from "./button";

type nav = {
  url: string
  text: string
}

const Header: FC = () => {
  const navList: nav[] = [
    {
      text: 'Wiadomości',
      url: '/wiadomosci'
    },
    {
      text: 'O klastrze',
      url: '/o-klastrze'
    },
    {
      text: 'Oferta Klastra',
      url: '/oferta-klastra'
    },
    {
      text: 'Giełda Usług',
      url: '/gielda-uslug'
    },
    {
      text: 'Showroom',
      url: '/showroom'
    },
    {
      text: 'Projekty',
      url: '/projekty'
    },
    {
      text: 'Akademia Recyklingu',
      url: '/akademia-recyklingu'
    },
    {
      text: 'Baza wiedzy',
      url: '/baza-wiedzy'
    },
    {
      text: 'Kontakt',
      url: '/kontakt'
    },
    {
      text: 'English',
      url: '/english'
    },
  ]

  return (
    <header className="flex flex-wrap items-center pt-[30px] pr-[20px] pb-[20px] pl-[30px] bg-blue-dark text-white">
      <div className="mr-7 shrink-0 flex items-center">
        <Link href='/'>
          <a className="flex items-center space-x-4">
            <Image src={logo} className='block' />
            <Image src={headerText} className='block' />
          </a>
          </Link>
          <Link href='/'>
          <a>
            <Image src={navbarBirds} className='block' />
          </a>
        </Link>
      </div>
      <ul className="flex mr-10 grow">
        {
          navList.map(({ text, url }) => {
            return (
              <li className="text-[18px] leading-6">
                <Link href={url}>
                  <a className="p-[10px]">{text}</a>
                </Link>
              </li>
            )
          })
        }
      </ul>
      <Button text="strefa klastra" href="/" navbar />
    </header >
  )
}

export default Header