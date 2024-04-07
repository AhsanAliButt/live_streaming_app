import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-4">
      {/* <p className="text-red-500 font-bold">Hellow Mr lova lova</p> */}
      <Button>Hellow world</Button>
      <UserButton afterSignOutUrl="/"></UserButton>
    </main>
  );
}
