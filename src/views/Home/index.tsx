import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Check } from '@phosphor-icons/react';

import { Button } from '../../components/Button';
import { ScrollDown } from './ScrollDown';

import slider from '../../assets/images/slider.png';

import { StyledDashboard } from './styles';

export function Home() {
  const router = useRouter();

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();

    router.push('/rent');
  };

  return (
    <StyledDashboard className="container" id="home">
      <section className="dashboard-section section">
        <div className="dashboard-slogan">
          <h1>Alugue carros de uma forma prática e rápida</h1>
          <p>
            Os melhores modelos de carros já estão disponíveis no{' '}
            <span>Renter Club</span>, assine por apenas{' '}
            <span>R$ 119,99</span> e receba
            descontos especiais todos os meses!
          </p>
        </div>

        <div className="btn-container">
          <Button onClick={(e) => handleClick(e)}>
            Alugar um carro agora
          </Button>
          <Button>Assinar Renter Club</Button>
        </div>

        <div className="dashboard-info">
          <ScrollDown />

          <div className="count-container">
            <Check weight="bold" />

            <p>
              <span>+27.842</span>
              <span>pessoas estão alugando</span>
            </p>
          </div>
        </div>
      </section>

      <div className="dashboard-img">
        <Image src={slider} alt="carros" />
      </div>
    </StyledDashboard>
  );
}
