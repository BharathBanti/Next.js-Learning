'use client';

import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  console.log(router);
  return <div>
    <h2 className="text-5xl">Welcome to Next.js 15</h2>
    <button onClick={() => router.back()} className="border-amber-50 border-2 px-5 py-2 rounded-xl">Go back</button>
  </div>
}

export default Page;