import { SearchIcon } from '@primer/octicons-react';
import './Search.module.css';

type tSearch = {
	handleSearch: (keyword: string) => void;
};
const Search = ({ handleSearch }: tSearch) => {
	const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		handleSearch(e.target.value);
	};
	return (
		<div>
			<input
				data-testid='search'
				placeholder='Enter restaurant name...'
				onChange={onSearch}
			/>
			<SearchIcon />
		</div>
	);
};

export default Search;