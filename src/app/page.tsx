import Image from "next/image";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="w-full h-auto bg-neutral-900">
      <Hero />
      <Projects />
    </div>
  );
}
