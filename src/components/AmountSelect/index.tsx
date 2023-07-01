import { useState } from 'react';
import { Minus, Plus } from 'phosphor-react';

import { Container } from './styles';

export function AmountSelect() {
  const [amount, setAmount] = useState(0);

  function handleIncrement() {
    setAmount(amount + 1);
  }

  function handleDecrement() {
    setAmount(amount - 1);
  }

  return (
    <Container>
      <button type="button" onClick={() => handleDecrement()} disabled={amount === 0 && true}>
        <Minus weight="bold" />
      </button>
      <span>{amount}</span>
      <button type="button" onClick={() => handleIncrement()}>
        <Plus weight="bold" />
      </button>
    </Container>
  );
}
