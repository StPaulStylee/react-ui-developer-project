import { fireEvent, render } from '@testing-library/react';
import { SearchResultItem } from './SearchResultItem';

describe('SearchResultItem Component', () =>{
  const props = {
    handleClick: jest.fn() as any,
    name: 'Bob Suruncle',
    symbol: 'BSUNCL'
  } as any;

  it('renders the symbol and name data as expected', () => {
    const component = render(<SearchResultItem handleClick={props.handleClick} name={props.name} symbol={props.symbol} />)
    const nameData = component.getByText('Bob Suruncle');
    const symbolData = component.getByText('BSUNCL');
    expect(nameData).toBeInTheDocument();
    expect(symbolData).toBeInTheDocument();
  });

  it('should call the "handleClick" method when clicked', () => {
    const component = render(<SearchResultItem handleClick={props.handleClick} name={props.name} symbol={props.symbol} />)
    const nameData = component.getByText('Bob Suruncle');
    fireEvent.click(nameData);
    expect(props.handleClick).toHaveBeenCalled();
  })
})