
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useCallback, useMemo, useState } from "react";
import { loadAll } from "@tsparticles/all";
import React from 'react'

const Particle = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };


  return (
    <div>
      <Particles
        id="particles"
        particlesLoaded={particlesLoaded}
        style={{ zIndex: -1 }}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
            },
            modes: {
              push: {
                distance: 50,
                duration: 100,
              },
              repulse: {
                distance: 100,
                duration: 1,
                speed: 0.2
              },
              grab: {
                distance: 150,
              },
            },
          },
          particles: {
            color: {
              value: "#FFFFFF40",
            },
            links: {
              color: "#FFFFFF",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 250,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  )
}

export default Particle
