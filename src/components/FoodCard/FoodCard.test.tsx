import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FoodCard from './FoodCard';
import { Food } from '../../lib/types/food';
import { MOCK_FOODS } from '../../mocks/mockData';

afterEach(() => {
	cleanup();
});

describe('Food Card Component', () => {
	render(<FoodCard food={MOCK_FOODS.foods[0] as Food} />);
	const food = screen.getByTestId('food');

	test('Component rendered', () => {
		expect(food).toBeInTheDocument();
	});
});
