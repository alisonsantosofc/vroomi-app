import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import { Rent } from './';


describe('Cart', () => {
  it('should be able renders the Cart component', () => {
    render(
      <Rent />
    );

    const textElement = screen.queryByText('olaa');

    

    expect(textElement).toBeDefined();
  });
});
