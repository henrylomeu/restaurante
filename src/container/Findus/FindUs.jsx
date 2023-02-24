import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title='Contato'/>
      <h1 className='headtext__cormorant' style={{marginBottom: '3rem'}}>Nos Encontre Aqui</h1>
      <div className='app__wrapper-content'>
      <p className="p__opensans">SCES Trecho 2 Conj. 36 – Icone Parque Brasília – DF,70200-002</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Horários de funcionamento</p>
        <p className="p__opensans">Seg - Qui: 11:00h - 23:00h</p>
        <p className="p__opensans">Sex - Dom: 10:00h - 02:00h</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Nos Visite</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt='findus'/>
    </div>
  </div>
);

export default FindUs;
