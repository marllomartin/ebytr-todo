import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components/Header'

describe('1 - Testa o componente `Header`', () => {
  it('O componente `Header` está sendo renderizado', () => {
    render(<Header />);
  });
});
