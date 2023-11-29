import { useEffect, useState } from 'react';
import { Category } from '../../lib/types/category';
import { Food } from '../../lib/types/food';
import FoodCard from '../FoodCard/FoodCard';
import styles from './FoodList.module.css';
import { PlusIcon } from '@primer/octicons-react';

const ITEMS_PER_PAGE = 9;
type tFoodList = {
	list: Food[];
	filters?: Category[];
	keyword?: string;
};

const FoodList = ({ list }: tFoodList) => {
	const [foods, setFoods] = useState<Food[]>([]);
	const [pages, setPages] = useState(0);
	const [counter, setCounter] = useState(1);

	const handleShowMore = () => {
		setCounter((prev) => prev + 1);
	};

	useEffect(() => {
		setPages(list.length / ITEMS_PER_PAGE);
		setCounter(1);
	}, [list]);

	useEffect(() => {
		setFoods(list.slice(0, ITEMS_PER_PAGE * counter));
	}, [counter, list]);
	return (
		<div data-testid='foods' className={styles.foodList}>
			{foods.map((item) => (
				<FoodCard key={item.id} food={item} />
			))}

			{pages > 1 && foods.length < list.length ? (
				<>
					<span className={styles.break}></span>
					<button onClick={handleShowMore}>
						<PlusIcon /> Show More
					</button>
				</>
			) : null}
		</div>
	);
};

export default FoodList;
