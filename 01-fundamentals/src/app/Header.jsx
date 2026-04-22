import React from 'react'
import Link from 'next/link';

const styleNav = {
  "display": "flex",
  "gap": "10px"
}

function Header() {
  return (
    <div style={styleNav}>
      <Link href='/about'>
      <div>About</div>
      </Link>
      <div>Blog</div>
      <div>Products</div>
      <div>Profile</div>
    </div>
  )
}

export default Header
