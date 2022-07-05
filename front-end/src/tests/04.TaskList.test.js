import React from 'react';
import { render } from '@testing-library/react';
import TaskList from '../components/TaskList'

describe('1 - Testa o componente `TaskList`', () => {
  it('O componente `TaskList` está sendo renderizado', () => {
    render(<TaskList />);
  });
});
