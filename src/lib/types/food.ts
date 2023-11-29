export type Promotions = 'gift' | '1+1' | 'discount' | null;

export type Food = {
	id: string;
	index: number;
	rating: number;
	promotion: Promotions;
	isNew: boolean;
	categoryId: string;
	minCookTime: number;
	maxCookTime: number;
	restaurant: string;
	name: string;
	imageUrl: string;
};
