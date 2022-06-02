import { ScriptProps } from "next/script"
import React from "react"
import Footer from "./footer"

const Layout: React.FC<ScriptProps> = ({children}) => {
  return (
    <div>
      { children }
      <Footer/>
    </div>
  )
}

export default Layout