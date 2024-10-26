import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import MyButton from '../MyButton';

describe('MyButton component', () => {
  it('debería renderizarse correctamente', () => {
    render(<MyButton text="Haz click" txtcolor="white" bgcolor="purple" bordercolor="purple" bordersize="2px" hoverTxtColor="pink" hoverBgColor="magenta" />);
    const button = screen.getByText(/Haz click/i);
    expect(button).toBeInTheDocument();
  });

  it('debería manejar el evento onClick', () => {
    const handleClick = vi.fn();
    render(<MyButton text="Haz click" txtcolor="white" bgcolor="purple" bordercolor="purple" bordersize="2px" hoverTxtColor="pink" hoverBgColor="magenta" onClick={handleClick} />);
    fireEvent.click(screen.getByText(/Haz click/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('debería estar deshabilitado cuando disabled es true', () => {
    render(<MyButton text="Haz click" txtcolor="white" bgcolor="purple" bordercolor="purple" bordersize="2px" hoverTxtColor="pink" hoverBgColor="magenta" disabled />);
    const button = screen.getByText(/Haz click/i);
    expect(button).toBeDisabled();
  });
});
