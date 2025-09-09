import React from "react";
import Project from "../components/ui/Project.tsx";
import SocialIcon from "../components/ui/SocialIcon.tsx";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 text-white overflow-hidden w-full bg-[var(--bckg-gray)] shadow-2xl">

      <article className="flex justify-center items-center text-center h-[100vh] flex-col">
        <h1 className="p-2 text-4xl font-extrabold">Hey, I'm <span className="text-[var(--light-purple)]">Leandro</span></h1>
        <h2 className="p-0 text-2xl font-medium">( alias <span className="text-[var(--light-purple)] font-bold">Sofo</span> )</h2>
        <p className="p-2 py-10 font-medium">I build modern, <span className="text-[var(--light-purple)] font-bold">mobile-first</span><br /> websites that connect ideas<br /> <span className="text-[var(--light-purple)] font-bold">with people.</span></p>
        <section className="p-4">
          <SocialIcon />
        </section>
      </article>

      <article className="h-[110vh] p-5">
        <h2 className="text-4xl font-bold mb-6 text-center">Proyectos</h2>
      </article>
    </div>
  );
}

export default Home;
