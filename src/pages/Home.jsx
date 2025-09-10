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

      <article className="flex justify-center items-center text-center h-[100vh] flex-col">
        <h1 className="p-2 text-5xl font-extrabold leading-15 lg:text-5xl lg:p-3 xl:text-6xl">
          <span>Hey, I'm <br /></span>
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
      </article>

      <article className="h-[70vh] p-5 flex flex-col mt-10 gap-7 items-center justify-center">
        <h2 className="text-4xl font-bold text-center">About Me</h2>
        <section className="justify-center items-center flex">
          <img src="./imgs/profile.jpg" alt="foto de " className="w-[70vw] max-w-[380px] h-auto md:w-[300px] rounded-2xl" />
        </section>
        <section className="w-[70vw] text-left mb-10">
          <p className="text-md">sakjsas d das hdgs jdsajd gas h fd jsd g sa dkgas jd a s jdgas hdsah dkjgs djka sda sgdjs a  ds  hsagdkhasd g gg dshj s sadhj as sahj as  ds dshd</p>
        </section>
      </article>

      <article className="h-[130vh] p-5 flex flex-col mt-10 gap-7 items-center justify-center">
        <h2 className="text-4xl font-bold text-center">About Me</h2>
        <section className="justify-center items-center flex">
          <img src="./imgs/profile.jpg" alt="foto de " className="w-[400px] h-auto rounded-2xl" />
        </section>
        <section className="px-8 justify-center text-justify">
          <p className="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis possimus minima laborum eveniet atque dolor quia inventore minus ducimus ipsam blanditiis, doloribus veritatis explicabo commodi eaque corrupti in. Officiis, aliquid.</p>
        </section>
      </article>


    </div>
  );
}

export default Home;
