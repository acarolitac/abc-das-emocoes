// src/components/AOSInit/AOSInit.jsx
import { useEffect } from 'react';
import AOS from 'aos';

const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Duração da animação em ms
      easing: 'ease-in-out', // Curva de animação
      once: true, // Anima apenas uma vez
      offset: 100, // Distância do topo para trigger (em pixels)
      delay: 100, // Delay inicial para as animações
    });
  }, []);

  return null;
};

export default AOSInit;