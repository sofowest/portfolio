

const baseClasses = "bg-[#1e2358] text-white font-jetbrains-mono p-4 rounded-lg shadow-lg shadow-red-100 w-full my-2";
const title = "Luz Y Vida";
const description = "Proyecto de sitio web para una organización sin fines de lucro que brinda apoyo a personas en situación de calle, ofreciendo servicios como alimentación, alojamiento temporal y programas de reintegración social.";

function Project () {
  return (
    <div className={baseClasses}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2">{description}</p>
      <section className="mt-4">
        <img src="/imgs/project-luzyvida.png" alt="Project Luz Y Vida" />
      </section>
    </div>
  );

}

export default Project;