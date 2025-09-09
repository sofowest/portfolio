import React from "react";
import Project from "../components/ui/Project.tsx";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 text-white w-full bg-[#1e1a4d] shadow-2xl shadow-blue-900 overflow-hidden">

      <article>
        <h1>Hey, I'm Sofo</h1>
        <p>I build modern, <span>mobile-first</span> websites that connect ideas <span>with people.</span></p>
        <section>

        </section>
      </article>

      <section className="h-[110vh] p-5">
        <h2 className="text-4xl font-bold mb-6 text-center">Proyectos</h2>
        <Project title="Proyecto Luz Y Vida" description="Proyecto de sitio web para una organización sin fines de lucro que brinda apoyo a personas en situación de calle, ofreciendo servicios como alimentación, alojamiento temporal y programas de reintegración social." imageUrl="/imgs/project-luzyvida.png" />
      </section>
    </div>
  );
}

export default Home;
