import React from 'react';
import { render } from '@testing-library/react';
import AddTask from '../components/AddTask'

describe('1 - Testa o componente `AddTask`', () => {
  it('O componente `AddTask` está sendo renderizado', () => {
    render(<AddTask />);
  });
});
