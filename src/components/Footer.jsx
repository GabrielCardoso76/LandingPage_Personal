import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Deusmar Personal Trainer | Todos os direitos reservados. | <a href="#">Política de Privacidade</a></p>
      <div className="social-icons">
        <a href="#"><img src="https://img.icons8.com/ios-filled/30/FFFFFF/instagram-new--v1.png" alt="Instagram" className="social-icon" /></a>
        <a href="#"><img src="https://img.icons8.com/ios-filled/30/FFFFFF/facebook-new.png" alt="Facebook" className="social-icon" /></a>
        <a href="#"><img src="https://img.icons8.com/ios-filled/30/FFFFFF/whatsapp.png" alt="WhatsApp" className="social-icon" /></a>
      </div>
    </footer>
  );
};

export default Footer;
