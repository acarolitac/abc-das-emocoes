import React from 'react';
import noticiasTitulo from "../../../assets/noticiasTitulo.png";
import noticiasIMG from "../../../assets/noticiasIMG.png";
import "./noticiasViolencia.css";

function NoticiasViolencia() {
    return (
<section className="noticias-violencia-section bg-gray-50 py-16 px-4">
    <div className="container noticiasViolencia">
        <div className="text-center mb-12">
            <img 
                src={noticiasTitulo} 
                alt="Por que é importante nas Escolas?" 
                className="mx-auto max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl"
            />
        </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="text-center mb-12">
            <img 
                src={noticiasIMG} 
                alt="Notícias de violência nas escolas" 
                className="mx-auto max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl"
            />
        </div>
                </div>

                {/* Botão Ver Mais Notícias */}
                <div className="text-center mt-12">
                    <button id="btn-noticias" className="bg-purple-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-800 transition-colors shadow-lg hover:shadow-xl">
                        Ver Mais Notícias
                    </button>
                </div>
            </div>
        </section>
    );
}

export default NoticiasViolencia;