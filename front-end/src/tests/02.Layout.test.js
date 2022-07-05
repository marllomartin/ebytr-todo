import React from 'react';
import { render } from '@testing-library/react';
import Layout from '../components/Layout'

describe('1 - Testa o componente `Layout`', () => {
  it('O componente `Layout` está sendo renderizado', () => {
    render(<Layout />);
  });
});
