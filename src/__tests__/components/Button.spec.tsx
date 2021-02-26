import React from 'react';
import { render } from '@testing-library/react';

import Button from '../../components/Button';

describe('Button component', () => {
  it('should be able to render button component properly', () => {
    const { getByText } = render(<Button>Test</Button>);

    expect(getByText('Test')).toBeTruthy();
  });

  it('should render loading test when passing prop', () => {
    const { getByText } = render(<Button loading>Test</Button>);

    expect(getByText('Carregando...')).toBeTruthy();
  });
});
