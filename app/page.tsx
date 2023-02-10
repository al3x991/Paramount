import Image from "next/image";
import Link from "next/link";
import { Button } from "./components/button";
export default async function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p>test</p>
          <Button size="sm" variant="default">
            Click Me!
          </Button>
        </div>
      </main>
    </>
  );
}
