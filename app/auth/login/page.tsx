// app/auth/login/page.tsx
"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "authenticated") {
    return null; // Already authenticated, handle redirection
  }

  return (
    <main className="h-full w-full flex justify-center items-center background-gradient">
      <div className="space-y-2 lg:space-y-10 w-[90%] lg:w-[60rem] text-center">
        <h1 className="text-3xl font-bold">AI Chatbot Login</h1>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => signIn("google")}
        >
          Sign in with Google Workspace
        </button>
      </div>
    </main>
  );
}
