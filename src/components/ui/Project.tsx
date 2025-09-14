interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
}

const baseClasses = "bg-[#1e2358] text-white rounded-xl  w-full my-2 shadow-lg shadow-[#2b3280] h-100 p-10 flex flex-col md:flex-row gap-4";
function Project ({title, description, imageUrl}: ProjectProps) {
  return (
    <div className={baseClasses}>
      <section className="flex justify-center">
        <img src={imageUrl} alt={`${title} project image`} className="w-[90%] h-full rounded-lg"/>
      </section>
      <section className="mt-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-2 text-sm">{description}</p>
      </section>
    </div>
  );

}

export default Project;