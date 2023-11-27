import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Filter from './Filter';

afterEach(() => {
	cleanup();
});

describe('Search Component', () => {
	const filters = [
		{
			id: '0',
			name: 'Shushi',
		},
		{
			id: '1',
			name: 'Pizza',
		},
		{
			id: '2',
			name: 'Pizzas',
		},
	];

	const handleSelect = jest.fn();

	render(<Filter handleSelect={handleSelect} filters={filters} />);
	const filter = screen.getByTestId('filter');

	test('Component rendered', () => {
		const allCheckboxes = filter.querySelectorAll<HTMLInputElement>(
			"input[type='checkbox']"
		);

		expect(filter).toBeInTheDocument();
		expect(allCheckboxes).toHaveLength(filters.length + 1);
	});

	test('All option is checked by default', () => {
		const allCheckboxes = filter.querySelectorAll<HTMLInputElement>(
			"input[type='checkbox']"
		);
		expect(allCheckboxes[0].checked).toBe(true);
	});

	test('An option is selected', () => {
		const allCheckboxes = filter.querySelectorAll<HTMLInputElement>(
			"input[type='checkbox']"
		);
		const checkbox1 = allCheckboxes[1];

		fireEvent.click(checkbox1);
		expect(checkbox1.checked).toBe(true);
	});
});
