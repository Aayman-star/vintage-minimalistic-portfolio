import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <div className="w-full h-auto bg-neutral-900">
      <Hero />
      <Projects />
      <Blog />
    </div>
  );
}
