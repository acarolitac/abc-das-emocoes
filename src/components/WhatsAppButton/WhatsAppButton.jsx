import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css"; // importa o css separado

export default function WhatsAppButton() {
  const phoneNumber = "5561999453755"; // coloque seu número
  const message = "Olá, gostaria de mais informações!";

  const handleClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <button onClick={handleClick} className="whatsapp-button">
      <FaWhatsapp size={28} />
    </button>
  );
}
