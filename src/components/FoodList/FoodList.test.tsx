import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FoodList from './FoodList';
import { Food } from '../../lib/types/food';
import { MOCK_FOODS } from '../../lib/mocks/mockData';

afterEach(() => {
	cleanup();
});

describe('Food List Component', () => {
	render(<FoodList list={MOCK_FOODS.foods as Food[]} />);
	const foodList = screen.getByTestId('foods');

	test('Component rendered', () => {
		expect(foodList).toBeInTheDocument();
	});
});
