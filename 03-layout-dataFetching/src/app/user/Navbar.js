function Navbar() {
  return (
    <div className="flex justify-evenly items-center text-yellow-200-400 border-b-2 border-white py-3">
      <div>Home</div>
      <div>About</div>
      <div>Services</div>
      <div>Product</div>
      <button className="border-2 rounded-xl bg-white px-3 py-1 text-black">Get Admin</button>
    </div>
  )
}

export default Navbar
