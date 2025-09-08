import React from "react";
import Project from "../components/ui/Project.tsx";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 text-white w-full bg-[#1e1a4d] shadow-2xl shadow-blue-900 overflow-hidden">

      <section id="inicio" className="text-center mb-8 h-[100vh]">
        {/* Centrar vertical y horizontalmente el contenido */}
        <div className="flex flex-col justify-center items-center h-full">
          <article className="mb-4 flex justify-center items-center ">
            <img src="/imgs/profile.jpg" alt="Leandro Gómez" className="w-32 h-32 rounded-full object-cover" />
          </article>
          <h1 className="text-4xl font-bold">Leandro Gómez</h1>
          <h2 className="text-2xl font-bold">Web Developer</h2>
        </div>
      </section>

      <section className="h-[110vh] p-5">
        <h2 className="text-4xl font-bold mb-6 text-center">Proyectos</h2>
        <Project title="Proyecto Luz Y Vida" description="Proyecto de sitio web para una organización sin fines de lucro que brinda apoyo a personas en situación de calle, ofreciendo servicios como alimentación, alojamiento temporal y programas de reintegración social." imageUrl="/imgs/project-luzyvida.png" />
      </section>
    </div>
  );
}

export default Home;
