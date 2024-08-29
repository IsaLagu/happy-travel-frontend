import React from "react";
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../components/general/Navbar';
import { useUser } from '../context/UserContext';
import { vi } from 'vitest';


vi.mock('../../src/context/UserContext.jsx');

describe('Componente NavBar - Renderizado Básico', () => {
  it('renderiza el componente NavBar', () => {
    useUser.mockReturnValue({ user: null });

    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const logo = screen.getByAltText(/logo/i);
    expect(logo).toBeInTheDocument();
  });
});

describe('Componente NavBar - Usuario Desconectado', () => {
  it('no renderiza el ícono de avatar cuando el usuario no está conectado', () => {
    useUser.mockReturnValue({ user: null });

    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const avatarIcon = screen.queryByRole('img', { name: /avatar/i });
    expect(avatarIcon).not.toBeInTheDocument();
  });
});
