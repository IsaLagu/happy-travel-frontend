// SignUp.test.jsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SignUp from '../pages/SignUp'; // Ajusta la ruta según tu estructura
import { UserProvider } from '../context/UserContext'; // Asegúrate de importar el UserProvider

// Función auxiliar para renderizar con contexto
const renderWithUserContext = (ui, renderOptions) => {
  return render(
    <UserProvider>
      {ui}
    </UserProvider>,
    renderOptions
  );
};

// Test 1: Renderización Básica del Componente
describe('SignUp Component', () => {
  it('renders SignUp component', () => {
    renderWithUserContext(<SignUp />);
    
    // Verifica que el formulario esté presente
    expect(screen.getByRole('form')).toBeInTheDocument();

    // Verifica que los campos de entrada y los botones estén presentes
    expect(screen.getByPlaceholderText('Escribe tu nombre')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Escribe tu email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Escribe tu contraseña')).toBeInTheDocument();
    expect(screen.getByText('Aceptar')).toBeInTheDocument();
    expect(screen.getByText('Cancelar')).toBeInTheDocument();
  });

  // Test 2: Prueba de Interacción Básica
  it('updates input fields and submits form', async () => {
    // Mock de usePost
    const executePostMock = vi.fn().mockResolvedValue({ token: 'fake-token' });
    vi.mock('../hooks/usePost', () => () => ({
      error: null,
      executePost: executePostMock,
      data: null,
    }));

    // Mock de useUser
    const setTokenMock = vi.fn();
    vi.mock('../context/UserContext', () => ({
      useUser: () => ({ setToken: setTokenMock }),
    }));

    renderWithUserContext(<SignUp />);

    // Encuentra los campos de entrada usando su placeholder
    const nameInput = screen.getByPlaceholderText('Escribe tu nombre');
    const emailInput = screen.getByPlaceholderText('Escribe tu email');
    const passwordInput = screen.getByPlaceholderText('Escribe tu contraseña');

    // Simula la entrada de texto en los campos
    fireEvent.change(nameInput, { target: { value: 'Juan Pérez' } });
    fireEvent.change(emailInput, { target: { value: 'juan@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Verifica que los valores se actualicen
    expect(nameInput.value).toBe('Juan Pérez');
    expect(emailInput.value).toBe('juan@example.com');
    expect(passwordInput.value).toBe('password123');

    // Simula el clic en el botón de envío
    const submitButton = screen.getByText('Aceptar');
    fireEvent.click(submitButton);

    // Espera que executePost haya sido llamado
    await waitFor(() => expect(executePostMock).toHaveBeenCalledWith({
      name: 'Juan Pérez',
      email: 'juan@example.com',
      password: 'password123',
    }));

    // Espera que setToken haya sido llamado con el token simulado
    await waitFor(() => expect(setTokenMock).toHaveBeenCalledWith('fake-token'));
  });

  // Test 3: Prueba de Errores de Validación
  it('shows validation errors for invalid input', async () => {
    renderWithUserContext(<SignUp />);

    // Encuentra el botón de envío y haz clic en él sin ingresar datos
    const submitButton = screen.getByText('Aceptar');
    fireEvent.click(submitButton);

    // Verifica que se muestren mensajes de error (ajusta el texto según lo que el componente muestra)
    await waitFor(() => {
      expect(screen.getByText('Nombre requerido')).toBeInTheDocument();
      expect(screen.getByText('E-Mail requerido')).toBeInTheDocument();
      expect(screen.getByText('Contraseña requerida')).toBeInTheDocument();
    });
  });
});
