import React, { useState } from "react";
import "./pilares.css";
import GRATIDAO from "../../../assets/GRATIDAO.png";
import Titulo2Pilares from "../../../assets/Titulo2Pilares.png";

export default function Pilares() {
  const [modalIndex, setModalIndex] = useState(null);

  const pilares = [
    {
      nome: "PSICOLOGIA POSITIVA",
      cor: "#FE3B5B",
      texto: "A Psicologia Positiva busca desenvolver forças pessoais, bem-estar e resiliência, focando no que temos de melhor.",
    },
    {
      nome: "EDUCAÇÃO EMOCIONAL",
      cor: "#924094", 
      texto: "A Educação Emocional trabalha autoconhecimento, empatia e autorregulação, fortalecendo a saúde mental.",
    },
    {
      nome: "PEDAGOGIA AFETIVA",
      cor: "#39AD7C",
      texto: "A Pedagogia Afetiva coloca o vínculo, o respeito e a empatia no centro da aprendizagem.",
    },
    {
      nome: "ARTE – EDUCAÇÃO",
      cor: "#E8A935",
      texto: "A Arte–Educação promove criatividade, expressão e aprendizado lúdico como ferramentas essenciais no desenvolvimento.",
    },
    {
      nome: "NEUROCIÊNCIA DA EDUCAÇÃO",
      cor: "#6A4BEF",
      texto: "A Neurociência aplicada à educação estuda como o cérebro aprende, ajudando a criar práticas pedagógicas mais eficazes.",
    },
  ];

  return (
    <section id="pilares" className="bg-[#545391] min-h-screen flex items-center justify-center text-white relative overflow-hidden px-6 py-12">
      <div className="max-w-6xl w-full">
        {/* Título centralizado - AUMENTADO
        <div className="flex justify-center mb-16">
          <img
            src={Titulo2Pilares}
            alt="Nossos Pilares"
            className="max-w-4xl w-full" // MUDEI para max-w-4xl (bem maior)
          />
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Coluna Esquerda: Pilares em escada */}
          <div className="pilares-container">
            {pilares.map((pilar, index) => (
              <div key={index} className={`pilar-item pilar-${index + 1}`}>
                <button
                  className="pilar-button"
                  style={{ backgroundColor: pilar.cor }}
                  onClick={() => setModalIndex(index)}
                >
                  {pilar.nome}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

                {/* Coluna Direita: Mascote */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={GRATIDAO}
              alt="Mascote Gratidão"
              className="mascote-image"
            />
          </div>

      {/* Modais */}
      {pilares.map((pilar, index) => (
        <div
          key={index}
          className={`modal ${modalIndex === index ? 'modal-open' : ''}`}
        >
          <div className="modal-content">
            <h3>{pilar.nome}</h3>
            <p>{pilar.texto}</p>
            <button
              className="modal-close"
              onClick={() => setModalIndex(null)}
            >
              Fechar
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}