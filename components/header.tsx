import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import logo from '../public/assets/images/icons/main-logo.svg'
import headerText from '../public/assets/images/icons/header-text.svg'
import navbarBirds from '../public/assets/images/icons/navbar-birds.svg'

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
    <header className="flex items-center h-[130px] bg-blue-dark text-white">
      <div>
        <Link href='/'>
          <a className="flex items-center">
            {/* <span className=""> */}
              <Image src={logo} />
              <Image src={headerText} />
            {/* </span> */}
            <Image src={navbarBirds} />
          </a>
        </Link>
      </div>
      <ul className="flex">
        {
          navList.map(({ text, url }) => {
            return (
              <li>
                <Link href={url}>
                  <a className="p-[10px]">{text}</a>
                </Link>
              </li>
            )
          })
        }
      </ul>
      <button>strefa klastra</button>
    </header>
  )
}

export default Header