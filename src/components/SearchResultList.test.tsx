import { render } from '@testing-library/react';
import { SearchResultList } from './SearchResultList';

describe('SearchResultList Component', () => {
  it('renders an array of children', () => {
    const children = [<div>I'm child one.</div>, <div>I'm child two.</div>];
    const component = render(<SearchResultList>{children.map(child => child)}</SearchResultList>)
    const childOne = component.getByText('I\'m child one.');
    const childTwo = component.getByText('I\'m child two.');
    expect(childOne).toBeInTheDocument();
    expect(childTwo).toBeInTheDocument();
  });
});