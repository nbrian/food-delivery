import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from './Search';

afterEach(() => {
	cleanup();
});

describe('Search Component', () => {
	const handleSearch = jest.fn();
	render(<Search handleSearch={handleSearch} />);
	const search = screen.getByTestId('search');
	const placeholder = 'Enter restaurant name...';

	test('Search Component rendering', () => {
		expect(search).toBeInTheDocument();
	});

	test('Search Component placeholder', () => {
		expect(search.getAttribute('placeholder')).toBe(placeholder);
	});
});
