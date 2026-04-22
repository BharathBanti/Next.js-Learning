import Link from "next/link";

function Navbar() {
  return (
    <div className="flex m-8 justify-around">
      <div><Link href='/'>Home</Link></div>
      <div><Link href='/about'>About</Link></div>
      <div><Link href='/product'>Product</Link></div>
      <div><Link href='/profile'>Profile</Link></div>
      <div><Link href='/contact'>Contact</Link></div>
    </div>
  )
}

export default Navbar;