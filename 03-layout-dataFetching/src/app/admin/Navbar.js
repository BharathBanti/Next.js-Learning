function Navbar() {
  return (
    <div className="flex justify-evenly items-center text-amber-400 border-b-2 border-white py-3">
      <div>Home</div>
      <div>About</div>
      <div>Services</div>
      <div>Product</div>
      <div>Profile</div>
      <div>Dashboard</div>
      <div>Statistics</div>
      <button className="border-2 rounded-xl bg-white px-3 py-1 text-black">Log out</button>
    </div>
  )
}

export default Navbar
