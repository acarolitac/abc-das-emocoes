import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from "../components/Layout/Navbar/navbar.jsx";
import Footer from "../components/Layout/Footer/footer.jsx";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton.jsx";
import AOSInit from '../components/AOSinit/AOSinit.jsx';
import Materiais from "../components/Sections/Materiais/materiais.jsx";
import 'aos/dist/aos.css'; // Importação do CSS do AOS

function NossosMateriaisPage() {  // Nome corrigido para match com o arquivo
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

      <main>
        <section id="materiais" data-aos="fade-up">
          <Materiais />
        </section>
      </main>
      
      <footer id="footer">
        <Footer />
      </footer>
      
      <WhatsAppButton /> 
    </>
  );
}

export default NossosMateriaisPage; // Export com nome correto