import React, { useState, useEffect } from 'react';
import './metodologia.css';
import NossasMetodologias from '../../../assets/NossasMetodologias.svg';

const Metodologia = () => {
  const [activeEncounter, setActiveEncounter] = useState(null);

  const encounters = [
    {
      id: 1,
      title: "Roda das Emoções",
      emoji: "🎭",
      description: "Momento lúdico de escuta e partilha, onde crianças e educadoras falam e sentem com acolhimento e respeito.",
      color: "#E91E63"
    },
    {
      id: 2,
      title: "Emoções em Ação",
      emoji: "🎵",
      description: "Histórias encantadoras e músicas inspiradoras que conectam as emoções ao ritmo da infância.",
      color: "#9C27B0"
    },
    {
      id: 3,
      title: "Laboratório das Emoções",
      emoji: "🔬",
      description: "Espaço de descobertas mágicas onde ciência e encanto ajudam as crianças a sentir e compreender as emoções.",
      color: "#2196F3"
    },
    {
      id: 4,
      title: "Ateliê de Artes",
      emoji: "🎨",
      description: "Convite para as crianças expressarem sentimentos com cores e formas, estimulando criatividade e imaginação.",
      color: "#00BCD4"
    },
    {
      id: 5,
      title: "Cérebro em Movimento",
      emoji: "🧠",
      description: "Jogos pedagógicos que combinam raciocínio, atenção, memória e emoção em momentos divertidos.",
      color: "#4CAF50"
    },
    {
      id: 6,
      title: "Brincar e Sentir",
      emoji: "🏃‍♀️",
      description: "Atividades ao ar livre com brincadeiras dirigidas para reconhecer e expressar emoções em movimento.",
      color: "#FF9800"
    },
    {
      id: 7,
      title: "Acomodando as Emoções",
      emoji: "🧘‍♀️",
      description: "Momento de calma e autocontrole onde as crianças aprendem a respirar, relaxar e encontrar equilíbrio.",
      color: "#795548"
    },
    {
      id: 8,
      title: "Momento da Gratidão",
      emoji: "🙏",
      description: "Encontro especial para aprender a reconhecer e valorizar os presentes da vida, despertando o hábito da gratidão.",
      color: "#607D8B"
    }
  ];

  const toggleEncounter = (id) => {
    if (activeEncounter === id) {
      setActiveEncounter(null);
    } else {
      setActiveEncounter(id);
    }
  };

  return (
    <div className="abc-emocoes-app">
      <BackgroundShapes />
      
      <div className="container">
        <Header />
        
        <div className="timeline">
          <TimelinePath />
          <DashedOverlay />
          <FloatingIcons />
          
          {encounters.map((encounter, index) => (
            <Encounter 
              key={encounter.id}
              data={encounter}
              index={index}
              isActive={activeEncounter === encounter.id}
              onToggle={toggleEncounter}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const BackgroundShapes = () => {
  return (
    <div className="background-shapes">
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      <div className="shape shape-3"></div>
      <div className="shape shape-4"></div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <img 
        src={NossasMetodologias} 
        alt="Nossas Metodologias" 
      />
    </div>
  );
};

const TimelinePath = () => {
  return (
    <div className="timeline-path">
      <div className="curved-line line-1"></div>
      <div className="curved-line line-2"></div>
      <div className="curved-line line-3"></div>
      <div className="curved-line line-4"></div>
      <div className="curved-line line-5"></div>
      <div className="curved-line line-6"></div>
      <div className="curved-line line-7"></div>
    </div>
  );
};

const DashedOverlay = () => {
  return (
    <div className="dashed-overlay">
      <div className="dashed-line dash-1"></div>
      <div className="dashed-line dash-2"></div>
      <div className="dashed-line dash-3"></div>
      <div className="dashed-line dash-4"></div>
      <div className="dashed-line dash-5"></div>
      <div className="dashed-line dash-6"></div>
      <div className="dashed-line dash-7"></div>
    </div>
  );
};

const FloatingIcons = () => {
  return (
    <>
      <div className="floating-icons icon-1">🎨</div>
      <div className="floating-icons icon-2">🧠</div>
      <div className="floating-icons icon-3">❤️</div>
      <div className="floating-icons icon-4">🌈</div>
    </>
  );
};

const Encounter = ({ data, index, isActive, onToggle }) => {
  return (
    <div 
      className={`encounter ${index % 2 === 0 ? '' : 'even'} ${isActive ? 'active' : ''}`}
      style={{ animationDelay: `${0.3 + index * 0.2}s` }}
    >
      <div 
        className="encounter-badge"
        style={{ backgroundColor: data.color }}
        onClick={() => onToggle(data.id)}
      >
        Encontro {data.id}
      </div>
      
      <div 
        className="encounter-content"
        style={{ borderLeftColor: data.color }}
        onClick={() => onToggle(data.id)}
      >
        <h3 className="encounter-title">
          <span className="emoji">{data.emoji}</span>
          {data.title}
        </h3>
        
        <div className={`encounter-description ${isActive ? 'expanded' : ''}`}>
          <p>{data.description}</p>
          
          {/* Conteúdo adicional que aparece quando expandido */}
          {isActive && (
            <div className="additional-content">
              <div className="activity-suggestion">
                <h4>Sugestão de Atividade:</h4>
                <p>Realize uma dinâmica em círculo onde cada criança compartilha como está se sentindo hoje.</p>
              </div>
              
              <div className="materials">
                <h4>Materiais Sugeridos:</h4>
                <ul>
                  <li>Almofadas confortáveis</li>
                  <li>Roda de emoções ilustrada</li>
                  <li>Música relaxante</li>
                </ul>
              </div>
            </div>
          )}
        </div>
        
        <div className="expand-indicator">
          {isActive ? '▲' : '▼'}
        </div>
      </div>
    </div>
  );
};

export default Metodologia;