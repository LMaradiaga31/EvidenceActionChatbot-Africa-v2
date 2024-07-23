// app/page.tsx
"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Header from "@/app/components/header";
import ChatSection from "./components/chat-section";
import Loading from "@/app/components/Loading"; // Ensure correct import path

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "unauthenticated") {
    return null; // This will be handled by the useEffect
  }

  return (
    <main className="h-full w-full flex justify-center items-center background-gradient">
      <div className="space-y-2 lg:space-y-10 w-[90%] lg:w-[60rem]">
        <Header />
        <div className="h-[65vh] flex">
          <ChatSection />
        </div>
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    </main>
  );
}
