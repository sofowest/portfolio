interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
}

const baseClasses = "bg-[#1e2358] text-white rounded-lg  w-full my-2 shadow-lg shadow-[#2b3280]";
function Project ({title, description, imageUrl}: ProjectProps) {
  return (
    <div className={baseClasses}>
      <section className="flex justify-center">
        <img src={imageUrl} alt={`${title} project image`} className="w-full h-full rounded-lg"/>
      </section>
      <section className="mt-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-2 text-sm">{description}</p>
      </section>
    </div>
  );

}

export default Project;