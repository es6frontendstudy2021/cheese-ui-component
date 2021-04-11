import { afterEach, beforeEach } from 'jest-circus';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '@testing-library/react';

import { Button } from '../../src/components/Button';
import '@testing-library/jest-dom/extend-expect';

let container = null;

describe('Components|Button', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('init', () => {
    expect(1).toEqual(1);
  });

  it('renders without any children', () => {
    const { container } = render(<Button></Button>);
    expect(container.textContent).toBe('');
  });

  it('renders with text', () => {
    const { container, getByText } = render(<Button>test</Button>);
    expect(container.textContent).toBe('test');
    expect(container.textContent).not.toBe('');
    expect(getByText('test')).toHaveStyle('display:inline-flex');
  });

  it('type contained', () => {
    const { container, getByText } = render(
      <Button type="contained">contained</Button>,
    );

    expect(getByText('contained').className.includes('contained'));
  });

  it('type outlined', () => {
    const { container, getByText } = render(
      <Button type="outlined">outlined</Button>,
    );
    expect(getByText('outlined').className.includes('outlined'));
  });

  it('type texted', () => {
    const { container, getByText } = render(
      <Button type="texted">texted</Button>,
    );
    expect(getByText('texted').className.includes('texted'));
  });
});
