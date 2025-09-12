import React, {useEffect, useState} from "react";
import Project from "../components/ui/Project.tsx";
import SocialIcon from "../components/ui/SocialIcon.tsx";

function Home({ onFlickerBg, setIsNameFlicker }) {

  const [displayedName, setDisplayedName] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullName = "Leandro";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedName(fullName.slice(0, i + 1));
      i++;
      if (i === fullName.length) clearInterval(interval);
    }, 150); // velocidad de escritura
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 600);
    return () => clearInterval(cursorInterval);
  }, []);

  // Animación de titileo para el nombre
  const [flicker, setFlicker] = useState(false);
  useEffect(() => {
    if (displayedName === fullName) {
      // Flicker en el nombre (varias veces)
      let flickerCount = 0;
      const flickerInterval = setInterval(() => {
        setFlicker((prev) => !prev);
        if (setIsNameFlicker) setIsNameFlicker(flickerCount % 2 === 0);
        flickerCount++;
        if (flickerCount > 8) {
          if (setIsNameFlicker) setIsNameFlicker(false);
          clearInterval(flickerInterval);
        }
      }, 80);
      // Flicker en el fondo (sincronizado)
      if (onFlickerBg) {
        onFlickerBg(8 * 80);
      }
      return () => clearInterval(flickerInterval);
    } else {
      setFlicker(false);
      if (setIsNameFlicker) setIsNameFlicker(false);
    }
  }, [displayedName, fullName]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 overflow-hidden w-full bg-[var(--bckg-gray)] lg:shadow-[0px_0px_100px_5px_#522b82] lg:w-[800px] xl:w-[1080px]">

      <article className="flex justify-center items-center text-center h-[100svh] flex-col relative">
        <h1 className="p-2 text-5xl font-extrabold leading-15 lg:text-5xl lg:p-3 xl:text-6xl">
          <span>Hey, I'm <br className="md:hidden" /></span>
          <span className={"text-[var(--light-purple)] " + (flicker ? "flicker" : "")}>{displayedName}
            <span className={"inline-block w-1 ml-1 shadow-[0_0_8px_rgba(212,220,255,0.5)] transition-shadow duration-200" + (showCursor ? " bg-[var(--extra-light-purple)]" : " bg-transparent shadow-none")}
              style={{height: '1em', verticalAlign: 'middle', transition: 'background 0.2s'}}></span>
          </span>
        </h1>
        <h2 className="p-0 text-3xl font-bold lg:text-3xl xl:text-4xl">( alias <span className="text-[var(--light-purple)] font-bold">Sofo</span> )</h2>
        <p className="p-2 py-10 font-medium text-xl lg:text-xl lg:py-6 xl:text-2xl">I build modern, <span className="text-[var(--light-purple)] "><b>mobile-first</b></span><br /> websites that connect ideas<br /> <span className="text-[var(--light-purple)]"><b>with people.</b></span></p>
        <section className="flex space-x-4 xl:space-x-6">
          <SocialIcon url="https://github.com/sofowest" icon="github" />
          <SocialIcon url="https://www.linkedin.com/in/leandro-gómez-739a92334" icon="linkedin" />
          <SocialIcon url="https://wa.me/59891066507" icon="whatsapp" />
          <SocialIcon url="mailto:leandrogomezmdev@gmail.com" icon="email" />
        </section>
        <section className="z-10 absolute bottom-0 text-[var(--light-purple)] w-15 h-23 bg-[var(--dark-purple)] rounded-t-full flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-full w-13 h-13 animate-bounce mt-2">
            <path d="M9 13L12 16M12 16L15 13M12 16V8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-shadow-2xs text-shadow-amber-50"></path>
          </svg>
        </section>
      </article>

      <article className="h-[1000px] w-[100vw] flex flex-col gap-10 items-center justify-center bg-[var(--dark-purple)] back">
        <h2 className="text-5xl font-extrabold text-center">About Me</h2>
        <section className="justify-center items-center flex">
          <img src="./imgs/profile.jpg" alt="foto de " className="w-[90vw] h-auto md:w-[300px] rounded-2xl" />
        </section>
        <section className="w-[90vw] text-left mb-10 gap-4 flex flex-col">
          {/* <p className="text-md">Empecé a programar a los 7 años y desde entonces he estado en un viaje de aprendizaje constante. He trabajado con una variedad de tecnologías y lenguajes de programación, y siempre estoy buscando nuevas formas de mejorar mis habilidades. Me podrás encontrar siempre programando algo nuevo, o mejorandolo, mientras escucho mi playlist de boombap o debates de temas interesantes de fondo.</p> */}
          <p className="text-base">At the age of 7, I started programming and have been on a constant learning journey ever since.</p>
          <p className="text-base">I have worked with a variety of technologies and programming languages, and I am always looking for new ways to improve my skills. You can always find me programming something new or improving it while listening to my boombap playlist or debates on interesting topics in the background.</p>
        </section>
      </article>

      <article className="h-[130vh] p-5 flex flex-col mt-10 gap-7 items-center justify-center">
        <h2 className="text-4xl font-bold text-center">Projects</h2>
        <p className="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis possimus minima laborum eveniet atque dolor quia inventore minus ducimus ipsam blanditiis, doloribus veritatis explicabo commodi eaque corrupti in. Officiis, aliquid.</p>
      </article>


    </div>
  );
}

export default Home;
