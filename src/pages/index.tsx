import { Rubik } from "next/font/google";
import HeaderSection from "@/components/HeaderSection";
import Map from "@/components/Map";

const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen relative flex-col items-center justify-between text-slate-800  ${rubik.className}`}
    >
      <HeaderSection />
      <Map />
    </main>
  );
}
