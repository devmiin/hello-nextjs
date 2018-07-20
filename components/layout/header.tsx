import React from 'react';
import Link from 'next/link'

const MenuItem = ({url, name}) => {
  return (
    <li className="menu__item">
      <Link href={url}>
        <a className="menu__link">{name}</a>
      </Link>
    </li>
  )
}

export default () => {
  return (
    <header id="header">
      <nav className="nav-top">
        <ul className="menu">
          <MenuItem url="/" name="Home" />
          <MenuItem url="/about" name="About" />
        </ul>
      </nav>
    </header>
  )
}
