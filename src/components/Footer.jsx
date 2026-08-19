import { useState } from "react";
import logo from "../assets/logo/logo.png";
import whatsappIcon from "../assets/icons/whatsapp.png";
import telegramIcon from "../assets/icons/telegram.png";
import "../components/header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header_container">
        
        <a href="#" className="header_logo logo">
          <img src={logo} alt="Softerio Technologies" className="logo_icon" />
          <div className="logo_text-group">
            <span className="logo_brand">Softerio</span>
            <span className="logo_title">Technologies</span>
            <span className="logo_tagline">МЫ ПИШЕМ КОД, КОТОРЫЙ РАБОТАЕТ</span>
          </div>
        </a>

       
        <nav className={`header_nav nav ${isMenuOpen ? "nav-open" : ""}`}>
          <ul className="nav_list">
            <li className="nav_item" onClick={() => setIsMenuOpen(false)}>
              <a href="#" className="nav_link nav_link-active">Главная</a>
            </li>
            <li className="nav_item" onClick={() => setIsMenuOpen(false)}>
              <a href="#" className="nav_link">О нас</a>
            </li>
            <li className="nav_item" onClick={() => setIsMenuOpen(false)}>
              <a href="#" className="nav_link">Наши услуги</a>
            </li>
            <li className="nav_item" onClick={() => setIsMenuOpen(false)}>
              <a href="#" className="nav_link">Этапы работы</a>
            </li>
            <li className="nav_item" onClick={() => setIsMenuOpen(false)}>
              <a href="#" className="nav_link">Стоимость</a>
            </li>
            <li className="nav_item nav_item-dropdown">
              <a href="#" className="nav_link">
                Ещё ⌄
              </a>
            </li>
          </ul>
        </nav>

        <div className="header_actions">
          <div className="header_contacts contacts">
            <a href="tel:+74993488216" className="contacts_phone">8 (499) 348-82-16</a>
            <a href="mailto:hello@softerio.ru" className="contacts_email">hello@softerio.ru</a>
          </div>

          <div className="header_socials socials">
            <a href="https://wa.me/74993488216" className="socials_btn socials_btn-whatsapp" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
              <img src={whatsappIcon} alt="WhatsApp" className="socials_icon" />
            </a>
            <a href="https://t.me/softerio" className="socials_btn socials_btn-telegram" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
              <img src={telegramIcon} alt="Telegram" className="socials_icon" />
            </a>
          </div>
        </div>

      </div>
    </header>
  );
}
