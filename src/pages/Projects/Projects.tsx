import ProjectsSection from "./components/ProjectsSection";

export default function ProjectsPage() {
  return (
    <main>
      <section>
        <h1>
          My <span className="purple">Best</span> Creation
        </h1>
        <p>
          Designing and Developing Robust and Stylish Web Applications for a
          Decade and Counting
        </p>
      </section>
      <ProjectsSection />
    </main>
  );
}
