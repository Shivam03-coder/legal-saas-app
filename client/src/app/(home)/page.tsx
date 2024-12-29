import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Header from "./_components/header";
import Main from "./_components/main";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Wrapper for the entire page */}
      <div className="relative mx-auto flex h-full w-[90%] flex-col space-y-7">
        <Header />
        <div className="pt-16">
          <Main />
        </div>
      </div>
    </main>
  );
}
