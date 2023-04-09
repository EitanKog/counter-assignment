// import necessary react testing library helpers here
// import the Counter component here
import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const welcomeMessage = screen.getByText(/Counter/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const welcomeMessage = screen.getByTestId(/count/i);
  expect(welcomeMessage.textContent).toBe("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const countMessage = screen.getByTestId(/count/);
  const temp = screen.getByText("+");
  fireEvent.click(temp)
  expect(countMessage.textContent).toBe("1");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const countMessage = screen.getByTestId(/count/);
  const temp = screen.getByText("-");
  fireEvent.click(temp)
  expect(countMessage.textContent).toBe("-1");
});
