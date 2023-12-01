import { useEffect, useState } from 'react';
import Search from '../components/Search/Search';
import styles from './FoodListPage.module.css';
import Filter from '../components/Filter/Filter';
import { Category } from '../lib/types/category';
import FoodList from '../components/FoodList/FoodList';
import { Food } from '../lib/types/food';

const FoodListPage = () => {
	const [keyword, setKeyword] = useState<string>('');
	const [categories, setCategories] = useState<Category[]>([]);
	const [foods, setFoods] = useState<Food[]>([]);
	const [filters, setFilters] = useState<Category[]>([]);
	const [filteredFoods, setFilteredFoods] = useState<Food[]>([]);

	const fetchFoods = async () => {
		return await fetch(
			'https://run.mocky.io/v3/c75dc0d8-ad78-4b3d-b697-807a5ded8645'
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				// setFoods(data.foods);
				return data.foods;
			})
			.catch((err) => {
				console.log('err', err);
				return [];
			});
	};

	const fetchCategories = async () => {
		return await fetch(
			'https://run.mocky.io/v3/b88ec762-2cb3-4015-8960-2839b06a7593'
		)
			.then((response) => {
				return response.json();
			})
			.catch((err) => {
				console.error('err', err);
				return [];
			});
	};

	useEffect(() => {
		Promise.all([fetchFoods(), fetchCategories()])
			.then((data) => {
				const responseFoods = data[0] as unknown as Food[];
				const responseCategories = data[1] as unknown as Category[];

				setFoods(responseFoods);
				setCategories(responseCategories);
			})
			.catch((err) => console.error('error', err));
	}, []);

	useEffect(() => setFilteredFoods(foods), [foods]);
	useEffect(() => setFilters(categories), [categories]);

	const getFilteredList = (f: Category[], keyword: string) => {
		const fil = f.map((fltr) => fltr.id);
		console.log(fil);
		return foods.filter(
			(food) =>
				food.restaurant.toLowerCase().includes(keyword.toLowerCase()) &&
				fil.includes(food.categoryId)
		);
	};

	const handleSearch = (word: string) => {
		setKeyword(word);
		setFilteredFoods(getFilteredList(filters, word));
	};

	const handleFilter = (f: Category[]) => {
		setFilters(f);
		setFilteredFoods(getFilteredList(f, keyword));
	};

	return (
		<div className={styles.container} data-testid='food-list-page'>
			<div className={styles.searchInput}>
				<Search handleSearch={handleSearch} />
				{keyword}
			</div>
			{categories.length > 0 && (
				<div className={styles.filters}>
					<Filter filters={categories} handleSelect={handleFilter} />
				</div>
			)}
			{filteredFoods ? (
				<div className={styles.list}>
					<FoodList list={filteredFoods} />
				</div>
			) : null}
		</div>
	);
};

export default FoodListPage;
