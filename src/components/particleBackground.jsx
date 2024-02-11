"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import particlesOptions from '../config/particle.json'

import { loadSlim } from "@tsparticles/slim";

const ParticleBackgound = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };


  if (init) {
    return (
      <Particles
        className="z-[-50] absolute top-0 left-0 h-[100vh] w-[100vw] "
        particlesLoaded={particlesLoaded}
        options={particlesOptions}
      />
    );
  }

  return <></>;
};

export default ParticleBackgound;
