import { Fragment, useEffect, useState } from 'react';
import { Category } from '../../lib/types/category';
import styles from './Filter.module.css';

type tFilter = {
	filters: Category[];
	handleSelect: (filters: Category[]) => void;
};
const Filter = ({ filters, handleSelect }: tFilter) => {
	const [isAll, setIsAll] = useState<boolean>(true);
	const [selected, setSelected] = useState<Category[]>(filters);

	const selectFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedItem = e.target.value;
		const itemSelectedFn = (item: Category) => item.id === selectedItem;

		const filter = filters.find(itemSelectedFn);
		const selectedFilter = selected.find(itemSelectedFn);

		setSelected((prev) => {
			// 'All' is selected and the item is already in the selected list, keep only that item
			if (isAll && selectedFilter) {
				const s = [selectedFilter];
				handleSelect(s);
				return s;
			}
			// Not 'All' and the item is already selected, remove it from the selection
			else if (!isAll && selectedFilter) {
				const s = prev.filter((f) => f.id !== selectedItem);
				handleSelect(s);
				return s;
			}
			// Not 'All' and the item is not selected, add it to the selection
			else if (!isAll && filter) {
				const s = [...prev, filter];
				handleSelect(s);
				return [...prev, filter];
			}

			return prev;
		});
	};

	const isChecked = (id: string) => {
		const filter = selected.find((f) => f.id === id);
		selected.map((f) => f.id).includes(id);
		if (isAll) {
			return false;
		} else {
			return filter ? true : false;
		}
	};

	const selectAll = () => {
		setIsAll(true);
		setSelected(filters);
	};

	useEffect(() => {
		setIsAll(
			selected.length === filters.length &&
				selected.every((s) => filters.some((f) => s.id === f.id))
		);
	}, [selected, filters]);

	return (
		<div data-testid='filter' role='filter' className={styles.filterContainer}>
			<>
				<input
					type='checkbox'
					data-testid='filter-all'
					id='all'
					checked={isAll}
					onChange={selectAll}
				/>
				<label htmlFor='all'>All</label>
			</>
			{filters.map((filter) => (
				<Fragment key={filter.id}>
					<input
						type='checkbox'
						id={filter.id}
						value={filter.id}
						checked={isChecked(filter.id)}
						onChange={selectFilter}
					/>
					<label htmlFor={filter.id}>{filter.name}</label>
				</Fragment>
			))}
		</div>
	);
};

export default Filter;
