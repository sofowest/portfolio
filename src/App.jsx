import React from 'react'
import './global.css'
import Home from './pages/Home.jsx'

// Estado para controlar el flicker en el fondo
import { useState } from 'react';

function useFlickerTrigger() {
  const [flickerBg, setFlickerBg] = useState(false);
  const [transparentBg, setTransparentBg] = useState(false);
  // Recibe el trigger desde Home y la duración
  const triggerFlicker = (duration = 900) => {
    setFlickerBg(true);
    setTransparentBg(false);
    setTimeout(() => {
      setFlickerBg(false);
      setTransparentBg(true);
    }, duration);
  };
  return [flickerBg, transparentBg, triggerFlicker];
}


function App() {
  const [flickerBg, transparentBg, triggerFlicker] = useFlickerTrigger();

  // Estado para saber si el nombre está en flicker
  const [isNameFlicker, setIsNameFlicker] = useState(false);

  return (
    <div className='relative'>
      <main className='min-h-screen flex items-center justify-center bg-[var(--dark-purple)]'>
        <Home
          onFlickerBg={() => triggerFlicker(640)}
          setIsNameFlicker={setIsNameFlicker}
        />
      </main>
      <div
        className={"absolute top-0 left-0 w-full h-full z-10 pointer-events-none transition-colors duration-200 "}
        style={{background: isNameFlicker ? "transparent" : "var(--bckg-gray-inicio)"}}
      >
      </div>
    </div>
  )
}

export default App
