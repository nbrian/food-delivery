import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Filter from './Filter';
import { MOCK_CATEGORIES } from '../../lib/mocks/mockData';

afterEach(() => {
	cleanup();
});

describe('Search Component', () => {
	const handleSelect = jest.fn();

	render(<Filter handleSelect={handleSelect} filters={MOCK_CATEGORIES} />);
	const filter = screen.getByTestId('filter');

	test('Component rendered', () => {
		const allCheckboxes = filter.querySelectorAll<HTMLInputElement>(
			"input[type='checkbox']"
		);

		expect(filter).toBeInTheDocument();
		expect(allCheckboxes).toHaveLength(MOCK_CATEGORIES.length + 1);
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
