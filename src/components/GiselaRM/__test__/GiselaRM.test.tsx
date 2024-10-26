import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import GiselaRM from '../GiselaRM'; 

describe('GiselaRM component', () => {
  it('El componente GiselaRM se debería renderizar correctamente', () => {
    render(
      <GiselaRM
        title="Titulo del test"
        description="Descripcion del test"
        avatar="https://example.com/avatar.jpg"
      />
    );

    const title = screen.getByText('Titulo del test');
    expect(title).toBeInTheDocument();

    const description = screen.getByText('Descripcion del test');
    expect(description).toBeInTheDocument();

    const avatar = screen.getByAltText('Titulo del test');
    expect(avatar).toBeInTheDocument();
  });
});
