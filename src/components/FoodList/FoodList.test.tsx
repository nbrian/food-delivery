import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FoodList from './FoodList';
import { Food } from '../../lib/types/food';

const data: Food[] = [
	{
		id: '628b5dec795c64a968193a0c',
		index: 194,
		rating: 3.984,
		promotion: 'discount',
		isNew: false,
		categoryId: '6288a89fac9e970731bfaa7b',
		minCookTime: 100,
		maxCookTime: 120,
		restaurant: 'Earthpure',
		name: 'Earthpure Drinks',
		imageUrl: 'https://source.unsplash.com/random/400x400?Drinks',
	},
	{
		id: '628b5dec2abdabdbe19281e1',
		index: 195,
		rating: 4.1983,
		promotion: null,
		isNew: false,
		categoryId: '6288a89f70dc8cf93b71609b',
		minCookTime: 80,
		maxCookTime: 100,
		restaurant: 'Comveyer',
		name: 'Comveyer Hot Meals',
		imageUrl: 'https://source.unsplash.com/random/400x400?Hot%20Meals',
	},
];

afterEach(() => {
	cleanup();
});

describe('Food List Component', () => {
	render(<FoodList list={data} />);
	const foodList = screen.getByTestId('foods');

	test('Component rendered', () => {
		expect(foodList).toBeInTheDocument();
	});
});
