import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/general/Button'; 

test('renderiza el botón con el texto correcto', () => {
  render(<Button buttonText="Haz clic aquí" />);
  expect(screen.getByText('Haz clic aquí')).toBeInTheDocument();
});

test('renderiza el botón con el estilo correcto', () => {
  render(<Button buttonText="Botón Estilizado" buttonStyle="bg-blue-500" />);
  const button = screen.getByText('Botón Estilizado');
  expect(button).toHaveClass('bg-blue-500');
});

test('llama al manejador onClick cuando se hace clic', () => {
  const handleClick = vi.fn(); 
  render(<Button buttonText="Haz clic aquí" onClick={handleClick} />);
  fireEvent.click(screen.getByText('Haz clic aquí'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('renderiza el botón sin texto', () => {
  render(<Button buttonText="" />);
  expect(screen.getByRole('button')).toHaveTextContent('');
});

test('renderiza el botón sin manejador onClick', () => {
  render(<Button buttonText="Sin Manejador de Clics" />);
  expect(screen.getByText('Sin Manejador de Clics')).toBeInTheDocument();
});

test('renderiza múltiples botones y maneja los clics', () => {
  const handleClick = vi.fn(); 
  render(
    <>
      <Button buttonText="Botón 1" onClick={handleClick} />
      <Button buttonText="Botón 2" onClick={handleClick} />
    </>
  );
  const buttons = screen.getAllByRole('button');
  fireEvent.click(buttons[0]);
  expect(handleClick).toHaveBeenCalledTimes(1);
  fireEvent.click(buttons[1]);
  expect(handleClick).toHaveBeenCalledTimes(2);
});

test('aplica condicionalmente el buttonStyle', () => {
  render(
    <>
      <Button buttonText="Primario" buttonStyle="bg-blue-500" />
      <Button buttonText="Secundario" buttonStyle="bg-gray-500" />
    </>
  );
  expect(screen.getByText('Primario')).toHaveClass('bg-blue-500');
  expect(screen.getByText('Secundario')).toHaveClass('bg-gray-500');
});
