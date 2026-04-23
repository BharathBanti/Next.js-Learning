import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>Hello Next.js</div>
      <div>
        <button className="border px-3 py-1 m-3"><Link href='/users'>All Users</Link></button>
        <button className="border px-3 py-1 m-3"><Link href='/add-user'>Add User</Link></button>
      </div>
    </div>
  );
}
