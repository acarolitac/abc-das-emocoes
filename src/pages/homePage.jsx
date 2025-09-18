import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from "../components/Layout/Navbar/navbar.jsx";
import Sobre from "../components/Sections/Sobre/sobre.jsx";
import Juntar from "../components/Sections/Juntar-se/juntar.jsx";
import Footer from "../components/Layout/Footer/footer.jsx";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton.jsx";
import AOSInit from '../components/AOSinit/AOSinit.jsx';
import Pilares from '../components/Sections/Pilares/pilares.jsx';
import 'aos/dist/aos.css'; // Importação do CSS do AOS
import BannerCarrossel from '../components/Banner/bannerCarrossel.jsx';
import noticiasViolencia from '../components/Sections/NoticiasViolencia/noticiasViolencia.jsx';
import NoticiasViolencia from '../components/Sections/NoticiasViolencia/noticiasViolencia.jsx';

function HomePage() {
  useEffect(() => {
    // Inicializa o AOS se ainda não estiver inicializado
    if (!AOS.initialized) {
      AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-in-out',
        offset: 50,
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
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
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
      <BannerCarrossel />

      <main>
        {/* Seção Sobre - removido o data-aos daqui pois já está no componente Sobre */}
        <section id="sobre" data-aos="fade-up" data-aos-delay="100">
          <Sobre />
        </section>
        
        <section id="pilares" data-aos="fade-up" data-aos-delay="150">
          <Pilares />
        </section>
        
        <section id="noticias" data-aos="fade-up" data-aos-delay="250">
          <NoticiasViolencia />
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

export default HomePage;