import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyFavorite from '../myfavorite';

describe('MyFavourite component', () => {
  it('Renderizado correcto', () => {
    render(<MyFavorite iconColor="red" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('Color de ícono correcto', () => {
    render(<MyFavorite iconColor="blue" />);
    expect(screen.getByRole('button')).toHaveStyle('color: rgb(0, 0, 255)');
  });

  it('Deshabilitado si es true', () => {
    render(<MyFavorite iconColor="red" disabled />);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
