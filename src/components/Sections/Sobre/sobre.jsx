import React from "react";
import Oquee from "../../../assets/Oquee.svg";
import laranja from "../../../assets/laranja.svg";
import "./sobre.css";
import SURPRESA from "../../../assets/SURPRESA.png";

function Sobre() {
  return (
    <section id="sobre" className="home-section about-section">
      <div className="container sobre">
        {/* Título com imagem centralizada */}
        <div id="tituloOQUEE" className="text-center mb-8">
          <img 
            src={Oquee} 
            alt="O que é o ABC das Emoções" 
            className="mx-auto"
          />
        </div>
        
        {/* Citação bíblica
        <div className="text-center citacao-biblica">
          <p className="texto-citacao">
            "De tudo o que se deve guardar, guarde bem o seu coração, porque dele procedem as fontes da vida."
          </p>
          <p className="versiculo">Provérbios 4:23</p>
        </div>*/}

        {/* Container principal: Mascote à esquerda e Texto à direita */}
        <div className="conteudo-principal">
          {/* Mascote Surpresa (lado esquerdo) */}
          <div className="mascote-container">
            <img 
              src={SURPRESA} 
              alt="Mascote Surpresa" 
              className="mascote-surpresa"
            />
          </div>

          {/* Texto descritivo (lado direito) */}
          <div className="texto-container">
            <p className="texto-descritivo">
              O ABC das Emoções é um programa inovador de alfabetização emocional infantil que ensina as crianças, desde a primeira infância, a identificar, nomear, verbalizar e lidar com suas emoções, com leveza, intencionalidade e acolhimento, por meio de uma metodologia encantadora, lúdica e prazerosa.
            </p>
          </div>
        </div>

        {/* Botão "Venha conhecer" */}
        <div className="text-center mb-8">
          <button className="btn-venha-conhecer">
            Venha conhecer
          </button>
        </div>

        {/* Imagem decorativa laranja */}
        <div id="imgSURPRESA" className="mt-8">
          <img 
            src={laranja} 
            alt="Arte laranja decorativa" 
            className="about-image mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Sobre;