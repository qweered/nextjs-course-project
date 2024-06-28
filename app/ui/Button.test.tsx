// import { render, screen, fireEvent } from '@testing-library/react'
// import '@testing-library/jest-dom'
// import { describe, test, expect, vi } from 'vitest'
// import { Button } from './Button'
//
// describe('Button Component', () => {
// 	test('renders with the correct text', () => {
// 		render(<Button size="medium" text="Click Me" color="green" />)
// 		const buttonElement = screen.getByText(/click me/i)
// 		expect(buttonElement).toBeInTheDocument()
// 	})
//
// 	test('applies the correct className based on size prop', () => {
// 		const { rerender } = render(
// 			<Button size="large" text="Large Button" color="green" />,
// 		)
// 		expect(screen.getByText(/large button/i)).toHaveClass('h-14 w-48')
//
// 		rerender(<Button size="medium" text="Medium Button" color="green" />)
// 		expect(screen.getByText(/medium button/i)).toHaveClass('h-12 w-32')
//
// 		rerender(<Button size="small" text="Small Button" color="green" />)
// 		expect(screen.getByText(/small button/i)).toHaveClass('h-12 w-12')
// 	})
//
// 	test('applies the correct className based on color prop', () => {
// 		const { rerender } = render(
// 			<Button size="medium" text="Green Button" color="green" />,
// 		)
// 		expect(screen.getByText(/green button/i)).toHaveClass('bg-green text-white')
//
// 		rerender(<Button size="medium" text="Black Button" color="black" />)
// 		expect(screen.getByText(/black button/i)).toHaveClass('text-black')
// 	})
//
// 	test('fires onClick event when clicked', () => {
// 		const handleClick = vi.fn()
// 		render(
// 			<Button
// 				size="medium"
// 				text="Click Me"
// 				color="green"
// 				onClick={handleClick}
// 			/>,
// 		)
// 		fireEvent.click(screen.getByText(/click me/i))
// 		expect(handleClick).toHaveBeenCalledTimes(1)
// 	})
//
// 	test('does not fire onClick event when disabled', () => {
// 		const handleClick = vi.fn()
// 		render(
// 			<Button
// 				size="medium"
// 				text="Click Me"
// 				color="green"
// 				onClick={handleClick}
// 				disabled
// 			/>,
// 		)
// 		fireEvent.click(screen.getByText(/click me/i))
// 		expect(handleClick).not.toHaveBeenCalled()
// 		expect(screen.getByText(/click me/i)).toBeDisabled()
// 	})
//
// 	test('renders with the correct type attribute', () => {
// 		const { rerender } = render(
// 			<Button size="medium" text="Button" color="green" type="submit" />,
// 		)
// 		expect(screen.getByText(/button/i)).toHaveAttribute('type', 'submit')
//
// 		rerender(<Button size="medium" text="Button" color="green" type="reset" />)
// 		expect(screen.getByText(/button/i)).toHaveAttribute('type', 'reset')
//
// 		rerender(<Button size="medium" text="Button" color="green" type="button" />)
// 		expect(screen.getByText(/button/i)).toHaveAttribute('type', 'button')
// 	})
// })
