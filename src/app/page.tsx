import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <main className="w-full h-auto bg-neutral-900">
      <Hero />
      <Projects />
      <Blog />
    </main>
  );
}
