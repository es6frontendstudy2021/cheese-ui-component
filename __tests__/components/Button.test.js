import { afterEach, beforeEach } from 'jest-circus';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';

import { Button } from '../../src/components/Button';

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
    const { container, getByText } = render(<Button></Button>);
    expect(container.textContent).toBe('');
  });

  it('renders with text', () => {
    const { container, getByText } = render(<Button>test</Button>);
    expect(container.textContent).toBe('test');
    expect(container.textContent).not.toBe('');
  });
});
