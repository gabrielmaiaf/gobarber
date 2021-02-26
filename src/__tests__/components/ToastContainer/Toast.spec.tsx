import React from 'react';
import { render } from '@testing-library/react';

import Toast from '../../../components/ToastContainer/Toast';

const mockedToast = {
  id: 'test-123',
  title: 'Toast test',
};

describe('Toast component', () => {
  it('should render toast', () => {
    const { getByText } = render(<Toast style={{}} message={mockedToast} />);

    expect(getByText(mockedToast.title)).toBeTruthy();
  });
});
