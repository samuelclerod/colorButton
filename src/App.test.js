import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
});

test('button has starts out enabled', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toBeEnabled();
});

test('checkbox has starts out unchecked', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: "Disable button" });
  expect(checkbox).not.toBeChecked();
});

test('button turns blue when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: /Change to blue/i });
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
  expect(colorButton.textContent).toBe('Change to red');
});

test('button has to be disabled if checkbox is checked ', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: /Disable button/i });
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  const colorButton = screen.getByRole('button', { name: /Change to/i });
  expect(colorButton).not.toBeEnabled(); fireEvent.click(checkbox);
});

test('button must to be enable if checkbox return to checked ', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: /Disable button/i });
  fireEvent.click(checkbox);
  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  const colorButton = screen.getByRole('button', { name: /Change to/i });
  expect(colorButton).toBeEnabled();
});

test('button when red must to change to gray when disabled', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: /Disable button/i });
  const colorButton = screen.getByRole('button', { name: /Change to blue/i });
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' })
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
});

test('button when blue must to change to gray when disabled', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: /Disable button/i });
  const colorButton = screen.getByRole('button', { name: /Change to blue/i });
  fireEvent.click(colorButton);
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' })
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })
})