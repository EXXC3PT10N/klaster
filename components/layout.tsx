import { ScriptProps } from "next/script"
import React from "react"
import Footer from "./footer"
import Header from "./header"

const Layout: React.FC<ScriptProps> = ({children}) => {
  return (
    <>
      <Header />
     { children }
      <Footer/>
    </>
  )
}

export default Layout