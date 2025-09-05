function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 text-white w-[800px] bg-indigo-950">

      <section className="text-center mb-8">
        {/* Centrar la imagen horizontalmente */}
        <article className="mb-4 flex justify-center items-center">
          <img src="/imgs/profile.jpg" alt="Leandro Gómez" className="w-32 h-32 rounded-full object-cover" />
        </article>
        <h1 className="text-4xl font-bold">Leandro Gómez - Developer</h1>
        <p className="mt-4 text-lg">I'm a passionate developer.</p>
      </section>

      <h2 className="text-3xl font-bold">My stack</h2>
      <ul className="list-disc list-inside">
        <li className="list-none">JavaScript</li>
        <li className="list-none">React.js</li>
        <li className="list-none">Node.js</li>
        <li className="list-none">Figma</li>
        <li className="list-none">Tailwind CSS</li>
        <li className="list-none">Git</li>
      </ul>

      <h2 className="text-3xl font-bold">Projects</h2>
      <p>Here are a few projects I've worked on:</p>
      <ul className="p-10">
        <li className="bg-blue-900 p-4 rounded-lg w-150 my-5">
          <h3 className="text-2xl font-bold">Hogar Luz Y Vida</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti maiores praesentium cumque pariatur culpa soluta voluptatum repellendus eius, quod modi consequatur nesciunt sequi impedit iusto inventore quibusdam voluptas exercitationem non.</p>
        </li>
        <li className="bg-blue-900 p-4 rounded-lg w-150 my-5">
          <h3 className="text-2xl font-bold">Project 2</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti maiores praesentium cumque pariatur culpa soluta voluptatum repellendus eius, quod modi consequatur nesciunt sequi impedit iusto inventore quibusdam voluptas exercitationem non.</p>
        </li>
        <li className="bg-blue-900 p-4 rounded-lg w-150 my-5">
          <h3 className="text-2xl font-bold">Project 3</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti maiores praesentium cumque pariatur culpa soluta voluptatum repellendus eius, quod modi consequatur nesciunt sequi impedit iusto inventore quibusdam voluptas exercitationem non.</p>
        </li>
      </ul>

      <h2 className="text-3xl font-bold">Contact Me</h2>
      <ul className="flex gap-6 mt-4">
        <li>
          <a href="mailto:leandrogoezmdev@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
            {/* Email icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white hover:text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="2" />
              <path d="M3 7l9 6 9-6" strokeWidth="2" />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/leandro-g%C3%B3mez-739a92334/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            {/* LinkedIn icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white hover:text-blue-700" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.045 0 3.607 2.006 3.607 4.617v5.579z"/>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://github.com/sofowest" target="_blank" rel="noopener noreferrer" title="GitHub">
            {/* GitHub icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white hover:text-blue-700" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Home;
