import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Check } from '@phosphor-icons/react';

import { Button } from '../../components/Button';

import slider from '../../assets/images/slider.png';

import { StyledHome } from './styles';
import { Highlight } from './Highlight';
import { About } from './About';
import { Fleet } from './Fleet';
import { Support } from './Support';

export function Home() {
  const router = useRouter();

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();

    router.push('/rent');
  };

  return (
    <StyledHome>
      <Highlight />
      <About />
      <Fleet />
      <Support />
    </StyledHome>
  );
}
