import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Nos Contate</h1>
        <p className="p__opensans">SCES Trecho 2 Conj. 36 – Icone Parque Brasília – DF,70200-002</p>
        <p className="p__opensans">(61) 3224-5585</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;A melhor maneira de se encontrar é perder-se a serviço dos outros.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horários de funcionamento</h1>
        <p className="p__opensans">Segunda-Quinta:</p>
        <p className="p__opensans">11:00h - 23:00h</p>
        <p className="p__opensans">Sexta-Domingo:</p>
        <p className="p__opensans">10:00h - 02:00h</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 Gericht. Todos os direitos reservados.</p>
    </div>

  </div>
);

export default Footer;