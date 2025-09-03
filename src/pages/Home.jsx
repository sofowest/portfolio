function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">

      <section>
        <article className="mb-4 rounded-3xl max-w-50 max-h-50">
          <img src="/imgs/profile.jpg" alt="Leandro Gómez" className="w-50 h-50" />
        </article>
        <h1 className="text-4xl font-bold">Leandro Gómez - Developer</h1>
        <p className="mt-4 text-lg">I'm a passionate developer.</p>
      </section>

      <h2>My stack</h2>
      <ul className="list-disc list-inside">
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Figma</li>
        <li>Tailwind CSS</li>
        <li>Git</li>
      </ul>

      <h2 className="text-3xl font-bold">Projects</h2>
      <p>Here are a few projects I've worked on:</p>
      <ul className="p-10">
        <li className="bg-blue-300 p-4 rounded-lg w-150">
          <h3 className="text-2xl font-bold">Project 1</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti maiores praesentium cumque pariatur culpa soluta voluptatum repellendus eius, quod modi consequatur nesciunt sequi impedit iusto inventore quibusdam voluptas exercitationem non.</p>
        </li>
        <li className="bg-blue-300 p-4 rounded-lg w-150">
          <h3 className="text-2xl font-bold">Project 2</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti maiores praesentium cumque pariatur culpa soluta voluptatum repellendus eius, quod modi consequatur nesciunt sequi impedit iusto inventore quibusdam voluptas exercitationem non.</p>
        </li>
        <li className="bg-blue-300 p-4 rounded-lg w-150">
          <h3 className="text-2xl font-bold">Project 3</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti maiores praesentium cumque pariatur culpa soluta voluptatum repellendus eius, quod modi consequatur nesciunt sequi impedit iusto inventore quibusdam voluptas exercitationem non.</p>
        </li>
      </ul>

      <h2 className="text-3xl font-bold">Contact Me</h2>
      <p>If you'd like to get in touch, feel free to reach out!</p>
      <ul>
        <li>Email: leandro@example.com</li>
        <li>LinkedIn: linkedin.com/in/leandro</li>
        <li>GitHub: github.com/leandro</li>
      </ul>
    </div>
  );
}

export default Home;
