import { Category } from '../lib/types/category';

const MOCK_CATEGORIES: Category[] = [
	{
		id: '6288a89f1f0152b8c2cd512b',
		name: 'Shushi',
	},
	{
		id: '6288a89f7338764f2071a8a8',
		name: 'Pizza',
	},
	{
		id: '6288a89f70dc8cf93b71609b',
		name: 'Hot Meals',
	},
	{
		id: '6288a89fe6c2fe0b758360fe',
		name: 'Deserts',
	},
	{
		id: '6288a89fac9e970731bfaa7b',
		name: 'Drinks',
	},
];

const MOCK_FOODS = {
	foods: [
		{
			id: '628b5decc94a27754f30e6f1',
			index: 0,
			rating: 3.9508,
			promotion: 'gift',
			isNew: false,
			categoryId: '6288a89fac9e970731bfaa7b',
			minCookTime: 80,
			maxCookTime: 100,
			restaurant: 'Niquent',
			name: 'Niquent Drinks',
			imageUrl: 'https://source.unsplash.com/random/400x400?Drinks',
		},
		{
			id: '628b5decf39bcc4e982fc88a',
			index: 1,
			rating: 4.9874,
			promotion: '1+1',
			isNew: false,
			categoryId: '6288a89f1f0152b8c2cd512b',
			minCookTime: 120,
			maxCookTime: 140,
			restaurant: 'Boilicon',
			name: 'Boilicon Shushi',
			imageUrl: 'https://source.unsplash.com/random/400x400?Shushi',
		},
	],
};

export { MOCK_CATEGORIES, MOCK_FOODS };
