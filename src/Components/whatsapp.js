import React from "react";
import { FaWhatsapp  } from "react-icons/fa";


const WhatsAppChat = () => {
  const handleClick = () => {
    const phoneNumber = "+923111122144"; 
    const message = "Hello! I need assistance."; 
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="whatsapp-chat" onClick={handleClick}>
      <FaWhatsapp size={50} color="#25D366" />
    </div>
  );
};

export default WhatsAppChat;
