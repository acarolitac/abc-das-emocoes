import React from "react";
import "./depoimentos.css";

function Depoimentos() {
  return (
    <>
      {/* Reviews Section */}
      <section id="reviews" className="home-section reviews-section">
        <div className="container">
          <h2 className="section-title">O Que Dizem</h2>
          <div className="reviews-grid">
            <div className="review-card">
              <div className="review-header">
                <div className="review-avatar"></div>
                <div className="review-info">
                  <h4 className="review-name">Maria Silva</h4>
                  <p className="review-role">Mãe do João, 6 anos</p>
                </div>
              </div>
              <p className="review-text">
                "O ABC das Emoções transformou a forma como meu filho lida com suas emoções. 
                Ele agora consegue me dizer quando está triste ou frustrado!"
              </p>
            </div>
            <div className="review-card">
              <div className="review-header">
                <div className="review-avatar"></div>
                <div className="review-info">
                  <h4 className="review-name">Pedro Costa</h4>
                  <p className="review-role">Professor</p>
                </div>
              </div>
              <p className="review-text">
                "Utilizo em sala de aula e os resultados são incríveis. As crianças 
                desenvolveram uma inteligência emocional impressionante."
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Depoimentos;
        