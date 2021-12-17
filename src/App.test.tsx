import { render } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders the search input and label', () => {
    const app = render(<App />);
    const input = app.getByLabelText('Find a stock by Symbol or Name');
    expect(input).toBeInTheDocument();
  });
})
