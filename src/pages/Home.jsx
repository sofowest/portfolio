import React from "react";
import Project from "../components/ui/Project.tsx";
import SocialIcon from "../components/ui/SocialIcon.tsx";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 text-white overflow-hidden w-full bg-[var(--bckg-gray)] lg:shadow-[0px_0px_100px_5px_#522b82] lg:w-[800px] xl:w-[1080px]">

      <article className="flex justify-center items-center text-center h-[100vh] flex-col text-[var(--extra-light-purple)]">
        <h1 className="p-2 text-4xl font-extrabold lg:text-5xl lg:p-3 xl:text-6xl"><span className="text-shadow-light">Hey, I'm </span><span className="text-[var(--light-purple)] text-shadow-name">Leandro</span></h1>
        <h2 className="p-0 text-2xl font-bold text-shadow-light lg:text-3xl xl:text-4xl">( alias <span className="text-[var(--light-purple)] font-bold text-shadow-name">Sofo</span> )</h2>
        <p className="p-2 py-10 font-medium text-lg lg:text-xl lg:py-6 xl:text-2xl">I build modern, <span className="text-[var(--light-purple)] text-shadow-[0_0_10px_rgba(128,63,207,0.5)]"><b>mobile-first</b></span><br /> websites that connect ideas<br /> <span className="text-[var(--light-purple)] text-shadow-[0_0_10px_rgba(128,63,207,0.5)]"><b>with people.</b></span></p>
        <section className="flex space-x-4 xl:space-x-6">
          <SocialIcon url="https://github.com/sofowest" icon="github" />
          <SocialIcon url="https://www.linkedin.com/in/leandro-gómez-739a92334" icon="linkedin" />
          <SocialIcon url="https://wa.me/59891066507" icon="whatsapp" />
          <SocialIcon url="mailto:leandrogomezmdev@gmail.com" icon="email" />
        </section>
      </article>

      <article className="h-[110vh] p-5">
        <h2 className="text-4xl font-bold mb-6 text-center">Proyectos</h2>
      </article>
    </div>
  );
}

export default Home;
