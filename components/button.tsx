import { FC } from "react";

type props = {
  text: string
  navbar?: boolean
  href: string
}

const Button: FC<props> = ({text, navbar, href}) => {
  const classes = `btn btn-primary ${navbar ? 'btn-navbar' : ""}`
  return (
    <a className={ classes } href={href}>
      {text}
    </a>
  )
}

export default Button