import { lazy, Suspense, useMemo } from "react";
import TerminalNavbar from "../components/nav/TerminalNavbar";
import ScrollProgress from "../components/layout/ScrollProgress";
import LoadingScreen from "../components/layout/LoadingScreen";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import ExperienceSection from "../components/sections/ExperienceSection";
import Education from "../components/sections/Education";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import GitHubHeatmap from "../components/sections/GitHubHeatmap";
import DevOpsSection from "../components/sections/DevOpsSection";
import { navItems } from "../data/site";
import { useScrollSpy } from "../hooks/useScrollSpy";

const Projects = lazy(() => import("../components/sections/Projects"));

export default function Home() {
  const sectionIds = useMemo(() => navItems.map((n) => n.id), []);
  const activeId = useScrollSpy(sectionIds);

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <TerminalNavbar activeId={activeId} />
      <main className="min-h-screen bg-bg">
        <Hero />
        <About />
        <GitHubHeatmap />
        <Skills />
        <Suspense
          fallback={
            <div className="mx-auto max-w-6xl px-4 py-16 text-center font-mono text-sm text-muted">
              Loading projects…
            </div>
          }
        >
          <Projects />
        </Suspense>
        <ExperienceSection />
        <DevOpsSection />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
