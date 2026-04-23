import Link from "next/link";

export default function Home() {

  return <div>
    <h1 className="text-4xl text-center text-amber-500">Welcome to Next.js</h1>
    <h3>This is the Main Layout of this Next.js app</h3>
      <Link href='/user'><button className="border-2 rounded-xl bg-white px-3 py-1 text-black">Users</button></Link>
      <Link href='/admin'><button className="border-2 rounded-xl bg-white px-3 py-1 text-black">Admin</button></Link>
  </div>
}
