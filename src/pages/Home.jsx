

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">Leandro Gómez - Developer</h1>
      <p className="mt-4 text-lg">I'm a passionate developer.</p>

      <h2>My stack</h2>
      <ul className="list-disc list-inside">
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
      </ul>

      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, feel free to reach out!</p>
    </div>
  );
}

export default Home;
