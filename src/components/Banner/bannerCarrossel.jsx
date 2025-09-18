import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight, FaHeart, FaBrain, FaUsers } from "react-icons/fa";
import "./bannerCarrossel.css";

const slides = [
  { 
    id: 1, 
    img: "/images/banner-educacao-emocional.jpg", 
    title: "ABC das Emoções", 
    subtitle: "Desenvolvendo inteligência emocional desde a infância", 
    //btnText: "Conheça o Programa", 
   //btnLink: "#programa",
    //icon: <FaHeart className="banner-icon text-pink-500" />
  },
];

// Setas customizadas
function NextArrow({ onClick }) {
  return (
    <div className="banner-arrow banner-arrow-next" onClick={onClick}>
      <FaArrowRight className="banner-arrow-icon" />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div className="banner-arrow banner-arrow-prev" onClick={onClick}>
      <FaArrowLeft className="banner-arrow-icon" />
    </div>
  );
}

export default function BannerCarrossel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: true,
    adaptiveHeight: true,
    cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  };

  return (
    <div className="banner-container">
      <Slider {...settings}>
        {slides.map(slide => (
          <div key={slide.id} className="banner-slide">
            {/* Overlay de fundo */}
            {slide.isVideo ? (
              <video 
                src={slide.img} 
                autoPlay 
                loop 
                muted 
                playsInline
                className="banner-media"
              />
            ) : (
              <img 
                src={slide.img} 
                alt={slide.title} 
                className="banner-media"
              />
            )}
            
            {/* Overlay gradiente */}
            <div className="banner-overlay"></div>
            
            {/* Conteúdo do slide */}
            <div className="banner-content">
              <div className="banner-content-inner">
                {/* Ícone */}
                {slide.icon}
                
                {/* Título */}
                <h2 className="banner-title">
                  {slide.title}
                </h2>
                
                {/* Subtítulo */}
                <p className="banner-subtitle">
                  {slide.subtitle}
                </p>
                
                {/* Botão
                <a 
                  href={slide.btnLink} 
                  className="banner-button"
                >
                  {slide.btnText}
                </a>*/}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}