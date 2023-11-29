import { GiftIcon, StarFillIcon } from '@primer/octicons-react';
import { Food, Promotions } from '../../lib/types/food';
import styles from './FoodCard.module.css';

type tFood = {
	food: Food;
};
const FoodCard = ({ food }: tFood) => {
	const promotions = (promotion: Promotions) => {
		switch (promotion) {
			case 'gift':
				return (
					<span className={styles.promotion} content={promotion}>
						<GiftIcon />
					</span>
				);
			case '1+1':
				return (
					<span className={styles.promotion} content={promotion}>
						1+1
					</span>
				);
			case 'discount':
				return (
					<span className={styles.promotion} content={promotion}>
						%
					</span>
				);
			default:
				null;
		}
	};
	return (
		<div data-testid='food' className={styles.foodCard}>
			{promotions(food.promotion)}
			<img src={food.imageUrl} alt={food.name} />
			<div className={styles.foodDetails}>
				<h5>{food.name}</h5>
				<div>
					<span>
						<StarFillIcon /> {food.rating}
					</span>
					<span>
						{food.minCookTime}-{food.maxCookTime} min
					</span>
					{food.isNew ? <span content='new'>New</span> : null}
				</div>
			</div>
		</div>
	);
};

export default FoodCard;
