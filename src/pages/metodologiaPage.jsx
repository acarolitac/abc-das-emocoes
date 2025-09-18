import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from "../components/Layout/Navbar/navbar.jsx";
import Juntar from "../components/Sections/Juntar-se/juntar.jsx";
import Footer from "../components/Layout/Footer/footer.jsx";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton.jsx";
import AOSInit from '../components/AOSinit/AOSinit.jsx';
import Metodologia from "../components/Sections/MetodologiaABCPage/metodologia.jsx"; 
import 'aos/dist/aos.css'; // Importação do CSS do AOS

function MetodologiaPage() {
  useEffect(() => {
    // Inicializa o AOS se ainda não estiver inicializado
    if (!AOS.initialized) {
      AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-in-out',
      });
    }
    
    // Reinicializa o AOS quando o componente monta
    AOS.refresh();
    
    // Scroll suave para anchor links
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute('href').substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <>
      <AOSInit />
      <Navbar />

      <main>
        <section id="metodologia" data-aos="fade-up" data-aos-delay="100">
          <Metodologia />
        </section>
        
        <section id="juntar" data-aos="fade-up" data-aos-delay="200">
          <Juntar />
        </section>
      </main>
      
      <footer id="footer">
        <Footer />
      </footer>
      
      {/* Botão do WhatsApp fixo */}
      <WhatsAppButton /> 
    </>
  );
}

export default MetodologiaPage;