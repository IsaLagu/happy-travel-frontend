import { render, screen } from '@testing-library/react';
import Input from '../components/general/Input';
import React from 'react';

test('renderiza el input con el tipo correcto', () => {
  render(<Input type="email" />);
  expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
});

test('renderiza el input con el id correcto', () => {
  render(<Input id="test-id" />);
  expect(screen.getByRole('textbox')).toHaveAttribute('id', 'test-id');
});

test('aplica las clases adicionales correctamente', () => {
  render(<Input className="custom-class" />);
  const input = screen.getByRole('textbox');
  expect(input).toHaveClass('custom-class');
});

test('renderiza el input con el placeholder correcto', () => {
  render(<Input placeholder="Introduce tu nombre" />);
  expect(screen.getByPlaceholderText('Introduce tu nombre')).toBeInTheDocument();
});

test('pasa la referencia al input correctamente', () => {
  const ref = React.createRef();
  render(<Input ref={ref} />);
  expect(ref.current).toBe(screen.getByRole('textbox'));
});

test('pasa las propiedades adicionales al input', () => {
  render(<Input aria-label="Input Personalizado" />);
  expect(screen.getByLabelText('Input Personalizado')).toBeInTheDocument();
});

test('el input puede recibir y mostrar texto', () => {
  render(<Input placeholder="Escribe aquí..." />);
  const input = screen.getByPlaceholderText('Escribe aquí...');
  expect(input.value).toBe('');
  input.value = '¡Hola, Coders!';
  expect(input.value).toBe('¡Hola, Coders!');
});
