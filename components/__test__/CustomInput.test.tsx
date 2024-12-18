import { render, screen, fireEvent } from '@testing-library/react';
import CustomInput from '../CustomInput';
import '@testing-library/jest-dom';

describe('CustomInput Component', () => {
  it('renders the input with the correct label and placeholder', () => {
    render(<CustomInput label="Test Label" placeholder="Enter text here" />);

    // Check if the label is rendered
    expect(screen.getByText('Test Label')).toBeInTheDocument();

    // Check if the input is rendered with the placeholder
    const input = screen.getByPlaceholderText('Enter text here');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(''); // Initial value should be empty
  });

  it('updates value when user types', () => {
    const handleChange = jest.fn();
    render(<CustomInput label="Test Label" onChange={handleChange} />);

    // Get the input element
    const input = screen.getByRole('textbox'); // Input elements have the role "textbox"

    // Simulate typing
    fireEvent.change(input, { target: { value: 'Hello, World!' } });

    // Check if the input value updates
    expect(input).toHaveValue('Hello, World!');

    // Ensure the onChange function is called with the correct value
    expect(handleChange).toHaveBeenCalledWith('Hello, World!');
  });

  it('displays the correct initial value when set', () => {
    render(<CustomInput label="Test Label" placeholder="Enter text here" />);

    const input = screen.getByPlaceholderText('Enter text here');
    expect(input).toHaveValue(''); // No value is set initially
  });
});
