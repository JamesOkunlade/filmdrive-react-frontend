import React from 'react';

const movieCategories = ['All', 'Comedy', 'Sci-fi', 'Horror', 'Romance', 'Action', 'Thriller', 'Drama', 'Mystery', 'Crime', 'Animation', 'Adventure', 'Fantasy']

const CategoryFilter = (props) => {
    const { handleFilterChange } = props;
    const filterOptions = movieCategories.map(category => (<option key={category} name={category}>{category}</option>))

    return (
        <div>
            <span>
                Filter by:
            </span>
            <select onChange={handleFilterChange}>
                {filterOptions}
            </select>
        </div>
    )
}

export default CategoryFilter;