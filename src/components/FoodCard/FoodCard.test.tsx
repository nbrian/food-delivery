import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FoodCard from './FoodCard';
import { Food } from '../../lib/types/food';

const data: Food = {
	id: '628b5decee8163179ee23d3e',
	index: 196,
	rating: 4.2928,
	promotion: '1+1',
	isNew: false,
	categoryId: '6288a89fe6c2fe0b758360fe',
	minCookTime: 120,
	maxCookTime: 140,
	restaurant: 'Imkan',
	name: 'Imkan Deserts',
	imageUrl: 'https://source.unsplash.com/random/400x400?Deserts',
};

afterEach(() => {
	cleanup();
});

describe('Food Card Component', () => {
	render(<FoodCard food={data} />);
	const food = screen.getByTestId('food');

	test('Component rendered', () => {
		expect(food).toBeInTheDocument();
	});
});
