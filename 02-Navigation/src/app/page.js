'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState(true);
  const router = useRouter();

  function handleLogin(){
    if(user){
      router.push('/dashboard');
    }
    else{
      router.push('signup');
    }
  }

  return (
    <div className="m-8">
      <div className="text-2xl text-amber-300">
        Hello Next.js
      </div>
      <p>Login to start</p>
      <button onClick={handleLogin} className="border-amber-50 border-2 px-5 py-2 rounded-xl">Login</button>
    </div>
  );
}
