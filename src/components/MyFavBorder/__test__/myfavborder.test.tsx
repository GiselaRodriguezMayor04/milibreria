import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyFavBorder from '../myfavborder';

describe('MyFavBorder component', () => {
  it('debería renderizarse correctamente', () => {
    render(<MyFavBorder iconColor="green" />);
    const iconButton = screen.getByRole('button');
    expect(iconButton).toBeInTheDocument();
  });
});
